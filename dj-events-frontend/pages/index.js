import React from "react";
import { API_URL } from "@/config/index";
import Link from 'next/link'
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";

function index({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {
        events.length > 0 && (
          <Link href={`/events`}>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View all events</a>
          </Link>
        )
      }
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}

export default index;
