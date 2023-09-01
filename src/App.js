import React, { createContext, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import UserDetailsElement from './elements/UserDetailsElement';
import UserCard from './elements/UserCardElement';
import WhitePage from './elements/WhitePage';
import ImageElement from './elements/ImageElement';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
export const context = createContext();

const App = () => {
    const breadcrumbs = useBreadcrumbs();
    const url='http://localhost:3030/users/';
    const [editId, setEditId] = useState('');
    const [formOperations, setFormOperations] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setFormOperations('');
        }, 1000);
    }, [formOperations]);
    return (
        <div className="background">
            <Navbar />
            {breadcrumbs.map((value,index)=>{return(<Link className='p-1' key={index} to={value.key}>{value.breadcrumb}<span>{' >'}</span></Link>);})}
            <Routes>
                <Route path='/' element={
                    <context.Provider value={[editId, setEditId, formOperations, setFormOperations,url]}>
                        <UserDetailsElement />
                    </context.Provider>
                } />
                <Route path='/:id' element={<UserCard />}/>  
                <Route path='/Inventory' element={<WhitePage pagetitle='Inventory' />} />
                <Route path='/Customers'  element={<WhitePage pagetitle='Customers'/>} />
                <Route path='/Products' element={<WhitePage pagetitle='Products' />}  />
                <Route path='/:id/image' element={<ImageElement/>} />
            </Routes>    
        </div>
    );
};

export default App;
