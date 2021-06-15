import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

function notFound() {
  return (
    <Layout title="Page not found">
      <h1>Page not found</h1>
      <Link href="/">Back to home page</Link>
    </Layout>
  );
}

export default notFound;
