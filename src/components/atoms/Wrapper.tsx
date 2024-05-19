import React from "react";

export function MainWrapper({ children }: any) {
  return (
    <main className=" flex flex-col justify-center items-center my-20">
      {children}
    </main>
  );
}

export function SecondaryWrapper({ children }: any) {
  return <article className=" w-[90%] md:w-[60%]">{children}</article>;
}
