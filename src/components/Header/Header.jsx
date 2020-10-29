import React from 'react'
import HeaderDash from './HeaderDash'


export default function Header() {
    return (
        <div className="row header">
            <div className="col-md-2 col-sm-12 brand-logo pt-3">
                <div className="text-center mx-auto mt-4" style={{color: "#3343E0"}}>
                <h5>EasyMoney</h5>
                </div>
                
            </div>
            <div className="col-md-10 ml-auto col-sm-12 header-dash">
            <HeaderDash />
            </div>

        </div>
    )
}
