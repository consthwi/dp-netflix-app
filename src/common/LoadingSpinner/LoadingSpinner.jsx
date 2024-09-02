import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = ({ size, color }) => {
  return (
    <div className="spinner-wrapper">
      <ClipLoader
        className="spinner"
        color={color}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
