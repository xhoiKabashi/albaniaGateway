// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { tiranaData } from "@/data/blog/tirana-data";

const page = () => {
  return (
    <BlogPost
      title={tiranaData.title}
      date={tiranaData.date}
      readTime={tiranaData.readTime}
      imageSrc={tiranaData.imageSrc}
      imageAlt={tiranaData.imageAlt}
    >
      {tiranaData.paragraphs.map((para, index) => (
        <ParaBlog key={index} text={para.text} />
      ))}
      {tiranaData.paragraphsWithTitle.map((reason, index) => (
        <React.Fragment key={index}>
          <TitleBlog text={reason.title} />
          <ParaBlog text={reason.text} />
        </React.Fragment>
      ))}
    </BlogPost>
  );
};

export default page;
