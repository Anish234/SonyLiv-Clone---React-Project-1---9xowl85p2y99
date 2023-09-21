import React from 'react';
import "./LanguageCard.css";
const LanguageCard = (props) => {
  return (
    <>
      <div className="language-card-container">
        <img src={props.lang} />
      </div>
    </>
  );
};
export default LanguageCard;
