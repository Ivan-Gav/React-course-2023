import { useEffect, useState } from 'react';
import NewsApiResponse from '../../interface/newsapiresponse';
import NewsApiArticle from '../../interface/newsapiarticle';
import NewsSnippet from '../NewsSnippet/NewsSnippet';
import Loader from '../Loader/Loader';

const apiURL = 'https://newsapi.org/v2/top-headlines';
const apiKey = 'eef9fc46616347dbbfb3e24da3a43690';

type ContentProps = {
  query?: string;
};

type Options = {
  pageSize: number;
  page: number;
};

function Content(props: ContentProps) {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<null | NewsApiResponse>(null);

  const makeURL = (
    query?: string,
    options: Options = { pageSize: 10, page: 1 }
  ) => {
    if (!apiURL || !apiKey) {
      throw new Error('Invalid request');
    }
    let url = apiURL + '?';
    for (const key in options) {
      url = url + `${key}=${options[key as keyof Options]}&`;
    }
    url = url.slice(0, -1);
    if (query) {
      url = url + `&q=${encodeURIComponent(query.trim())}`;
    }
    url = url + `&language=en&apiKey=${apiKey}`;
    return url;
  };

  const renderContent = () => {
    const data = content;
    if (data && 'articles' in data && data.articles?.length) {
      return data.articles.map((item: NewsApiArticle) => {
        return (
          <NewsSnippet
            newsItem={item}
            key={`${item.title}-${item.publishedAt}`}
          />
        );
      });
    }
    return <div>No data</div>;
  };

  useEffect(() => {
    const apiCall = async (query?: string): Promise<void> => {
      setLoading(true);
      fetch(makeURL(query))
        .then((res) => res.json())
        .then((data) => {
          setContent(data);
          setLoading(false);
        });
    };

    apiCall(props.query);
  }, [props.query]);

  return (
    <div>
      <h2>Content</h2>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {props.query && <h3>Search for: {props.query}</h3>}
          <hr />
          {renderContent()}
        </div>
      )}
    </div>
  );
}

export default Content;
