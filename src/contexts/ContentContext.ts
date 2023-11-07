import { createContext } from 'react';
import NewsApiResponse from '../interface/newsapiresponse';

const ContentContext = createContext<null | NewsApiResponse>(null);

export default ContentContext;
