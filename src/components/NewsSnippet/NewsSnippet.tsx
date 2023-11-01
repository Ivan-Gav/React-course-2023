import { Component } from 'react';
import NewsApiArticle from '../../interface/newsapiarticle';

type NewsSnippetProps = {
  newsItem: NewsApiArticle;
  key: string;
};

class NewsSnippet extends Component<NewsSnippetProps> {
  render() {
    const item = this.props.newsItem;

    return (
      <div>
        <h4>{item.title}</h4>
        <p>Source: {item.source.name}</p>
        {item.author && <p>Author: {item.author}</p>}
        {item.publishedAt && <p>Date: {item.publishedAt.slice(0, 10)}</p>}
        {item.description && <p>{item.description}</p>}
        <a href={item.url}>Read</a>
        <hr />
      </div>
    );
  }
}

export default NewsSnippet;
