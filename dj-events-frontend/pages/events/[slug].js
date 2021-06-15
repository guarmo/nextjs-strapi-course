import React from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import {useRouter} from 'next/router'

function EventPage({ evt }) {
  const router = useRouter();

  const deleteEvent = async (e) => {
    if(confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/events/${evt.id}`, {
        method: 'DELETE'
      })

      const data = await res.json();

      if(!res.ok) {
        toast.error(data.message)
      } else {
        router.push('/events')
      }
    }
  }

  return (
    <Layout title="Slug">

      <div className="my-10">
      <Link href={`/events/edit/${evt.id}`}>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit event
        </a>
      </Link>


      <a href="#" onClick={deleteEvent} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Delete event
        </a>
      </div>

      <span>
        <h1>{evt.name}</h1>
        <ToastContainer />
        <h1>{new Date(evt.date).toLocaleDateString('en-US')}</h1>
        {
          evt.image && (
            <div>
              <Image src={evt.image.formats.medium.url} width={960} height={600} />
            </div>
          )
        }
      </span>

      <h3>Performers:</h3>
      <p>{evt.performers}</p>
      <h3>Description:</h3>
      <p>{evt.description}</p>
      <h3>Venue: {evt.venue}</h3>
      <p>{evt.address}</p>

      <Link href={`/`}>
        <a className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {" "}
          Go to home page
        </a>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: { evt: events[0] },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();

//   return {
//     props: { evt: events[0] },
//   };
// }

export default EventPage;
