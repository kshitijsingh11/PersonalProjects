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
        
          <p className='transition-all  ml:text-3xl text-2xl font-bold'> Get your free <span className='from-pink-400 to-violet-500 bg-gradient-to-r bg-clip-text text-transparent' >resume template</span> below!</p>

          <div className="lg:min-w-[50%] min-w-[100%] mt-5 max-h-[3.2rem] overflow-hidden bg-background rounded-xl  mb-10">
              <iframe src="https://embeds.beehiiv.com/7b35ebfb-db7f-40ff-aa36-c5873e8164fe?slim=true"  data-test-id="beehiiv-embed" height="52" ></iframe>

              {/*<EmailForm/>*/}
              </div>
        </div>
        
       </div>

       
    
      </div>
    );
  }
  