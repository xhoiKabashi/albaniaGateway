// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/info/eu-data";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Is Albania in the EU?",
  description:
    "Explore Albania's aspirations and efforts to join the European Union through our blog post. From key milestones to current challenges and opportunities, delve into Albania's path towards EU membership and its implications for the country and the region.",
  keywords:
    "Albania, travel to Albania, Albania blog, EU membership, Albania and European Union, European integration, Albania's EU aspirations, EU accession process, Albania's path to EU, Albania's candidacy for EU membership, European values, Western Balkans, European integration process",
  openGraph: {
    title:
      "Is Albania in the EU? - Albania's Journey Towards European Union Membership",
    description:
      "Explore Albania's aspirations and efforts to join the European Union through our blog post. From key milestones to current challenges and opportunities, delve into Albania's path towards EU membership and its implications for the country and the region.",
    url: "https://albaniagateway.com/blog/is-albania-in-the-eu",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/eu.jpg",
      width: 1260,
      height: 800,
      alt: "Image of EU flag",
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
