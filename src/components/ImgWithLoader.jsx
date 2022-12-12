import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { img7 } from "../Utils/Utils";

const ImgWithLoader = (props) => {
  const { height, width, src } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const imgLoaded = () => {
    setIsLoading(false);
  };
  const imgError = () => {
    setIsLoading(false);
    setError(true);
  };
  return (
    <div className="loader_container">
      {isLoading && (
        <div
          className="loader"
          style={{ height: `${height}px`, width: `${width}px` }}
        >
          <CircularProgress color="secondary" />
        </div>
      )}
      {error && <p>something went wrong</p>}
      <img src={src ? src : img7} onLoad={imgLoaded} onError={imgError} />
    </div>
  );
};

export default ImgWithLoader;
