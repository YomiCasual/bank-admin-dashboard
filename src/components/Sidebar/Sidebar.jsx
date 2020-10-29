import React from 'react'
import SideMenu from './SideMenu'


function Sidebar() {

    const sideItem = [
            {label: "Dashboard", icon: "dashboard" , classTitle: "side-menu-button active"},
            {label: "Statistics", icon: "analytics", classTitle: "side-menu-button" },
            {label: "Transfers", icon: "account_balance_wallet", classTitle: "side-menu-button" },
            {label: "Payments", icon: "payment", classTitle: "side-menu-button" },
            {label: "Settings", icon: "settings", classTitle: "side-menu-button" }
    ]

    return (
        <div className="side-menu">
            {
                sideItem.map(item => (
                    <SideMenu label={item.label} icon={item.icon} classTitle={item.classTitle} key={item.label} />
                ))
            }
        </div>
    )
}

export default Sidebar
