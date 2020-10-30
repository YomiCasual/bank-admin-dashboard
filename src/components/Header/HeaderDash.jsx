import React from 'react'
import MaterialIcon from 'material-icons-react';

export default function HeaderDash() {
    return (
        <div className="admin-top">
            <h4 className="mr-5 ml-3 mt-3" style={{ color: "#3343E0", fontWeight:"600"}}>Dashboard</h4>
           <div className="admin-profile ml-5">
               <div className="admin-img">
                   <img src="./images/t1.jpg" alt="profile"/>
                </div>
                <div className="admin-details">
                    <h4>Onisade Abiodun</h4>
                    <p>Admin</p>
                </div>           
            </div>
            <div className="icon-pack">
                    <div className="icon">
                        <MaterialIcon icon="notification_important" />
                        <p>Notification</p>
                    </div>
                    <div className="icon">
                        <MaterialIcon icon="settings" />    
                        <p>Settings</p>
                    </div>
                    <div className="icon">
                      <MaterialIcon icon="power_settings_new" />  
                        <p>Sign Out</p>
                    </div>
                </div>
        </div>
    )
}
