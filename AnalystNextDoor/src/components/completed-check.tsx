import { getPOTWCheck } from "@/utils/user_db";
import { auth, currentUser } from "@clerk/nextjs/server";
const CompletedCheck = async() => {
    const { userId } = auth();
    const userid = userId as string;
    const checkResult = await getPOTWCheck(userid);
       
    
    const data = checkResult
    if (data.length === 0) {
      return <div>No completed check</div>
    }
    
  return (
    <div>Completed Check</div>
  )
}

export default CompletedCheck