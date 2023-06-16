import  { useEffect, useState ,useContext } from 'react';
import axios from 'axios';
import { context } from '../App';
const useGet = (url) => {
    const [editId, setEditId, formOperations, ,] =  useContext(context);
    const [status,setStatus]=useState('');
    const [output,setOutput]=useState([]);
    useEffect(()=>{
        
        axios.get(url).then((resp)=>{setOutput(resp.data);setStatus(resp.statusText);}).catch(e=>setStatus(e.message));
        
    },[url,editId,setEditId,formOperations]);
    return {output,status};
};

export default  useGet;
