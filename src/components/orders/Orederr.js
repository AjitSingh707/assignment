import React from 'react'
import classes from "./order.module.css"
import { orders } from '../../data/data'

const Orederr = () => {
  return (
    <div className={classes.orderdiv}>
      <p style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>
        Recent Orders
      </p>
      <div className={classes.tablediv}>
        <table className={classes.tabstl}>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((itm, i) => (
              <tr key={i}>
                <td style={{
                    display:"flex", alignItems:"center",
                    gap:"5px"
                }} >
                  <img
                    src={itm.img}
                    alt="pic"
                    height={"25px"}
                    width={"25px"}
                    style={{ borderRadius: "100%" }}
                  />
                  <span> {itm.customer}</span>
                </td>
                <td>{itm.ordernum}</td>
                <td>${itm.amount}</td>
                <td
                  style={{
                    color: itm.status === "Delivered" ? "green" : "red",
                    backgroundColor:
                      itm.status === "Delivered"
                        ? "rgba(0, 128, 0, 0.25)"
                        : "rgba(255, 0, 0, 0.26)",
                    borderRadius: "20px",
                    textAlign: "center",
                  }}
                >
                  {itm.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orederr