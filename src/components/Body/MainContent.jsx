import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MainBody from './MainBody'


export default function MainContent() {
    return (
        <div className="row main-content">
            <div className="col-md-2 col-sm-12 ">
                <Sidebar />
            </div>
            <div className="col-md-10 ml-auto col-sm-12 main-body">
                <MainBody />
            </div>

        </div>
    )
}
