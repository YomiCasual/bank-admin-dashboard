import React from 'react'
import AccountHeader from './AccountHeader'
import AccountOwners from './AccountOwners'

export default function LatestAccountTable() {

    const AccountOwnersData = [
        {
            name: "Rahman Shabah", email: "rahmansa@gmail.com", dateCreated: "10th October, 2020",  actType: "Savings"
        },
        {
            name: "Bola Tinubu", email: "boal189@gmail.com", dateCreated: "29th September, 2020",  actType: "Savings"
        },
        {
            name: "Taiwo Ogunfeyi", email: "taiwoog@gmail.com", dateCreated: "19th September, 2020",  actType: "Current"
        },
        {
            name: "Ahmed Fagbayi", email: "ahmedFagbayi.com", dateCreated: "17th September, 2020",  actType: "Savings"
        },
        {
            name: "Rahman Shabah", email: "rahmaa@gmail.com", dateCreated: "17th September, 2020",  actType: "Current"
        },
    ]

    return (
        <div>
          <AccountHeader />
          {AccountOwnersData.map(account => (
              <AccountOwners account={account} key={account.email} />
          ))}
        </div>
    )
}
