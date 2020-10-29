import React from 'react'

export default function AccountHeader() {
    return (
        <div className="account-holders-header">
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <h6>Name</h6>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <h6>Email</h6>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <h6>Date Created</h6>
                    </div>
                    <div className="col-md-2 col-sm-2">
                        <h6>Act. Type</h6>
                    </div>
                    <div className="col-md-1 col-sm-1">
                        <h6>Action</h6>
                    </div>
                </div>
            </div>
    )
}
