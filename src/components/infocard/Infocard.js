import React from 'react'
import classes from "./infocard.module.css"
import { LuBaggageClaim } from "react-icons/lu";
import { BsBagCheckFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";


const Infocard = () => {
  
  return (
    <div className={classes.infocard}>
      <div className={classes.card}>
        <LuBaggageClaim
          className={classes.squqre}
          style={{
            color: "#0000ff",
            backgroundColor: "#0000ff55",
          }}
        />
        <p
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Total Orders
        </p>
        <div className={classes.infoval}>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              flex: "1",
              color: "white",
            }}
          >
            75
          </span>
          <div className={classes.arrr}>
            <MdOutlineArrowDropUp color="green" size={25} />

            <span
              style={{
                color: "green",
              }}
            >
              3%
            </span>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <BsBagCheckFill
          className={classes.squqre}
          style={{
            color: "#1cc517",
            backgroundColor: "#1cc51755",
          }}
        />
        <p
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Total Delivered
        </p>
        <div className={classes.infoval}>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              flex: "1",
              color: "white",
            }}
          >
            70
          </span>
          <div className={classes.arrr}>
            <MdOutlineArrowDropDown color="red" size={25} />

            <span
              style={{
                color: "red",
              }}
            >
              3%
            </span>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <BsBagXFill
          className={classes.squqre}
          style={{
            color: "#ce1c1c",
            backgroundColor: "#ce1c1c55",
          }}
        />
        <p
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Total Canceled
        </p>
        <div className={classes.infoval}>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              flex: "1",
              color: "white",
            }}
          >
            05
          </span>
          <div className={classes.arrr}>
            <MdOutlineArrowDropUp color="green" size={25} />

            <span
              style={{
                color: "green",
              }}
            >
              3%
            </span>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <FaHandHoldingDollar
          className={classes.squqre}
          style={{
            color: "#ee7e90",
            backgroundColor: "#ee7e9055",
          }}
        />
        <p
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Total Revenue
        </p>
        <div className={classes.infoval}>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              flex: "1",
              color: "white",
            }}
          >
            75
          </span>
          <div className={classes.arrr}>
            <MdOutlineArrowDropDown color="red" size={25} />

            <span
              style={{
                color: "red",
              }}
            >
              3%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infocard