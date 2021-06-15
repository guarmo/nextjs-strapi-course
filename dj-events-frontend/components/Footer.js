import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-center">
      <h1>Copyright 2021</h1>
      <Link href="/about">About this project</Link>
    </footer>
  );
}

export default Footer;
