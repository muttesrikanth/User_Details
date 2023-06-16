import React from 'react';
import UserDetailsComponent from '../components/UserDetailsComponent';
import UserDetailsForm from '../components/UserDetailsForm';

const UserDetailsElement = () => {
    
    return (
        <>
            <div className="d-flex flex-row justify-content-around">
                <UserDetailsForm />
                <div className="m-3 mt-0">
                    <UserDetailsComponent />
                </div>                        
            </div>
        </>
    );
};

export default React.memo(UserDetailsElement);
