import NewsApiResponse from '../../interface/newsapiresponse';
import NewsApiArticle from '../../interface/newsapiarticle';
import NewsSnippet from '../NewsSnippet/NewsSnippet';

function NewsList(props: NewsApiResponse) {
  const renderList = () => {
    if (props && 'articles' in props && props.articles?.length) {
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
