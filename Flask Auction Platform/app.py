from flask import Flask, render_template, request, redirect, url_for
import sqlite3 as sql
import hashlib

app = Flask(__name__)

host = 'http://127.0.0.1:5000/'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/name', methods=['POST', 'GET'])
def name():
    if request.method == 'POST':  # Checks if the Login button was clicked
        email = request.form['Email']  # Saves the inputs

        password = request.form['Password']
        role = request.form['user_type']
        temp = hashlib.sha256(password.encode())  # Encoding the password
        result = valid_inputs(email, temp.hexdigest(), role)
        message = ""
        if result:
            if role == "bidder":
                return redirect(url_for('bidder_page', email_id=email))
            if role == "seller":
                return redirect(url_for('seller_page', email_id=email))
            if role == "help_desk":
                return redirect(url_for('help_page', email_id=email))
        else:
            message = "Error: Invalid email or password or wrong role selected"
        return render_template('input.html', message=message)  # Renders out the html page
    else:
        return render_template('input.html')  # Renders out the html page


def valid_inputs(email, password, role):
    connection = sql.connect('database.db')
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM users WHERE email=? AND password=?", (email, password))
    ret = cursor.fetchone()
    if ret:
        if role == "bidder":
            cursor.execute("SELECT * FROM bidders WHERE email=?", (email,))
            return cursor.fetchone()
        if role == "seller":
            cursor.execute("SELECT * FROM sellers WHERE email=?", (email,))
            return cursor.fetchone()
        if role == "help_desk":
            cursor.execute("SELECT * FROM helpdesk WHERE email=?", (email,))
            return cursor.fetchone()
    return ret


@app.route('/<email_id>/bidder')
def bidder_page(email_id):
    connection = sql.connect('database.db')
    cursor = connection.cursor()
    cursor.execute("SELECT first_name,last_name,gender,age,major,home_address_id FROM bidders WHERE email=?",
                   (email_id,))
    details = cursor.fetchone()
    cursor.execute("SELECT street_num,street_name,zipcode FROM address WHERE address_id=?", (details[5],))
    address_details = cursor.fetchone()

    cursor.execute("SELECT credit_card_num,expire_month,expire_year FROM credit_cards WHERE owner_email=?", (email_id,))
    card_details = cursor.fetchone()
    return render_template('bidder_page.html', email=email_id, first_name=details[0], last_name=details[1],
                           gender=details[2], age=details[3], major=details[4], street_num=address_details[0],
                           street_name=address_details[1], zipcode=address_details[2], card_num=card_details[0],
                           card_month=card_details[1], card_year=card_details[2])



@app.route('/<email_id>/seller')
def seller_page(email_id):
    return render_template('seller_page.html', email_id=email_id)


@app.route('/<email_id>/helpdesk')
def help_page(email_id):
    return render_template('help_page.html', email_id=email_id)


if __name__ == "__main__":
    app.run(debug=True)
