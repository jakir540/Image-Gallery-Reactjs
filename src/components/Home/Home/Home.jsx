import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Gallery from "../Gallery/Gallery";
import Loader from "../../Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? <Loader></Loader> : <Gallery></Gallery>}</div>;
};

export default Home;
