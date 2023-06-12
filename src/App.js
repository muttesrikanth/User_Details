import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserDetailsComponent from "./components/UserDetailsComponent";
import UserDetailsForm from "./components/UserDetailsForm";
import UserDetailView from "./components/UserDetailView";

export const context = createContext();
export const cardContext = createContext();
const App = () => {
  const [editId, setEditId] = useState("");
  const [cardData, setCardData] = useState({});
  const [formOperations, setFormOperations] = useState("");
  const [visibleCard, setVisibleCard] = useState(false);
  const viewCardData = (value) => {
    setCardData(value);
    setVisibleCard(true);
  };
  useEffect(() => {setTimeout(() => {setFormOperations("");}, 1000);},[formOperations]);

  return (
    <>
      <Navbar />
      <context.Provider value={[editId, setEditId, formOperations, setFormOperations]}>
        <div className="d-flex flex-row justify-content-around">
          <UserDetailsForm />
          <cardContext.Provider value={[setVisibleCard]}>
            {visibleCard && <UserDetailView {...cardData} />}
          </cardContext.Provider>
          <div className="m-3 mt-0">
            <UserDetailsComponent viewCardData={viewCardData} />
          </div>
        </div>
      </context.Provider>
    </>
  );
};

export default App;
