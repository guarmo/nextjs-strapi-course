import React from "react";
import Link from "next/link";
import Search from "./Search";

function Header() {
  return (
    <header>

      <Search />
      <nav>
        <ul class="flex">
          <li class="mr-6">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li class="mr-6">
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li class="mr-6">
            <Link href="/events/add">
              <a>Add Event</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
