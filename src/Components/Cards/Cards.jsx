import React from "react";
import "./Card.css";
import Orders from "@mui/icons-material/LocalShipping";
import Revenue from "@mui/icons-material/Money";
import AveragePrice from "@mui/icons-material/LocalOffer";
import ProductSold from "@mui/icons-material/DataThresholding";

const cardData = [
    { icon: <Orders />, title: "Orders", value: 578 },
    { icon: <Revenue />, title: "Revenue", value: 5268 },
    { icon: <AveragePrice />, title: "Avg Price", value: 578 },
    { icon: <ProductSold />, title: "Sold", value: 578 }
  ];
  
  const Cards = () => {
    return (
      <div className="main__container">
        <div className="main__greeting">
          <h1>Dashboard</h1>
          <p>Welcome to our admin dashboard</p>
        </div>
        <div className="main__cards">
          {cardData.map((card) => (
            <div className="card" key={card.title}>
              <i>{card.icon}</i>
              <div className="card_inner">
                <p className="text-primary-p">{card.title}</p>
                <span className="font-bold text-title">{card.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  


export default Cards;
