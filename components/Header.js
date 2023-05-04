"use client"
import Navigation from "./Navigation";
import useShowDropdown from "@/hooks/useDropdown";
const Header = () => {
    const {ref,showDropdown, setShowDropdown} = useShowDropdown()
    return ( 
        <header className="bg-white" ref={ref}>
    <Navigation showDropdown={showDropdown} setShowDropdown={setShowDropdown}></Navigation>
        </header>
     );
}
 
export default Header;