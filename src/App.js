import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import UserDetailsElement from './elements/UserDetailsElement';
import UserCard from './elements/UserCardElement';
export const context = createContext();

const App = () => {
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
            <Routes>
                <Route path='/' element={
                    <context.Provider value={[editId, setEditId, formOperations, setFormOperations,url]}>
                        <UserDetailsElement />
                    </context.Provider>
                } />
                <Route path='/views/:id' element={<UserCard />}/>  
            </Routes>    
        </div>
    );
};

export default App;
