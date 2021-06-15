import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta meta="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div className="container mx-auto">
        <Header />
        <div
          className="flex flex-col items-center"
          style={{ minHeight: "600px" }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other events",
  keywords: "music, dj, edm",
};

export default Layout;
