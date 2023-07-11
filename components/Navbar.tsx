import { useEffect , useState } from 'react'
import Link from 'next/link'
import { contents } from '../data/content'
import { useRouter } from 'next/router'

//Icon
import { HiMenu } from "react-icons/hi";

type Props = {}

export default function Navbar({ }: Props) {
   const router = useRouter();
   const [sticky, setSticky] = useState(false);
   const [open, setOpen] = useState(false);
   useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("contents");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
   return (
      <nav className={`fixed w-full left-0 top-0 z-[999] py-4 mb-4 ${sticky ? "bg-blue2/80  text-white shadow-sm" : ""}`}>
         <div className='container flex justify-between items-center'>
            <Link href="/">
               <h1 className='text-4xl font-semibold text-white'>
                  Misteradev
               </h1>
            </Link>
            <div className={` ${sticky ? "lg:bg-white/0 bg-white" : ""} text-gray-900 lg:block hidden py-2 font-medium rounded-bl-full`}>
               <div className='flex gap-5'>
                  <ul className='flex items-center gap-8 py-2'>
                     {contents.navmenu.links.map((nav, i) => (
                        <li key={i}
                        className='text-white'
                        >
                           <Link className={router.pathname == nav.path? "active" : "text-gray3"} href={nav.path}>{nav.label}</Link>
                        </li>
                     ))}
                  </ul>
                  <button className='lg:block hidden'>
                     <Link className='text-white border-[2px] px-12 py-4 rounded-full' href="/contact-us">Contact us</Link>
                  </button>
               </div>
            </div>
            <div
               onClick={() => setOpen(!open)}
               className={`z-[999]  ${
                  open ? "text-yellow-950" : "text-yellow-950"
               } text-3xl lg:hidden my-5 mx-1`}
               >
               <HiMenu className='text-white'/>
            </div>
            <div
            className={`lg:hidden text-white absolute w-52 h-screen px-2 py-2 font-medium bg-blue2/60 top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}
            >
               <ul className='flex flex-col h-full gap-5 py-2 pt-20 text-lg'>
                  {contents.navmenu.links.map((nav, i) => (
                     <li key={i}
                        onClick={() => setOpen(false)}
                        className="px-2 hover:text-cyan-600"
                     >
                        <Link href={nav.path}>{nav.label}</Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   )
}