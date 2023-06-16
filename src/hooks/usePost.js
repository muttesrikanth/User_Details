import { useEffect, useState } from 'react';
import axios from 'axios';

const usePost = (url,body) => {
    const [postStatus,setPostStatus]=useState('');
    const [postError,setPostError]=useState('');
    useEffect(()=>{
        axios.post(url,body).then(resp=>setPostStatus(resp.statusText)).catch(error=>setPostError(error.message));
    },[url,body]);
    
    
    return {postStatus,postError};
};

export default usePost;
