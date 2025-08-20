"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Sidebar = () => {
    const pathname = usePathname()
  return (
    <div className="sidebar flex-1 flex flex-col gap-2 pt-5 w-full max-w-[20rem]">
        <Link href="/test-page/select">
        <h1 className={"  tracking-wide " + (pathname === "/test-page/select" ? " text-white font-semibold" : "text-stone-400")}>
            SELECT</h1>
        </Link>
        {pathname === "/test-page/select" && (
            <div className="pl-10">
                <ul className="font-medium list-inside flex flex-col gap-2">
                    <li>LIMIT</li>
                    <li>WHERE</li>
                    <li>ORDER BY</li>
                </ul>
            </div>
        )}
        <div className="w-full h-[1px] border"></div>
        <Link href="/test-page/aggregate">
        <h1 className={"  tracking-wide " + (pathname === "/test-page/aggregate" ? " text-white font-semibold" : "text-stone-400")}>AGGREGATE</h1>
        </Link>
        {pathname === "/test-page/aggregate" && (
            <div className="pl-10">
            <ul className="font-medium list-inside flex flex-col gap-2">
                <li>COUNT</li>
                <li>SUM</li>
                <li>MIN/MAX</li>
                <li>AVG</li>
                <li>GROUP BY</li>
                <li>DISTINCT</li>
            </ul>
        </div>
        )}
        <div className="w-full h-[1px] border"></div>
        <Link href="/test-page/aggregate">
        <h1 className=" font-semibold tracking-wide ">JOINS</h1>
        </Link>
        {pathname === "/test-page/aggregate" && (
            <div className="pl-10">
            <ul className="font-medium list-inside flex flex-col gap-2">
                <li>INNER JOIN</li>
                <li>OUTER JOIN</li>
                <li>LEFT JOIN</li>
                <li>RIGHT JOIN</li>
            </ul>
        </div>
        )}
        <div className="w-full h-[1px] border"></div>
        <Link href="/test-page/aggregate">
        <h1 className=" font-semibold tracking-wide ">AGGREGATE</h1>
        </Link>
        {pathname === "/test-page/aggregate" && (
            <div className="pl-10">
            <ul className="font-medium list-inside flex flex-col gap-2">
                <li>LIMIT</li>
                <li>WHERE</li>
                <li>ORDER BY</li>
            </ul>
        </div>
        )}
        <div className="w-full h-[1px] border"></div>
    </div>
  )
}

export default Sidebar