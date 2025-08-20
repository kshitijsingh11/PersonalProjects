import Link from "next/link"

const QuestionDrawer = ({list} : {list?: any[]}) => {
  
  return (
    <>
      <div className="p-5 font-semibold text-xl mt-10">
        <div className="flex flex-col">
          <p className="mb-5 translate-y-[-9px]">Problems List</p>
          <div className="flex flex-col text-base font-base">
          
           {list?.map((question, index) => (
           
           <Link href={`/question/${list[index]['qid'].substring(1)}`} key={index}>
           <p key={index} className="py-2 border-b-2 ">{list[index]['qid'].substring(1)}. {list[index]['qname']} </p>
           </Link>
         
        ))}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default QuestionDrawer