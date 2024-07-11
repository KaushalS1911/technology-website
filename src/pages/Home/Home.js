import React from "react";
import Hero from "./Hero";
import MainCources from "./MainCources";
import WhyUs from "./WhyUs";
import MileStone from "./MileStone";
import Client from "./Client";
import MainHomePage from "../../components/AnimatedHome/MainHomePage";
import Horizontal from "../../components/AnimatedHome/Horizontal";
import Counter from "../../components/AnimatedHome/Counter";
import ReviewRating from "../../components/AnimatedHome/ReviewRating";
import '../../assets/styles/Home.css'

const Home = () => {
  return (
    <>
      {/*<Hero />*/}
        <MainHomePage />
        {/*<MainCources />*/}
        <Horizontal />
        {/*<Counter />*/}
          <MileStone />
        <ReviewRating />
      {/*<WhyUs />*/}
      {/*<MileStone />*/}
      {/*<Client />*/}
    </>
  );
};

export default Home;
