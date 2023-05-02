"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const Navigation = ({showDropdown, setShowDropdown}) => {
/* const [showDropdown, setShowDropdown] = useState(false);*/
 const router = useRouter();
 const handleMenu = () => setShowDropdown(!showDropdown)



 useEffect(() => {
   setShowDropdown(false) 
 }, [router]);

 
    return ( 
     <>
     <p onClick={handleMenu} className="md:hidden cursor-pointer py-4">Menu</p>
<nav className={`
${showDropdown ? "flex" : "hidden"}

py-4 flex-col gap-5 items-center absolute left-0     w-full top-full  bg-slate-400/75 
md:static md:w-auto
md:flex-row
md:flex
md:bg-transparent
backdrop-blur-sm
`}>
<Link href="/">Home</Link>
<a href="">Menu</a>
<Link href="About">About us</Link>
<Link href="Contact">Contact</Link>
</nav>
</>
      
     )
}
 
export default Navigation;