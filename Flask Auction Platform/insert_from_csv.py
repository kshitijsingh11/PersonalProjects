import sqlite3 as sql
import hashlib
import pandas as pd

connection = sql.connect('database.db')
cursor = connection.cursor()
'''
# Setting up the users table
connection.execute(
    'CREATE TABLE IF NOT EXISTS users(email TEXT PRIMARY KEY, password TEXT);')

# cursor = connection.cursor()
with open('./LionAuctionDataset-v5/Users.csv', 'r') as file:
    i = 0
    for row in file:
        # first row of csv is email,password which we don't want
        if i == 0:
            i += 1
            continue
        result = row.split(",")
        # removing the \n from the end of the password entry
        result[1] = result[1][:-1]
        # Hashing using SHA256
        temp = hashlib.sha256(result[1].encode())
        # Converting it to a hexadecimal value to store
        result[1] = temp.hexdigest()
        cursor.execute("INSERT INTO users VALUES (?,?)", (result[0], result[1]))
        connection.commit()

'''

# Setting up the Helpdesk table
def making_tables():
    # Zipcode Table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS zipcodeInfo(zipcode INTEGER PRIMARY KEY, city TEXT, state TEXT);')
    # address table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS address(address_id TEXT PRIMARY KEY, zipcode INTEGER, street_num INTEGER, '
        'street_name TEXT, FOREIGN KEY (zipcode) references zipcodeInfo(zipcode));')
    # helpdesk table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS helpdesk(email TEXT PRIMARY KEY, position TEXT, FOREIGN KEY (email) references'
        ' users(email));')
    # requests table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS requests(request_id INTEGER PRIMARY KEY, sender_email TEXT, helpdesk_staff_email '
        'TEXT,request_type TEXT, request_desc TEXT, request_status INTEGER, FOREIGN KEY (helpdesk_staff_email) '
        'references helpdesk(email));')
    # bidders table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS bidders(email TEXT PRIMARY KEY, first_name TEXT, last_name TEXT, gender '
        'TEXT,age INTEGER, home_address_id TEXT, major TEXT, FOREIGN KEY (home_address_id) '
        'references address(address_id), FOREIGN KEY (email) references users(email));')
    # credit cards table
    connection.execute('CREATE TABLE IF NOT EXISTS credit_cards(credit_card_num TEXT PRIMARY KEY, card_type TEXT, '
                       'expire_month INTEGER, expire_year INTEGER, security_code INTEGER, owner_email TEXT, '
                       'FOREIGN KEY (owner_email) references bidders(email));')
    # sellers table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS sellers(email TEXT PRIMARY KEY, bank_routing_number TEXT, bank_account_number'
        ' INTEGER, balance REAL, FOREIGN KEY (email) references bidders(email));')
    # Local Vendors Table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS local_vendors(email TEXT PRIMARY KEY, business_Name TEXT, business_address_id TEXT,'
        ' customer_service_phone_number TEXT, FOREIGN KEY (email) references sellers(email));')
    # Categories Table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS categories(category_name TEXT PRIMARY KEY, parent_category TEXT, FOREIGN KEY ('
        'parent_category) references categories(category_name));')
    # Auction Listings Table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS auctions(seller_email TEXT, listing_id INTEGER, category TEXT, auction_title '
        'TEXT, product_name TEXT, product_description TEXT, quantity INTEGER, reserve_price REAL, max_bids TEXT, '
        'status INTEGER, PRIMARY KEY (seller_email,listing_id), FOREIGN KEY (seller_email) references sellers(email));')
    # Bids Table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS bids(bid_id INTEGER PRIMARY KEY, seller_email TEXT, listing_id INTEGER, '
        'bidder_email TEXT, bid_price REAL, FOREIGN KEY (seller_email) references sellers(email), FOREIGN KEY ('
        'bidder_email) references bidders(email));')
    # Transactions Table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS transactions(transaction_id INTEGER PRIMARY KEY, seller_email TEXT, listing_id '
        'INTEGER, bidder_email TEXT, date TEXT, payment REAL, FOREIGN KEY (seller_email) references sellers(email), '
        'FOREIGN KEY (bidder_email) references bidders(email) );')
    # Ratings Table
    connection.execute(
        'CREATE TABLE IF NOT EXISTS ratings(bidder_email TEXT, seller_email TEXT, date TEXT, rating REAL, rating_desc '
        'TEXT, PRIMARY KEY (bidder_email,seller_email,date), FOREIGN KEY (seller_email) references sellers(email), '
        'FOREIGN KEY (bidder_email) references bidders(email));')


def insert_data(table_name, path):
    df = pd.read_csv(path)

    df.columns = df.columns.str.strip()

    df.to_sql(table_name, connection, if_exists='append', index=False)


#making_tables()
insert_data('helpdesk', './LionAuctionDataset-v5/Helpdesk.csv')
'''
# insert_data('requests', './LionAuctionDataset-v5/Requests.csv')
insert_data('zipcode', './LionAuctionDataset-v5/Zipcode_Info.csv')
insert_data('address', './LionAuctionDataset-v5/Address.csv')
insert_data('bidders', './LionAuctionDataset-v5/Bidders.csv')
insert_data('credit_cards', './LionAuctionDataset-v5/Credit_Cards.csv')
insert_data('sellers', './LionAuctionDataset-v5/Sellers.csv')
insert_data('local_vendors', './LionAuctionDataset-v5/Local_Vendors.csv')
insert_data('categories', './LionAuctionDataset-v5/Categories.csv')
insert_data('auctions', './LionAuctionDataset-v5/Auction_Listings.csv')
insert_data('bids', './LionAuctionDataset-v5/Bids.csv')
insert_data('transactions', './LionAuctionDataset-v5/Transactions.csv')
insert_data('ratings', './LionAuctionDataset-v5/Ratings.csv')
'''

connection.close()
