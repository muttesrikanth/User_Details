import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { context } from "../App";
import "../App.css";
const UserDetailsComponent = ({ viewCardData }) => {
  const [editId, setEditId, formOperations, setFormOperations] =
    useContext(context);
  // const [tableHeadding, setTableHeadding] = useState([]);
  const [tableData, setTableData] = useState([]);
  const fetchData = useCallback(() => {
    axios.get("http://localhost:3030/users").then((response) => {
      // setTableHeadding(Object.keys(response.data[0]));
      setTableData(response.data);
    });
  },[]);
  const formDataEditHandeller = (id) => {
    setEditId(id);
  };
  const formDataDeleteHandeller = (id) => {
    axios
      .delete(`http://localhost:3030/users/` + id)
      .then((resp) => setFormOperations(resp.statusText))
      .catch((e) => setFormOperations(e.message));
  };
  const dataViewHandeller = (data) => {
    viewCardData(data);
  };

  useEffect(() => fetchData, [editId, fetchData, formOperations]);

  return (
    <>
      <table>
        <thead>
          {/* <tr className="text-warning bg-primary"> */}
          {/* {tableData &&
              tableHeadding.map((value, index) => <th key={index}>{value}</th>)}
            {tableData.length ? <th>operations</th>:null} */}
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

          {/* </tr> */}
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
                  <button
                    className="btn btn-primary btn-sm m-1"
                    onClick={() => formDataEditHandeller(value.id)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-warning btn-sm m-1"
                    onClick={() => dataViewHandeller(value)}
                  >
                    view
                  </button>
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

export default UserDetailsComponent;
