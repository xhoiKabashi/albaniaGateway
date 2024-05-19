import React from "react";
import { TitleBlog, ParaBlog } from "@/components/atoms/TypographyH2";
import { MainWrapper, SecondaryWrapper } from "@/components/atoms/Wrapper";

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
    <MainWrapper>
      <SecondaryWrapper>
        <header>
          <h1 className="  text-2xl mb-16">{mainTitle}</h1>
        </header>
        {sections.map((section, index) => (
          <section key={index}>
            <TitleBlog text={section.title} />
            <ParaBlog text={section.para} />
          </section>
        ))}
      </SecondaryWrapper>
    </MainWrapper>
  );
}
