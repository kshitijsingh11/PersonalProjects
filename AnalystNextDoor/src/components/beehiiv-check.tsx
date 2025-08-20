"use client"
import axios from 'axios';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import { EmailAddress } from '@clerk/nextjs/server';
const BeehiivCheck = () => {
   
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
        <div className='border-2  flex flex-col items-center text-center gap-2 p-5 rounded-xl
        [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_6px_12px_rgba(0,0,0,.05)]
        dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'>
         <p className=''>Make sure you are subscribed to the <span className='font-bold'>and
         <span className='text-orange-500'>_ </span></span>
          newsletter to get weekly hot jobs, compensation insights and referral opportunities.</p>
            <div className='flex flex-1 sm:flex-row flex-col sm:gap-2 gap-3 items-center'>

                <Input type="email" name='email' onChange={handleEmailChange} value={userEmail} placeholder="Enter your email" className='transition-all border sm:text-base text-sm border-neutral-500  ml:w-[25rem]' />
                <Button type="submit" onClick={handlesubmit} disabled={textDone === "Thank you!"} className='h-10 sm:w-fit w-full '>{textDone}</Button>
                 
            
            
            </div>
        
        </div>
  )
}


export default BeehiivCheck