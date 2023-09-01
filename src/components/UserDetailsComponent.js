import React, { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { context } from '../App';
import TableComponent from './TableComponent';
// const TableComp=React.lazy(()=>import('./TableComponent'));
// import PropsTypes from 'prop-types';
import '../App.css';

const UserDetailsComponent = () => {
    const [editId, setEditId, formOperations, setFormOperations,url] = useContext(context);
    const [tableData, setTableData] = useState([]);
    
    const fetchData = useCallback(() => {
        axios.get(url).then((response) => {
            setTableData(response.data);
        }).catch((e)=>setFormOperations(e.message));
    }, []);
    
    useEffect(() => fetchData, [editId, fetchData, formOperations]);
    
    const formDataEditHandeller = (id) => {
        setEditId(id);
    };
    
    
    const formDataDeleteHandeller = useCallback((id) => {
        axios
            .delete(url + id)
            .then((resp) => setFormOperations(resp.statusText))
            .catch((e) => setFormOperations(e.message));
        console.log('formdatadeletehandel');
    },[]);

    return (
        <>
            {tableData&& <TableComponent 
                tableData={tableData} 
                formDataDeleteHandeller={formDataDeleteHandeller} 
                formDataEditHandeller={formDataEditHandeller}/>}
          
            
        </>
    );
};

// UserDetailsComponent.propsTypes={
//     editId:PropsTypes.number.isRequired,
//     setEditId:PropsTypes.func.isRequired,
//     formOperations:PropsTypes.string.isRequired, 
//     setFormOperations:PropsTypes.func.isRequired, 
//     url:PropsTypes.string.isRequired,
//}

export default React.memo(UserDetailsComponent);
