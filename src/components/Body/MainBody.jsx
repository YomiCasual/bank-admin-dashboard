import React from 'react'
import CardItem from './CardItem'
import LatestAccountTable from './Content/LatestAccountTable'
import TotalUser from './Content/TotalUsers'
import TransactionChart from './Content/TransactionChart'

export default function MainBody() {
    return (
        <div className="main-body-inner">
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <CardItem title="Total Users" content={<TotalUser />}/>
                </div>
                <div className="col-md-7 col-sm-12">
                    <CardItem title="Transaction Summary" content={<TransactionChart />}/>
                </div>
            </div>  
            <div>
                    <CardItem title="Latest Account Holders" content={<LatestAccountTable />}  searchBar={true} />
            </div>         
        </div>
    )
}
