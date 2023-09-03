import React from 'react'
import Data from '../Data/Data'

const StatusBar = ({data}) => {
    const {statusBarTitle1,statusBarTitle2,statusBarTitle3,statusBarTitle4,statusBarTitle5,statusBarTitle6,} = data
  return (
    <section className="statusBar">
        <div className="statusMain">
            <div className="status1">
                <h1>{statusBarTitle1}</h1>
                <p>{statusBarTitle2}</p>
            </div>
            <div className="status2">
                <h1>{statusBarTitle3}</h1>
                <p>{statusBarTitle4}</p>
            </div>
            <div className="status3">
                <h1>{statusBarTitle5}</h1>
                <p>{statusBarTitle6}</p>
            </div>
        </div>
    </section>

  )
}

export default StatusBar