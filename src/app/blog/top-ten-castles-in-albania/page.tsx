// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/blog/castles-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exploring Albania's Enigmatic Castles: A Journey Through Time",
  description:
    "Embark on a historical adventure through Albania's magnificent castles. From Krujë to Petrela, discover the rich history and dramatic landscapes of these ancient fortresses.",
  keywords:
    "Albania, castles, Albanian history, Krujë Castle, Rozafa Castle, Berat Castle, Gjirokastër Castle, Bashtovë Fortress, Petrela Castle, medieval fortresses, UNESCO World Heritage Sites",
  openGraph: {
    title: "Exploring Albania's Enigmatic Castles: A Journey Through Time",
    description:
      "Embark on a historical adventure through Albania's magnificent castles. From Krujë to Petrela, discover the rich history and dramatic landscapes of these ancient fortresses.",
    url: "https://albaniagateway.com/blog/albania-castles",
    siteName: "Albania Gateway",
    images: {
      url: "/blog/Gjirokastër-Castle-1.jpg",
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
