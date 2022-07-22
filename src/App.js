import React, { useState } from "react";
import "./App.css";
import { CurrenTime } from "./components/CurrentTime/CurrentTime";
import { PanelList } from "./components/PanelList/PanelList";
import { Form } from "./components/Form/Form";

export const App = () => {
  const [listOfSeans, setListOfSeans] = useState([]);
  const [idObj, setIdObj] = useState(0);
  const [openModal, setOpenModal] = useState(true);

  const addToList = (props) => {
    setListOfSeans((prev) => [...prev, props]);
  };

  const removeFromList = (id) => {
    setListOfSeans((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  const selectedIdObj = (id) => {
    setIdObj(id);
  };

  return (
    <div className="App">
      <CurrenTime list={listOfSeans} setListOfSeans={setListOfSeans} />
      <div className="panel">
        <div className="panel-list">
          <PanelList
            list={listOfSeans}
            removeFromList={removeFromList}
            selectedIdObj={selectedIdObj}
            setOpenModal={setOpenModal}
            openModal={openModal}
            idObj={idObj}
            setListOfSeans={setListOfSeans}
          />
        </div>
        <Form addToList={addToList} className="panel-form" />
      </div>
    </div>
  );
};
