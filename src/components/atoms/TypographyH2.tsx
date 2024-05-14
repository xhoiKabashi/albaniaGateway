import React from "react";

// Interface to define the props expected by TypographyH2
interface TypographyH2Props {
  text?: string; // Enforce that the 'text' prop is always a string
  h1?: boolean; // Enforce that the 'h1' prop
}

export const TitleBlog: React.FC<TypographyH2Props> = ({ text }) => {
  return <h2 className="font-bold mb-5">{text}</h2>;
};

export const ParaBlog: React.FC<TypographyH2Props> = ({ text }) => {
  return <h2 className="mb-5 text-base leading-6">{text}</h2>;
};

export const TypographyH2: React.FC<TypographyH2Props> = ({ text }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 mb-2 pt-4 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
};

export const TypographyH3: React.FC<TypographyH2Props> = ({ text, h1 }) => {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 mb-2 pt-4 text-xl font-semibold ${
        h1 ? "  text-4xl" : "text-xl"
      } tracking-tight first:mt-0`}
    >
      {text}
    </h2>
  );
};
