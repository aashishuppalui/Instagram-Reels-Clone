import React from "react";
import "./VideoHeader.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CameraAltOutlineIcon from "@material-ui/icons/CameraAltOutlined";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIcon />
      <h3>Reels</h3>
      <CameraAltOutlineIcon />
    </div>
  );
}

export default VideoHeader;
