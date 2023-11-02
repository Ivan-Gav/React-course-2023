import { useEffect, useState } from 'react';
import NewsApiResponse from '../../interface/newsapiresponse';
import NewsApiArticle from '../../interface/newsapiarticle';
import NewsSnippet from '../NewsSnippet/NewsSnippet';
import NewsApiRequest from '../../interface/newsapirequest';
import Loader from '../Loader/Loader';
import NewsListProps from '../../interface/newslistprops';

const API_URL = 'https://newsapi.org/v2/top-headlines';
// const API_URL = 'http://127.0.0.1:8075/everything';
const API_KEY = 'eef9fc46616347dbbfb3e24da3a43690';

function NewsList(props: NewsListProps) {
  const defaultProps: NewsListProps = {
    apiKey: API_KEY,
    pageSize: 10,
    page: 1,
    language: 'en',
    ...props,
  };

  const { q, apiKey, setTotalPages, pageSize } = defaultProps;

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<null | NewsApiResponse>(null);

  const URL = (() => {
    if (!API_URL || !apiKey) {
      throw new Error('Invalid request');
    }
    let url = API_URL + '?';
    for (const key in defaultProps) {
      let value = defaultProps[key as keyof NewsApiRequest];
      value =
        key === 'q' ? encodeURIComponent((value as string).trim()) : value;
      value = key === 'setTotalPages' ? '' : value;
      if (value) url = url + `${key}=${value}&`;
    }
    url = url.slice(0, -1);
    return url;
  })();

  const renderList = () => {
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
    return <div>Nothing found</div>;
  };

  useEffect(() => {
    const apiCall = async (): Promise<void> => {
      setLoading(true);
      fetch(URL)
        .then((res) => res.json())
        .then((data: NewsApiResponse) => {
          setContent(data);
          if (data.totalResults && pageSize) {
            setTotalPages(Math.ceil(data.totalResults / pageSize));
            console.log(Math.ceil(data.totalResults / pageSize));
          }
          setLoading(false);
        });
    };

    apiCall();
  }, [URL, pageSize, setTotalPages]);

  return (
    <div>
      <h2>News</h2>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {q && <h3>Search for: {q}</h3>}
          <h3>Get from: {URL}</h3>
          {content?.totalResults && (
            <h3>Total results: {content.totalResults}</h3>
          )}
          <hr />
          {renderList()}
        </div>
      )}
    </div>
  );
}

export default NewsList;
