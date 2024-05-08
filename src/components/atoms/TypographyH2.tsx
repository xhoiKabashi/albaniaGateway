import React from "react";

// Interface to define the props expected by TypographyH2
interface TypographyH2Props {
  text: string; // Enforce that the 'text' prop is always a string
}

export const TypographyH2: React.FC<TypographyH2Props> = ({ text }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 mb-2 pt-4 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
};
