// import { useEffect, useState } from 'react';
// import NewsApiArticle from '../../interface/newsapiarticle';
// import NewsApiResponse from '../../interface/newsapiresponse';
// import Loader from '../Loader/Loader';

import { useNavigate } from 'react-router-dom';

// type NewsDetailsProps = {
//   title: string;
// };

// // const API_URL = 'https://newsapi.org/v2/top-headlines';
// const API_URL = 'http://127.0.0.1:8075/everything';
// const API_KEY = 'eef9fc46616347dbbfb3e24da3a43690';

function NewsDetails() {
  // const { title } = props;
  // const [loading, setLoading] = useState(false);
  // const [article, setArticle] = useState<null | NewsApiArticle>(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const URL = `${API_URL}?q=${title}`;

  //   const apiCall = async (): Promise<void> => {
  //     setLoading(true);
  //     fetch(URL, {
  //       method: 'GET',
  //       headers: {
  //         'X-Api-Key': API_KEY,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data: NewsApiResponse) => {
  //         if (data.articles && data.articles[0]) setArticle(data.articles[0]);
  //         setLoading(false);
  //       });
  //   };

  //   apiCall();
  // }, [title]);

  // return (
  //   <div>
  //     {loading ? (
  //       <Loader />
  //     ) : article ? (
  //       <>
  //         <h4>{article.title}</h4>
  //         <p>
  //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
  //           corrupti dignissimos beatae sequi id eaque a sapiente iure eligendi
  //           maiores!
  //         </p>
  //         <p>Source: {article.source.name}</p>
  //         {article.author && <p>Author: {article.author}</p>}
  //         {article.publishedAt && (
  //           <p>Date: {article.publishedAt.slice(0, 10)}</p>
  //         )}
  //         {article.description && <p>{article.description}</p>}
  //         <a href={article.url}>Read</a>
  //       </>
  //     ) : (
  //       <h4>Article not found</h4>
  //     )}
  //   </div>
  // );

  return (
    <>
      <h1>HELLO!</h1>
      <button onClick={() => navigate(-1)}> Back </button>
    </>
  );
}

export default NewsDetails;
