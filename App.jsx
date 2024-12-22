
import React from "react";
import Card from "./Component/Card/Card";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar"; 
import { Data } from "./Data";

const App = () => {
  return (
    <>
      <Navbar /> 
      {Data.map((e, i) => {
        return <Card key={i} imgSrc={e.imgSrc} title={e.title} desc={e.desc} />;
      })}
      <Footer />
    </>
  );
};

export default App;
