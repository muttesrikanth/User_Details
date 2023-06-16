import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const TableComponent = ({tableData,formDataDeleteHandeller,formDataEditHandeller}) => {
    return (
        <>
            <table>
                <thead>
                    {tableData.length ? (
                        <tr className="text-warning bg-primary text-center">
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Region</th>
                            <th>Gender</th>
                            <th>Operations</th>
                        </tr>
                    ) : null}
                </thead>
                <tbody>
                    {tableData &&
                    tableData.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.fullname}</td>
                            <td>{value.email}</td>
                            <td>{value.region}</td>
                            <td>{value.gender}</td>
                            <td>
                                <button className="btn btn-primary btn-sm m-1"
                                    onClick={() => formDataEditHandeller(value.id)}
                                >
                            edit
                                </button>
                                <Link to={'/views/'+value.id}>
                                    <button className="btn btn-warning btn-sm m-1">view</button>
                                </Link>
                                <button
                                    className="btn btn-danger btn-sm m-1"
                                    onClick={() => formDataDeleteHandeller(value.id)}
                                >
                            delete
                                </button>
                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

TableComponent.propTypes={
    tableData:PropTypes.array,
    formDataDeleteHandeller:PropTypes.func,
    formDataEditHandeller:PropTypes.func
};

export default React.memo(TableComponent);
