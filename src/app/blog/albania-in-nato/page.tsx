// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/info/nato-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Is Albania in NATO? - Albania's Role in the North Atlantic Treaty Organization",
  description:
    "Explore Albania's membership in NATO through our blog post. From its accession process to its contributions, learn about Albania's role in the North Atlantic Treaty Organization and its impact on regional security.",
  keywords:
    "Albania, travel to Albania, Albania blog, NATO membership, Albania's role in NATO, Albanian military, NATO missions, Euro-Atlantic integration, Albania and international security, Albania's foreign policy, NATO enlargement, Albania's accession to NATO",
  openGraph: {
    title:
      "Is Albania in NATO? - Albania's Role in the North Atlantic Treaty Organization",
    description:
      "Explore Albania's membership in NATO through our blog post. From its accession process to its contributions, learn about Albania's role in the North Atlantic Treaty Organization and its impact on regional security.",
    url: "https://albaniagateway.com/blog/is-albania-in-nato",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/nato.jpg",
      width: 1260,
      height: 800,
    },
    locale: "en-EN",
  },
};

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
        <ParaBlog key={index} text={para.para} />
      ))}
      {blogData.paragraphsWithTitle.map((reason, index) => (
        <React.Fragment key={index}>
          <TitleBlog text={reason.title} />
          <ParaBlog text={reason.para} />
        </React.Fragment>
      ))}
    </BlogPost>
  );
};

export default page;
