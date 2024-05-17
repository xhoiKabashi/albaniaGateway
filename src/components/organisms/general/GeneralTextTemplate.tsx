import React from "react";
import { TitleBlog, ParaBlog } from "@/components/atoms/TypographyH2";

interface Section {
  title: string;
  para: string;
}

interface PageProps {
  mainTitle: string;
  sections: Section[];
}

export default function GeneralTextTemplate({
  mainTitle,
  sections,
}: PageProps) {
  return (
    <section className=" mt-24  flex justify-center">
      <div className=" w-[90%] md:w-[60%]">
        <h1 className="  text-2xl mb-16">{mainTitle}</h1>
        {sections.map((section, index) => (
          <div key={index}>
            <TitleBlog text={section.title} />
            <ParaBlog text={section.para} />
          </div>
        ))}
      </div>
    </section>
  );
}
