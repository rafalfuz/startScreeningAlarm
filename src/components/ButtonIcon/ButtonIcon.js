import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./ButtonIcon.css";

export const ButtonIcon = ({
  removeFromList,
  id,
  setOpenModal,
  selectedIdObj,
}) => {
  const handleEditModal = (id) => {
    setOpenModal(true);
    selectedIdObj(id);
  };

  return (
    <>
      <FaEdit className="btnIcon" onClick={() => handleEditModal(id)} />
      <FaTrash className="btnIcon" onClick={() => removeFromList(id)} />
    </>
  );
};
