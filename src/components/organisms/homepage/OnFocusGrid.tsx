import React from "react";
import Card from "./Card";

export default function OnFocusGrid() {
  return (
    <div className=" flex flex-col h-screen w-[90%] lg:grid   lg:grid-cols-6 lg:grid-rows-4 gap-3 lg:w-[80%]  lg:h-[530px] py-10">
      <Card
        style="lg:col-span-2 lg:row-span-4"
        alt="test"
        imageUrl="/travelhero2.png"
      />
      <Card
        style="lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-2"
        alt="test"
        imageUrl="/travelhero2.png"
      />
      <Card
        style="lg:col-start-3 lg:col-span-2 lg:row-start-3 lg:row-span-2"
        alt="test"
        imageUrl="/travelhero2.png"
      />
      <Card
        style="lg:col-start-5 lg:col-span-2 lg:row-span-4"
        alt="test"
        imageUrl="/travelhero2.png"
      />
    </div>
  );
}
