import React from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { EditModal } from "../../EditModal/EditModal";

import "./PanelList.css";

export const PanelList = ({
  list,
  removeFromList,
  setOpenModal,
  selectedIdObj,
  openModal,
  idObj,
  setListOfSeans,
}) => {
  return (
    <>
      <EditModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedIdObj={selectedIdObj}
        idObj={idObj}
        setListOfSeans={setListOfSeans}
      />
      <ul className="filmList">
        {list.map((seans) => (
          <li
            className={seans.alarm ? "itemOfFilmListAlarm" : "itemOfFilmList"}
            key={seans.id}
          >
            <div className="filmTitle">{seans.title}</div>
            <div className="filmTime">{seans.time}</div>
            <div className="filmArea">sala: {seans.area}</div>
            <div className="filmArea">ID: {seans.id}</div>
            <div className="btnIcons">
              <ButtonIcon
                removeFromList={removeFromList}
                id={seans.id}
                setOpenModal={setOpenModal}
                selectedIdObj={selectedIdObj}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
