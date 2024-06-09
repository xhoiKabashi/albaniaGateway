// pages/somePage.js
import React from "react";
import BlogPost from "@/components/organisms/blog/TemplateBloge";
import { ParaBlog, TitleBlog } from "@/components/atoms/TypographyH2";
import { blogData } from "@/data/visit/e-transport.data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is eTransport?",
  description:
    "Discover the future of intercity road transport access in Albania with the eTransport platform. Learn how this innovative tool streamlines services for both transport companies and citizens, offering electronic ticketing and real-time information on lines, stations, terminals, and timetables.",
  keywords:
    "Albania,Albania eTransport,  Albania intercity transport, Albania road transport,Albania  air transport,Albania sea transport,Albania rail transport,Albania taxi service, Albania interurban transport,Albania transportation infrastructure",
  openGraph: {
    title: "What is eTransport?",
    description:
      "Discover the future of intercity road transport access in Albania with the eTransport platform. Learn how this innovative tool streamlines services for both transport companies and citizens, offering electronic ticketing and real-time information on lines, stations, terminals, and timetables.",
    url: "https://albaniagateway.com/blog/what-is-etransport",
    siteName: "Albania Gateway",
    images: {
      url: "/visit/etransport.jpg",
      width: 1260,
      height: 800,
      alt: "transportation logo",
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
