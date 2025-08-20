import { IconBrandSupabase } from '@tabler/icons-react';

export default function Home() {



    return (
      <div className="min-h-[84.7dvh] h-full py-10 md:px-10 px-5 flex flex-col items-center justify-center  w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
       <div className=" max-w-[65rem] w-full transition-all mx-auto h-full min-h-[50dvh]  mx-auto px-5 rounded-2xl sm:text-lg drop-shadow-[0px_10px_40px_rgba(0,0,0,1)] border-opacity-[20%] flex flex-col mx-5 bg-neutral-950 pb-10 pt-10 h-full max-w-[83rem] w-full min-w-[20rem] items-center">
        <div className="transition-all  flex flex-row items-center m-auto gap-3 text-neutral-300">
        <IconBrandSupabase stroke={2} className='transition-all  mL:size-16 size-12 min-w-12  min-h-12' /> <p className='transition-all  ml:text-5xl text-4xl font-bold'> Welcome to the <span className='from-pink-400 to-violet-500 bg-gradient-to-r bg-clip-text text-transparent' >AND</span> community!</p>
        </div>

        <div className="py-10 mt-6 max-w-[50rem] w-full flex flex-col items-center text-neutral-300">

          <p className='pb-4 '>
            Welcome aboard Analyst Next Door, your hub for all things data! I'm delighted to have you
            join our community, The <span className='text-neutral-200 font-bold'>AND Club</span>, where data enthusiasts like you gather to connect, learn, and thrive.
          </p>
        
          <p className='self-start'>
          Please check your inbox for a welcome email from <span className='text-neutral-200 font-bold'>newsletter@mail.analystnextdoor.com</span>
          </p>
          <p className='self-start mt-8'>


          <a href="https://discord.gg/bhxUfVpeQH" target='blank' className="inline-flex items-center gap-1 justify-center transition-all p-5 mt-8 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className='pr-2' width="40" height="20" viewBox="0 0 122 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.8732 0.566467C35.8061 0.566467 23.5443 5.53972 21.3451 6.5339C19.1458 7.52808 16.7034 10.6311 13.9317 15.7527C11.1601 20.8742 8.93262 26.8591 5.31742 35.6654C1.70222 44.4717 0.85914 61.4525 0.979645 66.6343C1.10015 71.8161 1.6938 75.8607 7.003 78.926C12.3122 81.9913 17.0061 85.1941 21.9469 87.1222C26.8877 89.0504 30.2607 90.435 32.5503 88.5069C34.84 86.5788 36.3476 83.2052 36.3476 83.2052C36.3476 83.2052 38.5169 80.1931 34.4197 78.3855C30.3224 76.5779 28.2741 75.3111 28.4549 73.4432C28.6356 71.5754 28.9351 70.5527 29.9594 70.7937C30.9837 71.0347 33.3955 75.3719 42.6745 77.3603C51.9535 79.3486 61.0002 79.0485 61.0002 79.0485C61.0002 79.0485 70.0469 79.3486 79.3259 77.3603C88.6049 75.3719 91.0167 71.0347 92.041 70.7937C93.0653 70.5527 93.3647 71.5754 93.5455 73.4432C93.7262 75.3111 91.6779 76.5779 87.5807 78.3855C83.4835 80.1931 85.6528 83.2052 85.6528 83.2052C85.6528 83.2052 87.1604 86.5788 89.45 88.5069C91.7396 90.435 95.1127 89.0504 100.053 87.1222C104.994 85.1941 109.688 81.9913 114.997 78.926C120.307 75.8607 120.9 71.8161 121.021 66.6343C121.141 61.4525 120.298 44.4717 116.683 35.6654C113.068 26.8591 110.84 20.8742 108.069 15.7527C105.297 10.6311 102.855 7.52808 100.655 6.5339C98.456 5.53972 86.1943 0.566467 82.1272 0.566467C78.0601 0.566467 76.8574 3.39973 76.8574 3.39973L75.4408 6.5339C75.4408 6.5339 65.914 4.724 61.0627 4.7214C56.2114 4.71881 46.5596 6.5339 46.5596 6.5339L45.1429 3.39973C45.1429 3.39973 43.9403 0.566467 39.8732 0.566467ZM40.3152 38.1658C40.3649 38.1655 40.4146 38.1655 40.4643 38.1658C46.394 38.1658 51.2009 43.3543 51.2009 49.7545C51.2009 56.1548 46.394 61.3432 40.4643 61.3432C34.5346 61.3432 29.7277 56.1548 29.7277 49.7545C29.7271 43.4166 34.4439 38.2539 40.3152 38.1658ZM81.536 38.1658C81.5857 38.1655 81.6354 38.1655 81.6851 38.1658C87.5565 38.2539 92.2732 43.4166 92.2726 49.7545C92.2726 56.1548 87.4657 61.3432 81.536 61.3432C75.6064 61.3432 70.7994 56.1548 70.7994 49.7545C70.7994 43.3543 75.6064 38.1658 81.536 38.1658Z" fill="#D4D4D4"/>
            </svg>

            <span className="w-full" >Join our Discord</span>
            <svg className="size-4  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a> 
          </p>
          <p className='self-start pt-2 italic text-neutral-400 text-base ml-1'>Join in and introduce yourself!</p>
          <p className='self-start pt-10 text-neutral-300'>Note: Incase the discord invite link is not working. Reply to <span className='italic'> newsletter@mail.analystnextdoor.com </span>and I will send you a fresh one!</p>
        </div>
        
       </div>

       
    
      </div>
    );
  }
  