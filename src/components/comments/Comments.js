import React from 'react'
import classes from "./comment.module.css"
import { FaStar } from "react-icons/fa6";

const Comments = () => {
  return (
    <div className={classes.commaindiv}>
      <p style={{ color: "white", fontWeight: "bold" }}>Customer's Feedback</p>
      <div className={classes.cmtscrl} >
        <div className={classes.comment}>
          <p className={classes.cname}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s"
              alt="pic"
              className={classes.cpic}
            />{" "}
            <span style={{ color: "white", fontWeight: "500" }}>
              Ajit Singh
            </span>
          </p>
          <p className={classes.cstar}>
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="white" />
            <FaStar color="white" />
          </p>
          <p className={classes.ccoment}>
            Dgh kjb ijg ij gng eg rkjse ijb ius ie ijnb igsj sgsseij ng gsiue
            giug ijn ghinjegi dxkes seo gesrkiser oinjes roinseegr oinserr
            onjsreg oje oknsress njresnj;k rseons noiressoin oinj;esrnj rerg
          </p>
        </div>
        <div className={classes.comment}>
          <p className={classes.cname}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s"
              alt="pic"
              className={classes.cpic}
            />{" "}
            <span style={{ color: "white", fontWeight: "500" }}>
              Ajit Singh
            </span>
          </p>
          <p className={classes.cstar}>
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
          </p>
          <p className={classes.ccoment}>
            Dgh kjb ijg ij gng eg rkjse ijb ius ie ijnb igsj sgsseij ng gsiue
            giug ijn ghinjegi dxkes seo gesrkiser oinjes roinseegr oinserr
            onjsreg oje oknsress njresnj;k rseons noiressoin oinj;esrnj rerg
          </p>
        </div>
        <div className={classes.comment}>
          <p className={classes.cname}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s"
              alt="pic"
              className={classes.cpic}
            />{" "}
            <span style={{ color: "white", fontWeight: "500" }}>
              Ajit Singh
            </span>
          </p>
          <p className={classes.cstar}>
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="white" />
          </p>
          <p className={classes.ccoment}>
            Dgh kjb ijg ij gng eg rkjse ijb ius ie ijnb igsj sgsseij ng gsiue
            giug ijn ghinjegi dxkes seo gesrkiser oinjes roinseegr oinserr
            onjsreg oje oknsress njresnj;k rseons noiressoin oinj;esrnj rerg
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments