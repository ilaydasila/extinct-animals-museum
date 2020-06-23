import React from "react";

import "./detailBox.css";

const DetailBox = ({ show, children }) => {
  const detailBoxClassName = show
    ? "detailBox display-block"
    : "detailBox display-none";

  return (
    <div className={detailBoxClassName}>
      <section className='detailBox-main'>{children}</section>
    </div>
  );
};

export default DetailBox;
