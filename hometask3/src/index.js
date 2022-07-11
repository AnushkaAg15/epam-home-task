import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

const NewsBlog = () => {
  return (
    <>
      <Header />,
      <Body />,
      <Footer />
    </>
  );
};

ReactDOM.render(<NewsBlog />, document.getElementById("root"));
