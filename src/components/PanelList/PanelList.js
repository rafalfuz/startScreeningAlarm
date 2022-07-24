import React from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { EditModal } from "../../EditModal/EditModal";

import "./PanelList.css";

export const PanelList = ({list, removeFromList, setOpenModal, selectId}) => {



    return(
      <ul className='filmList'>
        {list.map(seans => 
        <li className={seans.alarm ? 'itemOfFilmListAlarm' :'itemOfFilmList'} 
        key={seans.id}>
            <div className='filmTitle'>{seans.title}</div> 
            <div className='filmTime'>{seans.time}</div>
            <div className='filmArea'>sala: {seans.area}</div> 
            <div className='btnIcons'><ButtonIcon removeFromList={removeFromList} id={seans.id} setOpenModal={setOpenModal} selectId={selectId}/></div>
            </li>)}
      </ul>
    </>
  );
};
