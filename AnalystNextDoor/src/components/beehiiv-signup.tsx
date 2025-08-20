
import axios from 'axios';
import { auth, currentUser } from "@clerk/nextjs/server";
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { Input } from './ui/input';


const BeehiivSignup = () => {
    const [userEmail, setUserEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [textDone, setTextDone] = useState("Subscribe");
    {/** 
    const CheckApiCall = async () => {
        try {
            const  {data: response}  = await axios.post('/api/beehivvCheck', {email : userEmail})
            
            console.log("success in client",response.data);
            setIsSubbed(true);
        } catch (error) {
            console.error("error in client",error);
            setIsSubbed(false);
        }
    }
    */}

    const SignUpApiCall = async () => {
        
        try {
            const  {data: response}  = await axios.post('/api/beehiivSignUp',{email : userEmail})
            
        } catch (error) {
            console.error("error in client",error);
        } 
    };

    const handlesubmit = (event: any) => {
        event.preventDefault();

        let regEmail =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regEmail.test(userEmail)) {
            alert("Invalid email")
        }
        else{
             SignUpApiCall();
             setTextDone("Thank you!");
             setUserEmail("");
        }
     
       
    }
     const ValidEmail = () => {
        let regEmail =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        /*@ts-ignore*/
        if (!regEmail.test(userEmail)) {
          setIsValidEmail(false);
        }
        setIsValidEmail(true);
      }


      const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
      };
      
  return (
        <div>
            <div className='flex flex-1 sm:flex-row flex-col sm:gap-2 gap-3 items-center '>
            <Input type="email" onChange={handleEmailChange} value={userEmail} placeholder="Enter your email" className='transition-all z-30 border-2 border-neutral-500 sm:text-base text-sm ml:w-[25rem]' />
            <Button type="submit" onClick={handlesubmit} disabled={textDone === "Thank you!"} className='h-10 sm:w-fit w-full z-30 bg-orange-500 text-bold dark:hover:text-black hover:text-white '>{textDone}</Button>
            </div>
        
        </div>
  )
}

export default BeehiivSignup