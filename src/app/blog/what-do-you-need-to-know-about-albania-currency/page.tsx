// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/blog/currency-data";

const page = () => {
  return (
    <BlogPost
      title={blogData.title}
      date={blogData.date}
      readTime={blogData.readTime}
      imageSrc={blogData.imageSrc}
      imageAlt={blogData.imageAlt}
    >
      {blogData.paragraphs.map((para, index) => (
        <ParaBlog key={index} text={para.text} />
      ))}
      {blogData.paragraphsWithTitle.map((reason, index) => (
        <React.Fragment key={index}>
          <TitleBlog text={reason.title} />
          <ParaBlog text={reason.text} />
        </React.Fragment>
      ))}
    </BlogPost>
  );
};

export default page;
