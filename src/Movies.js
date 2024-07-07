import React, { useEffect, useState } from "react";
import { mal, hin, tam, eng } from "./Constants";
import "./App.css";

export const Malayalam = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % mal.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="movie">
      <div className="movie-head">
        <h3>MALAYALAM</h3>
      </div>
      <div style={{ flex: 1, position: "relative", width: "100%", height: "calc(100% - 40px)" }}>
        {mal.map((url, i) => (
          <img
            key={url}
            src={url}
            className={`malSlide ${activeImageIndex === i ? "block" : "hidden"}`}
            alt="Malayalam Movies"
          />
        ))}
      </div>
    </div>
  );
};

export const Hindi = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % hin.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="movie">
      <div className="movie-head">
        <h3>HINDI</h3>
      </div>
      <div style={{ flex: 1, position: "relative", width: "100%", height: "calc(100% - 40px)" }}>
        {hin.map((url, i) => (
          <img
            key={url}
            src={url}
            className={`malSlide ${activeImageIndex === i ? "block" : "hidden"}`}
            alt="Hindi Movies"
          />
        ))}
      </div>
    </div>
  );
};

export const Tamil = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % tam.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="movie">
      <div className="movie-head">
        <h3>TAMIL</h3>
      </div>
      <div style={{ flex: 1, position: "relative", width: "100%", height: "calc(100% - 40px)" }}>
        {tam.map((url, i) => (
          <img
            key={url}
            src={url}
            className={`malSlide ${activeImageIndex === i ? "block" : "hidden"}`}
            alt="Tamil Movies"
          />
        ))}
      </div>
    </div>
  );
};

export const English = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % eng.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="movie">
      <div className="movie-head">
        <h3>ENGLISH</h3>
      </div>
      <div style={{ flex: 1, position: "relative", width: "100%", height: "calc(100% - 40px)" }}>
        {eng.map((url, i) => (
          <img
            key={url}
            src={url}
            className={`malSlide ${activeImageIndex === i ? "block" : "hidden"}`}
            alt="English Movies"
          />
        ))}
      </div>
    </div>
  );
};
