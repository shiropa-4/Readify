import React, { useEffect, useState } from "react";
import "../styles/orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetches all orders from the backend
    fetch("http://localhost:5000/api/orders") 
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <h2 className="orders-title">Your Orders</h2>
        <p>No orders found.</p>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h2 className="orders-title">Your Orders</h2>
      {orders.map((order) => (
        <div className="order-card" key={order._id}>
          <img src={order.bookId.image} alt={order.bookId.title} />
          <div className="order-details">
            <h3>{order.bookId.name}</h3>
            <p>Author: {order.bookId.author}</p>
            <p>Price: ₹{order.bookId.price}</p>
            <p className="purchase-time">
              Purchased on: {new Date(order.purchaseDate).toLocaleString("en-IN", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
