import React from "react";

const navbar = () =>{
    return (
        <div className="bg-rose-500 px-4 py-3 flex justify-between shadow-md">
            {/* Logo */}
            <div className="flex justify-center">Logo</div>
            {/* Link */}
            <div className="px-4 py-1 rounded-full bg-rose-400 cursor-pointer flex justify-center shadow-sm hover:bg-rose-300">Guest</div>
        </div>
    )
}

export default navbar;