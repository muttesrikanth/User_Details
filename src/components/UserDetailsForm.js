import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import '../App.css';
import axios from 'axios';
// import PropsTypes from 'prop-types';
import { context } from '../App';
const UserDetailsForm = () => {
    const [editId, setEditId, formOperations, setFormOperations, url] = useContext(context);
    const initialValues ={fullname: '',email: '',region: '',gender: ''};
    const [editUserData, setEditUserData] = useState(initialValues);
    
    // form submit handellr....
    //post or put methodes....
    const handleFormSubmit = (values, { resetForm }) => {
        const requestmethod = !editId ? axios.post:axios.put;
        const requesturl = !editId ? url:url+editId;
        
        requestmethod(requesturl,values).then((res) => setFormOperations(res.statusText))
            .catch((e) => setFormOperations(e.message));
        setEditUserData(initialValues);
        setEditId('');
        resetForm();
    };
    //on edit update form values....
    useEffect(() => {axios.get(url + editId).then((resp) =>setEditUserData({
        fullname: resp.data.fullname,
        email: resp.data.email,
        region: resp.data.region,
        gender: resp.data.gender,
    })).catch((e) => setFormOperations(e.message));}, [editId]);

    //form validation logics
    const validate = (values) => {
        const errors = {};
        if (!values.fullname) {
            errors.fullname = '*Required';
        }
        if (!values.email) {
            errors.email = '*Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = '*Invalid email address';
        }
        if (!values.region) {
            errors.region = '*Select Region';
        }
        if (!values.gender) {
            errors.gender = '*Select Gender';
        }
        return errors;
    };

    //formik decleration
    const formik = useFormik({
        initialValues: editUserData,
        enableReinitialize: true,
        validate,
        onSubmit: handleFormSubmit,
    });
    
    return (
        <div className="card form-background">
            <form className="d-flex flex-column p-4 " onSubmit={formik.handleSubmit}>
                <label htmlFor="fullname">Full Name</label>
                <input
                    type="text"
                    className={formik.errors.fullname&& formik.touched.fullname ? '' : 'mb-4'}
                    placeholder="Fullname"
                    name="fullname"
                    id="fullname"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.fullname && formik.touched.fullname ? (
                    <div className="text-danger">{formik.errors.fullname}</div>
                ) : null}

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    className={formik.errors.email&&formik.touched.email ? '' : 'mb-4'}
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.email&&formik.touched.email? (
                    <div className="text-danger">{formik.errors.email}</div>
                ) : null}

                <label htmlFor="region">Region</label>
                <select
                    name="region"
                    id="region"
                    className={formik.errors.region&&formik.touched.region ? '' : 'mb-4'}
                    value={formik.values.region}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
                    <option value=''>--Select--</option>
                    <option value="India">India</option>
                    <option value="London">London</option>
                    <option value="Japan">Japan</option>
                    <option value="France">France</option>
                    <option value="U.K">U.K</option>
                    <option value="U.S">U.S</option>
                </select>
                {formik.errors.region && formik.touched.region ? (
                    <div className="text-danger">{formik.errors.region}</div>
                ) : null}

                <div className={formik.errors.gender&&formik.touched.gender ? 'btn-group' : 'btn-group mb-4'}
                    role="group"
                    aria-label="Basic radio toggle button group"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}>
                    <input
                        type="radio"
                        className="btn-check"
                        name="gender"
                        value="male"
                        id="btnradio1"
                        checked={'male' === formik.values.gender}
                        onChange={formik.handleChange}/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio1">Male</label>
                    <input
                        type="radio"
                        className="btn-check"
                        name="gender"
                        value="female"
                        id="btnradio2"
                        autoComplete="off"
                        checked={'female' === formik.values.gender}
                        onChange={formik.handleChange}/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Female</label>
                </div>
                {formik.errors.gender&&formik.touched.gender ? (
                    <div className="text-danger">{formik.errors.gender}</div>
                ) : null}

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-success">
                        {!editId ? 'Submit' : 'Update'}
                    </button>
                    <button
                        type="reset"
                        className="btn btn-danger"
                        disabled={!((formik.touched.fullname)|(formik.touched.email)|(formik.touched.gender)|(formik.touched.region))&!editId}
                        onClick={() => {setEditId('');  
                            setEditUserData(initialValues);
                            formik.handleReset();
                            setFormOperations('Reset');
                        }}>Reset</button>
                </div>
            </form>
            <h5 className="text-light text-center">.....{formOperations}.....</h5>
        </div>
    );
};
// UserDetailsForm.propsTypes={
//     editId:PropsTypes.number.isRequired, 
//     setEditId:PropsTypes.func.isRequired,
//     formOperations:PropsTypes.string.isRequired, 
//     setFormOperations:PropsTypes.func.isRequired, 
//     url:PropsTypes.string
// };

export default React.memo(UserDetailsForm);
