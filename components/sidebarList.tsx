import React from "react"

type sidebarListProp = {
    name:string,
}

const sidebarList = ({name}:sidebarListProp) =>{
    return (
        <div className="px-5 py-3 flex justify-end hover:bg-zinc-700 text-md text-center uppercase cursor-pointer rounded-md">
            {name}
        </div>
    )
}

export default sidebarList