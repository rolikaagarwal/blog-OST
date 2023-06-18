import axios from "axios";
import { useEffect, useState } from "react";
interface Props {
  name: string;
  start_time: string;
  end_time: string;
  site: string;
  status: string;
}

const Events: React.FC = () => {
  const [upevents, setUpEvents] = useState<Props[]>([]);
  useEffect(() => {
    const EventsApi = async (): Promise<void> => {
      const options = {
        method: "GET",
        url: "https://contests7.p.rapidapi.com/contests",
        headers: {
          "X-RapidAPI-Key":
          import.meta.env.VITE_API_KEY1,
          "X-RapidAPI-Host": "contests7.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setUpEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    EventsApi();
  }, []);
  return (
    <>
      <h1 className="heading">event page</h1>
      {upevents.map((t, index) => (
        <div className="flex">
          <div
            key={index}
            className="  w-full bg-slate-300 mb-2 font-medium px-40 py-10"
          >
            <h2>Event Name : {t.name} </h2>
            <h2>Start Time :{t.start_time} </h2>
            <h2>End Time :{t.end_time} </h2>
            <h2>Site : {t.site}</h2>
            <h2>Status :{t.status} </h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Events;
