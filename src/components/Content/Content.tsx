import { Component } from 'react';
import NewsApiResponse from '../../interface/newsapiresponse';
import NewsApiArticle from '../../interface/newsapiarticle';

// const apiURL = 'https://newsapi.org/v2/everything';
const apiURL = 'https://newsapi.org/v2/top-headlines';
// const apiURL = 'http://127.0.0.1:8075/everything';

const apiKey = 'eef9fc46616347dbbfb3e24da3a43690';

type ContentProps = {
  query?: string;
};

type ContentState = {
  loading: boolean;
  content: null | NewsApiResponse;
};

interface Options {
  pageSize: number;
  page: number;
}

const options: Options = {
  pageSize: 10,
  page: 1,
};

const makeURL = () => {
  if (!apiURL || !apiKey) {
    throw new Error('Invalid request');
  }
  let url = apiURL;
  if (options) {
    url = url + '?';
    for (const key in options) {
      url = url + `${key}=${options[key as keyof Options]}&`;
    }
    url = url.slice(0, -1);
  }
  return `${url}&language=en&apiKey=${apiKey}`;
};

async function apiCall(): Promise<NewsApiResponse> {
  const res = await fetch(makeURL());
  const data = await res.json();
  return data;
}

class Content extends Component<ContentProps> {
  state: ContentState = {
    loading: false,
    content: null,
  };

  renderContent() {
    const data = this.state.content as NewsApiResponse;
    if (data && 'articles' in data && data.articles?.length) {
      return data.articles.map((item: NewsApiArticle) => {
        return (
          <div key={item.title}>
            <h4>{item.title}</h4>
            <p>Source: {item.source.name}</p>
            {item.author && <p>Author: {item.author}</p>}
            {item.description && <p>{item.description}</p>}
            <a href={item.url}>Read</a>
            <hr />
          </div>
        );
      });
    }
    return <div>No data</div>;
  }

  componentDidMount(): void {
    this.setState({
      loading: true,
    });
    apiCall().then((res) => {
      this.setState({
        content: res,
      });
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Content</h2>
        {this.state.loading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <h3>{this.props.query}</h3>
            <div>{makeURL()}</div>
            {this.renderContent()}
          </div>
        )}
      </div>
    );
  }
}

export default Content;
