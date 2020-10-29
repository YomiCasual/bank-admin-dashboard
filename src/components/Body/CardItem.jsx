import React from 'react'
import MaterialIcon from 'material-icons-react'

export default function CardItem({title, content, searchBar}) {
    return (
        <div className="card-inner"> 
            <div className="card-content">
            <div className="row">
                <h4 className="col-md-9">{title}</h4>
                { searchBar ? 
                <div className="input-group col-md-3 mt-2  searchBar">
                    <div>
                        <input type="text" placeholder="Search" className="form-control" />
                        <MaterialIcon icon="search" />   
                    </div>               
                    </div> :
                    null
                    }
            </div>
            
                    {content}
            </div>
        </div>
    )
}
