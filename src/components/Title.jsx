import React from "react";
import "./Title.css";

export const Title = ({ title, subTitle }) => {
  return (
    <div className="title-block section-title">
      <h2 className="title">{title}</h2>
      <h4 className="subtitle">{subTitle}</h4>
    </div>
  );
};
