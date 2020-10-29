import React from 'react'
import MaterialIcon from 'material-icons-react';

function SideMenu({label, icon, classTitle }) {
    return (
        <div className={classTitle}>
            <MaterialIcon icon={icon}/>
            <h5>{label}</h5>
        </div>
    )
}

export default SideMenu
