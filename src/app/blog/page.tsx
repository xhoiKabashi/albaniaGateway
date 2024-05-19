import { MainWrapper, SecondaryWrapper } from "@/components/atoms/Wrapper";
import Map from "@/components/organisms/map/Map";
import React from "react";

const Blog = () => {
  return (
    <MainWrapper>
      <div className=" flex">
        <Map />
      </div>
    </MainWrapper>
  );
};

export default Blog;
