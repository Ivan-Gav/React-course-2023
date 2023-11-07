import { useContext } from 'react';
import NewsApiArticle from '../../interface/newsapiarticle';
import NewsSnippet from '../NewsSnippet/NewsSnippet';
import ContentContext from '../../contexts/ContentContext';

function NewsList() {
  const content = useContext(ContentContext);

  const renderList = () => {
    if (content && 'articles' in content && content.articles?.length) {
      return content.articles.map((item: NewsApiArticle) => {
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
