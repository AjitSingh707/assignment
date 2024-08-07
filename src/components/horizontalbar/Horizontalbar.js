import React from 'react'
import classes from "./horizontal.module.css"
import { PiSquaresFourBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import dp from "../../assets/dp.png";


const Horizontalbar = () => {
  return (
    <div className={classes.horizndiv}>
      <div className={classes.hmainbar}>
        <PiSquaresFourBold size={30} color="#60aceb" />

        <CiSearch className={classes.sicon} color="white" />
        <input type="text" className={classes.searchbox} placeholder="search" />
      </div>
      <div className={classes.hrighticon}>
        <FaRegEnvelope color="white" className={classes.bcircle} />
        <IoSettingsOutline
          color="white"
          size={18}
          className={classes.bcircle}
        />
        <IoIosNotificationsOutline
          color="white"
          size={20}
          className={classes.bcircle}
        />
        <img src={dp} alt="pic" className={classes.profilepic} />
        
      </div>
    </div>
  );
}

export default Horizontalbar