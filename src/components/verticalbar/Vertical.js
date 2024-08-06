import React from 'react'
import { MdHome } from "react-icons/md";
import { MdOutlineAssessment } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { BsPassport } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import classes from "./vertical.module.css"

const Vertical = () => {
  return (
    <div className={classes.verticaldiv}>
      <div className={classes.vupper}>
        <MdHome color="#60aceb" size={25} />
        <MdOutlineAssessment color="white" size={25} />
        <BsPassport color="white" size={25} />
        <CiWallet color="white" size={25} />
        <BsBagCheck color="white" size={25} />
      </div>
      <div>
        <AiOutlineLogout
          color="white"
          size={25}
          style={{ marginBottom: "30px" }}
        />
      </div>
    </div>
  );
}

export default Vertical