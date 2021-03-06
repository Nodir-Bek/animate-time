import React, { useEffect, useState } from "react";
import "../Styles/Home.scss";
import timeComponent, { TimeComponent } from "../components/timeComponent";

const Home = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return (
    <div className="home">
      <TimeComponent />
    </div>
  );
};

export default Home;
