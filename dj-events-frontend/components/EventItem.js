import Link from "next/link";
import Image from "next/image";

const EventItem = ({ evt }) => {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div>
        <Image
          src={evt.image ? evt.image.formats.thumbnail.url : "/images/event-default.png"}
          width={170}
          height={100}
        />
      </div>

      <div>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>

      <div className="mt-4">
        <Link href={`/events/${evt.slug}`}>
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Details</a>
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
