import React, { useState } from "react";
import "./App.css";
import { CurrenTime } from "./components/CurrentTime/CurrentTime";
import { PanelList } from "./components/PanelList/PanelList";
import { Form } from "./components/Form/Form";
import { EditModal } from "./EditModal/EditModal";

export const App = () => {
  const [listOfSeans, setListOfSeans] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [idSelectedSeans, setIdSelectedSeans] = useState(0);

  const addToList = (props) => {
    setListOfSeans((prev) => [...prev, props]);
  };

  const removeFromList = (id) => {
    setListOfSeans((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  const selectId = (id) => {
    setIdSelectedSeans(id);
  };

  const editTitle = (newName) => {
    const id = idSelectedSeans;
    setListOfSeans((prev) => [
      ...prev.map((obj) => {
        if (obj.id === id) {
          return { ...obj, title: newName };
        }
        return obj;
      }),
    ]);
  };

  const editTime = (newTime) => {
    const id = idSelectedSeans;
    setListOfSeans((prev) => [
      ...prev.map((obj) => {
        if (obj.id === id) {
          return { ...obj, time: newTime };
        }
        return obj;
      }),
    ]);
  };

  const editArea = (newArea) => {
    const id = idSelectedSeans;
    setListOfSeans((prev) => [
      ...prev.map((obj) => {
        if (obj.id === id) {
          return { ...obj, area: newArea };
        }
        return obj;
      }),
    ]);
  };

  return (
    <>
      <div className="App">
        <EditModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          idSelectedSeans={idSelectedSeans}
          editTitle={editTitle}
          editTime={editTime}
          editArea={editArea}
          listOfSeans={listOfSeans}
        />
        <CurrenTime list={listOfSeans} setListOfSeans={setListOfSeans} />
        <div className="panel">
          <div className="panel-list">
            <PanelList
              list={listOfSeans}
              removeFromList={removeFromList}
              setOpenModal={setOpenModal}
              selectId={selectId}
            />
          </div>
          <Form addToList={addToList} className="panel-form" />
        </div>
      </div>
    </>
  );
};
