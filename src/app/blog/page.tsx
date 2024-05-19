import { MainWrapper, SecondaryWrapper } from "@/components/atoms/Wrapper";
import Map from "@/components/organisms/map/Map";
import React from "react";

const Blog = () => {
  return (
    <MainWrapper className=" pt-16">
      <div className=" ">
        <Map />
      </div>
    </MainWrapper>
  );
};

export default Blog;
