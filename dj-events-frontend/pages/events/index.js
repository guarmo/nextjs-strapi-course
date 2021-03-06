import React from "react";
import { API_URL } from "@/config/index";
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
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();
  return {
    props: { events },
    revalidate: 1,
  }
}

export default index;
