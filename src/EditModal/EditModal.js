import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./EditModal.css";

export const EditModal = ({
  openModal,
  setOpenModal,
  selectedIdObj,
  listOfSeans,
  idObj,
  setListOfSeans,
}) => {
  const handleClose = () => setOpenModal(false);
  const newTitleMovie = "Rambo";

  useEffect(() => {}, []);
  const editName = (id, newTitle) => {
    setListOfSeans((prev) => [
      ...prev.map((obj) => {
        if (obj.id === id) {
          return { ...obj, title: newTitle };
        }
        return obj;
      }),
    ]);
  };

  return (
    <div
      className={
        openModal ? "editModalWrapper" : "editModalWrapper closedModal"
      }
    >
      <header className="editModalHeader">
        <h2 className="editModalHeader--title">Edit</h2>
        <div className="editModalHeader--btn" onClick={handleClose}>
          <AiOutlineCloseCircle />
        </div>
      </header>
      <div className="editModalContainer">
        <div className="form">
          <p>{idObj}</p>
          <button onClick={() => editName(idObj, "Nowy tytul")}>Button</button>
        </div>
      </div>
    </div>
  );
};
