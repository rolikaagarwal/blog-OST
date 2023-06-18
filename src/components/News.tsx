import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
interface Props {
  title: string;
  url: string;
}
const News = () => {
  const [news, setNews] = useState<Props[]>([]);
  useEffect(() => {
    const newsApi = async (): Promise<void> => {
      const options = {
        method: "GET",
        url: "https://newsapi.org/v2/top-headlines",
        params: {
          country: "in",
          apiKey: import.meta.env.VITE_API_KEY,
          category: "technology",
        },
      };

      try {
        const response = await axios.request(options);

        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    newsApi();
  }, []);

  return (
    <div>
      <h1 className="heading">News Headlines</h1>
      {news.map((t, index) => (
        <div key={index} className="newsdiv">
          <div>
            <ul>
              <Link to={t.url}>
                <li>{t.title}</li>
              </Link>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
