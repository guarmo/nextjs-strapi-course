import Link from "next/link";
import React from "react";
import Layout from "@/components/Layout";

const about = () => {
  return (
    <Layout title="About DJ Events">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
        incidunt.
      </p>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default about;
