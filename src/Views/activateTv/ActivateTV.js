import React, { useState } from "react";
import Footer from "../../components/common/footer/Footer";
import { useNavigate } from "react-router-dom";
import "./ActivateTV.css";
import Navbar from "../../components/common/navbar/Navbar";

const ActivateTv = () => {
  const nav = useNavigate();
  const [otpEntered, setOtpEntered] = useState(false);
  const handleKeyDown = (e) => {
    handleChange(e);
    if (e?.key === "Backspace") {
      e.target.previousElementSibling &&
        e.target.previousElementSibling.focus();
      if (e.target.previousElementSibling) {
        e.target.previousElementSibling.value = "";
      }
    } else if (e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    }
    let filledInputsCount = 0;
    document.querySelectorAll("input").forEach((x) => {
      if (x.value) {
        filledInputsCount++;
      }
    });
    if (filledInputsCount === 4) {
      setOtpEntered(true);
    } else {
      setOtpEntered(false);
    }
  };
  const handleChange = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  return (
    <>
      <Navbar />
      <div className="activate-tv-container">
        <div className="activate-tv-content">
          <div className="activate-tv-label">Enter code</div>
          <div className="activate-tv-label">
            Enter the code shown on your TV screen
          </div>
          <div className="activate-tv-otp-input-group">
            <input type="tel" maxLength="1" autoFocus onKeyUp={handleKeyDown} />
            <input type="tel" maxLength="1" onKeyUp={handleKeyDown} />
            <input type="tel" maxLength="1" onKeyUp={handleKeyDown} />
            <input type="tel" maxLength="1" onKeyUp={handleKeyDown} />
          </div>
          <button
            className="activate-tv-btn"
            disabled={!otpEntered}
            onClick={() => nav("/home")}
          >
            Activate Device
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ActivateTv;
