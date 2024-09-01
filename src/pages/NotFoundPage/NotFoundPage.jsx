import React from "react";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">Lost your way?</h1>
      <p className="notfound-text">
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>
      <button className="notfound-button" onClick={goToHome}>
        Netflix Home
      </button>
    </div>
  );
}

export default NotFoundPage;
