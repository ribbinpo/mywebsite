import React from "react"
import SidebarList from "./sidebarList"

const sidebar = ()=>{
    return (
        <div className="space-y-3">
            <SidebarList name="home" />
            <SidebarList name="activity" />
            <SidebarList name="achieve" />
            <SidebarList name="project" />
        </div>
    )
}
export default sidebar;