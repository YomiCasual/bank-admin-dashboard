import React from 'react'

export default function AccountOwners({account: {name, email, dateCreated, actType}}) {
    return (
        <div className="account-holders-owner">
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <h6>{name}</h6>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <h6>{email}</h6>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <h6>{dateCreated}</h6>
                    </div>
                    <div className="col-md-2 col-sm-2">
                        <h6>{actType}</h6>
                    </div>
                    <div className="col-md-1 col-sm-1">
                       <button className="btn btn-success">View</button>
                    </div>
                </div>
            </div>
    )
}
