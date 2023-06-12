import React, { useContext } from 'react'
import { cardContext } from '../App'

const UserDetailView = ({fullname,email,region,gender}) => {
    const [setVisibleCard] =useContext(cardContext)
  return (
    <div className='card-background' >
        <div className="card" style={{width: '18rem'}}>
          <img src='./images/image.jpg' height='200px' className="card-img-top" alt="..."/>
          <div className="card-body">
              <h2 className="card-title">Name: <span className='text-danger'>{fullname}</span></h2>
              <h5 className="card-title">Email: <span className='text-info'>{email}</span></h5>
              <h5 className="card-title">Region: <span className='text-success'>{region}</span></h5>
              <h5 className="card-title">Gender: <span className='text-warning'>{gender}</span></h5>
              <button className='btn btn-danger' onClick={()=>{setVisibleCard(false)}}>Back</button>
          </div>
        </div>
    </div>
  )
}

export default UserDetailView
