import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
const UserDetailView = () => {
    
    let url='http://localhost:3030/users/';
    const [cardData,setCardData]=useState({fullname:'',email:'',region:'',gender:''});
    const {id}=useParams();
    const getDataFromId = ()=>{
        axios.get(url+ id).then(Resp=>setCardData({fullname:Resp.data.fullname,email:Resp.data.email,region:Resp.data.region,gender:Resp.data.gender}));
    };
    useEffect( ()=>{getDataFromId();},[id]);
    return (
        <div className='card-background' >
            <div className="card" style={{width: '18rem'}}>
                <img src='https://res.cloudinary.com/dx0fji5gh/image/upload/v1686736081/samples/people/image_fr6q0i.jpg' height='200px' className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h2 className="card-title">Name: <span className='text-danger'>{cardData.fullname}</span></h2>
                    <h5 className="card-title">Email: <span className='text-info'>{cardData.email}</span></h5>
                    <h5 className="card-title">Region: <span className='text-secondary'>{cardData.region}</span></h5>
                    <h5 className="card-title">Gender: <span className='text-warning'>{cardData.gender}</span></h5>
                    <Link to='/'><button className='btn btn-danger'>Back</button></Link>  
                </div>
            </div>
        </div>
    );
};

export default React.memo(UserDetailView);
