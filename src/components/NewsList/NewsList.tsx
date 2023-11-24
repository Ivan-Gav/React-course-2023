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
    return <div>Nothing found</div>;
  };

  return <>{renderList()}</>;
}

export default NewsList;
