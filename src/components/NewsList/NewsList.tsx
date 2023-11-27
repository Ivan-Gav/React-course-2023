import { NewsApiArticle, NewsApiResponse } from '../../models/interfaces';
import NewsSnippet from '../NewsSnippet/NewsSnippet';

function NewsList(props: NewsApiResponse) {
  const renderList = () => {
    if (props.articles?.length) {
      return props.articles.map((item: NewsApiArticle) => {
        return (
          <NewsSnippet
            newsItem={item}
            key={`${item.title}-${item.publishedAt}`}
          />
        );
      });
    }
    return <h4>Nothing found</h4>;
  };

  return <>{renderList()}</>;
}

export default NewsList;
