import React from "react";

interface LinkTypes {
  link: string;
}

export default function LinkToGoogle({ link }: LinkTypes) {
  return (
    <div className=" w-full text-end mb-4">
      <a href={link} target="blanked" className=" text-sm  border-b-2 pb-2">
        Google map link
      </a>
    </div>
  );
}
