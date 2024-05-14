import React from "react";
import Hero from "./Hero";
import RecentProjects from "./RecentProjects";
import Faqs from "../Ui/Faqs";

function Home() {
  return (
    <div className="">
      <Hero />
      <RecentProjects />
      <Faqs />
    </div>
  );
}

export default Home;
