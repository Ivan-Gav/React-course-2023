import { Component } from 'react';
import NewsApiResponse from '../../interface/newsapiresponse';
import NewsApiArticle from '../../interface/newsapiarticle';
import NewsSnippet from '../NewsSnippet/NewsSnippet';

const apiURL = 'https://newsapi.org/v2/top-headlines';
// const apiURL = 'http://127.0.0.1:8075/everything';

const apiKey = 'eef9fc46616347dbbfb3e24da3a43690';

type ContentProps = {
  query?: string;
};

type ContentState = {
  loading: boolean;
  content: null | NewsApiResponse;
  url: string;
};

type Options = {
  pageSize: number;
  page: number;
};

// -----------------------------------------------------------------------------------------------------

class Content extends Component<ContentProps> {
  state: ContentState = {
    loading: false,
    content: null,
    url: '',
  };

  private makeURL(
    query?: string,
    options: Options = { pageSize: 10, page: 1 }
  ) {
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
    this.setState({ url: url });
    return url;
  }

  private async apiCall(query?: string): Promise<void> {
    this.setState({
      loading: true,
    });
    fetch(this.makeURL(query))
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          content: data,
        });
        this.setState({
          loading: false,
        });
      });
  }

  private renderContent() {
    const data = this.state.content as NewsApiResponse;
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
  }

  componentDidMount(): void {
    this.apiCall(this.props.query);
  }

  componentDidUpdate(prevProps: ContentProps) {
    if (this.props.query !== prevProps.query) {
      this.apiCall(this.props.query);
    }
  }

  render() {
    return (
      <div>
        <h2>Content</h2>
        {this.state.loading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            {this.props.query && <h3>Search for: {this.props.query}</h3>}
            <div>{this.state.url}</div>
            {this.renderContent()}
          </div>
        )}
      </div>
    );
  }
}

export default Content;
