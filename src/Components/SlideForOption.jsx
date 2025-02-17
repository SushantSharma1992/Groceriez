import React, { useRef } from "react";

export default function SlideForOption({ children }) {
  const currentItemRef = useRef();
  let downX;

  const applyTranform = (newX) => {
    let delta = 100;
    if (currentItemRef.current.style.transform === "translate(0px)") {
      if (newX - downX <= -delta) {
        currentItemRef.current.style.transform = "translate(-100px)";
      } else if (newX - downX >= delta) {
        currentItemRef.current.style.transform = "translate(100px)";
      }
    } else {
      currentItemRef.current.style.transform = "translate(0px)";
    }
  };

  const onPointerDown = (e) => {
    downX = e.clientX;
  };
  const onPointerUp = (e) => {
    const newX = e.clientX;
    applyTranform(newX);
  };

  const onTouchStart = (e) => {
    const touch = e.changedTouches[0];
    downX = touch.clientX;
  };
  const onTouchEnd = (e) => {
    let newX;
    const touch = e.changedTouches[0];
    if (touch) {
      newX = touch.clientX;
    } else newX = e.clientX;
    applyTranform(newX);
  };

  return (
    <div
      className="item center_grid"
      ref={currentItemRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
}
