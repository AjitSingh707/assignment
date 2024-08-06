import React from 'react'
import classes from "./pro.module.css"
import { MdOutlineArrowDropUp } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { PiHamburger } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import Comments from '../comments/Comments';

const Profitmenu = () => {
  return (
    <div className={classes.prodiv}>
      <div className={classes.profitcard}>
        <div className={classes.proinfo}>
          <p style={{ fontSize: "10px" }}>Net Profit</p>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>$1234.56</p>
          <p style={{ display: "flex", alignItems: "center", color: "green" }}>
            <MdOutlineArrowDropUp size={20} /> 3%
          </p>
        </div>
        <div>
          <div className={classes.procle}>
            <span style={{ color: "white", fontWeight: "bold",fontSize:"12px" }}>70%</span>
            <p>Goal</p>
            <p>Completed</p>
          </div>
          <p style={{ fontSize: "5px", textAlign: "center" }}>
            *the values rounded off
          </p>
        </div>
      </div>
      <div className={classes.menucard}>
        <div className={classes.mlist}>
          <div className={classes.ictext}>
            <AiOutlineAim
              color="red"
              className={classes.icnstl}
              style={{ backgroundColor: "rgba(255, 0, 0, 0.267)" }}
            />
            <p>Goal</p>
          </div>
          <IoIosArrowForward color="white" size={20} className={classes.ficn} />
        </div>
        <div className={classes.mlist}>
          <div className={classes.ictext}>
            <PiHamburger
              color="#26d1b5"
              className={classes.icnstl}
              style={{ backgroundColor: "rgba(0, 0, 255, 0.295)" }}
            />
            <p>Popular Dishes</p>
          </div>
          <IoIosArrowForward color="white" size={20} className={classes.ficn} />
        </div>
        <div className={classes.mlist}>
          <div className={classes.ictext}>
            <BiDish
              color="#2667d1"
              className={classes.icnstl}
              style={{ backgroundColor: "hsla(187, 69%, 48%, 0.267)" }}
            />
            <p>Menus</p>
          </div>
          <IoIosArrowForward color="white" size={20} className={classes.ficn} />
        </div>
      </div>
      <Comments/>
    </div>
  );
}

export default Profitmenu