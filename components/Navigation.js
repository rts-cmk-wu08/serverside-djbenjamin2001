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

py-4 flex-col gap-5 items-center absolute    ml-10   w-full top-full bg-white
md:static md:w-auto
md:flex-row
md:flex
md:bg-transparent
backdrop-blur-sm
`}>
<Link href="/">Home</Link>
<a href="">About</a>
<a href="">Shop</a>
<Link href="blog">Blog</Link>
<Link href="contact">Contact</Link>
<h1 className=" text-xl font-bold">SWANKY</h1>
</nav>
</>
      
     )
}
 
export default Navigation;