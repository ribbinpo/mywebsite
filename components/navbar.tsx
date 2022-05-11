import React,{useState} from "react";

const navbar = () =>{
    const [showNavbar,setShowNavbar] = useState(false)
    return (
        <>
        <div className="bg-rose-500 px-4 py-3 flex justify-between shadow-md">
            {/* Logo */}
            <div className="flex justify-center">Logo</div>
            <div className="md:flex hidden justify-center space-x-10">
                {/* menu */}
                <div className="uppercase text-white cursor-pointer transition ease-in-out hover:scale-125 duration-500">home</div>
                <div className="uppercase text-white cursor-pointer transition ease-in-out hover:scale-125 duration-500">activity</div>
                <div className="uppercase text-white cursor-pointer transition ease-in-out hover:scale-125 duration-500">achieve</div>
                <div className="uppercase text-white cursor-pointer transition ease-in-out hover:scale-125 duration-500">project</div>
            </div>
            {/* Link */}
            <div className="md:flex hidden px-4 py-1 rounded-full bg-rose-400 cursor-pointer justify-center shadow-sm hover:bg-rose-300">Guest</div>
            <div className="md:hidden flex" onClick={()=>{setShowNavbar(!showNavbar)}}>
                Button
            </div>
        </div>
        <ul className={`md:hidden flex-col w-full`+(showNavbar ? " flex":" hidden")}>
            <li className="hover:bg-white">baba</li>
            <li>baba2</li>
        </ul>
        </>
    )
}

export default navbar;