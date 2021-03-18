import React from "react";

import TopBar from "../components/TopBar";
import AyahList from "../components/AyahList";
import Footer from "../components/Footer";

const Home = (props) => {
  const surahNumber = (props.match.params.surahNumber || 1) - 1;
  return (
    <>
      <TopBar surahNumber={surahNumber} />
      <AyahList />
      <Footer />
    </>
  );
};

export default Home;
