"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const IndicatorScroll = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isAtTop && (
        <div className="hidden md:block">
          <FontAwesomeIcon
            icon={faAnglesDown}
            bounce
            size="2xl"
            className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 text-slate-200"
          />
        </div>
      )}
    </>
  );
};

export default IndicatorScroll;
