import React from "react";

export default function CameraNotAvailable({ error }) {
  return (
    <div className="center">
      Camera not available please check if connection is HTTPs
      <div>{error}</div>
    </div>
  );
}
