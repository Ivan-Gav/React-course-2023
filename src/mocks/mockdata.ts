import NewsApiArticle from '../interface/newsapiarticle';
import NewsApiResponse from '../interface/newsapiresponse';

export const mockResponse: NewsApiResponse = {
  status: 'ok',
  totalResults: 79,
  articles: [
    {
      source: {
        id: null,
        name: 'NDTV News',
      },
      author: 'NDTV Sports Desk',
      title:
        'New Zealand vs Sri Lanka Live Score, World Cup 2023: Devon Conway, Rachin Ravindra Steady For New Zealand In Chase Of 172 Against Sri Lanka - NDTV Sports',
      description:
        'NZ vs SL World Cup 2023,  LIVE Updates: Devon Conway and Rachin Ravindra have given a good start to New Zealand in the chase of 172 against Sri Lanka',
      url: 'https://sports.ndtv.com/cricket/new-zealand-vs-sri-lanka-live-cricket-score-icc-cricket-world-cup-2023-nz-vs-sl-latest-updates-4559539',
      urlToImage:
        'https://c.ndtvimg.com/2023-10/48uafj1_devon-conway-afp_625x300_18_October_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675',
      publishedAt: '2023-11-09T12:21:55Z',
      content:
        'NZ vs SL, ODI World Cup 2023, Live Updates: Devon Conway and Rachin Ravindra have given a good start to New Zealand in the chase of 172 against Sri Lanka. Earlier, Trent Boult took three wickets as N… [+350 chars]',
    },
    {
      source: {
        id: null,
        name: 'India Today',
      },
      author: 'Ankita Garg',
      title:
        'Samsung unveils AI features on Galaxy phones that can translate your phone calls - India Today',
      description:
        'Samsung has introduced a new Galaxy AI feature, which promises to offer several AI-based features to Samsung phone users for a better smartphone experience. It confirmed that people will soon see the AI Live Translate Call tool.',
      url: 'https://www.indiatoday.in/technology/news/story/samsung-unveils-galaxy-ai-feature-that-can-translate-your-phone-calls-2460981-2023-11-09',
      urlToImage:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/samsung-galaxy-s22-ultrajpg-011600-16x9.jpg?VersionId=4dTkPfBrdjmudCwopCH4rHvYFAIVpwQm',
      publishedAt: '2023-11-09T12:20:48Z',
      content:
        'Samsung has taken a leap into the future of smartphone technology with the introduction of "Galaxy AI." This new feature, outlined in a recent blog post, promises to offer several AI-based features t… [+2165 chars]',
    },
    {
      source: {
        id: null,
        name: 'Business Insider India',
      },
      author: 'Ashmita Gupta',
      title:
        'Atomic oxygen found sandwiched between layers of sulphurous clouds On Venus - Business Insider India',
      description:
        'When it comes to looking for signs of life and dreaming of building an extraterrestrial human base, Venus has often played second fiddle to Mars. And our neighbour',
      url: 'https://www.businessinsider.in/science/news/atomic-oxygen-found-sandwiched-between-layers-of-sulphurous-clouds-on-venus/articleshow/105097735.cms',
      urlToImage:
        'https://www.businessinsider.in/photo/105097735/atomic-oxygen-found-sandwiched-between-layers-of-sulphurous-clouds-on-venus.jpg',
      publishedAt: '2023-11-09T12:09:00Z',
      content:
        'When it comes to looking for signs of life and dreaming of building an extraterrestrial human base, Venus\r\n has often played second fiddle to Mars. And our neighbour Venus, with its notorious 96.5% c… [+2584 chars]',
    },
    {
      source: {
        id: null,
        name: 'Livemint',
      },
      author: 'Affiliate Desk',
      title:
        'Sale on Flipkart: Offering up to 52% off on top AC brands this festive month | Mint - Mint',
      description:
        "Explore the hottest deals on top AC brands during the sale on Flipkart this festive season. Don't miss out on massive savings as you prepare to beat the heat in the upcoming summer season! Shop now and stay cool while saving big.",
      url: 'https://www.livemint.com/technology/gadgets/sale-on-flipkart-offering-up-to-52-off-on-top-ac-brands-this-festive-month-11699527660596.html',
      urlToImage:
        'https://www.livemint.com/lm-img/img/2023/11/09/1600x900/ac_brands_1699528312670_1699528327718.jpg',
      publishedAt: '2023-11-09T11:59:31Z',
      content:
        "Get ready as Flipkart's Diwali sale 2023 is here, and it's your chance to seize the best offers on ACs from the Top AC brands. The scorching sun won't stand a chance against these incredible AC festi… [+18901 chars]",
    },
    {
      source: {
        id: null,
        name: 'Hindustan Times',
      },
      author: 'HT News Desk',
      title:
        'Appeal filed, India got 2nd consular access to 8 Indians on death row in Qatar - Hindustan Times',
      description:
        'India got the first consular access to the 8 Navy veterans in Qatar last year,  two months after they were arrested.  | Latest News India',
      url: 'https://www.hindustantimes.com/india-news/india-got-consular-access-to-8-indians-on-death-row-in-qatar-on-november-7-mea-101699531070826.html',
      urlToImage:
        'https://www.hindustantimes.com/ht-img/img/2023/11/09/1600x900/External-affairs-ministry-spokesperson-Arindam-Bag_1697726127697_1699531128044.jpg',
      publishedAt: '2023-11-09T11:59:20Z',
      content:
        'India has got a second consular access to the eight Navy veterans who were sentenced to death by a Qatar court on November 7, the ministry of external affairs said. India is in touch with the Qatari … [+2802 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: 'Foo Yun Chee, Bart Meijer',
      title:
        "Apple suffers setback in fight against EU's $14 billion tax order - Reuters",
      description:
        "An EU tribunal made legal errors when it ruled in favour of Apple over a 13-billion-euro ($14 billion) tax order and should review the case again, an adviser to Europe's top court said on Thursday, in a potential setback for the iPhone maker.",
      url: 'https://www.reuters.com/technology/eu-court-adviser-backs-eus-14-bln-tax-order-apple-2023-11-09/',
      urlToImage:
        'https://www.reuters.com/resizer/6zmTo8igISLw6_1LjTPJzqOMN9A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GBZVJFRH2NJRTKZTUSESWFYRAQ.jpg',
      publishedAt: '2023-11-09T11:54:00Z',
      content:
        "LUXEMBOURG, Nov 9 (Reuters) - An EU tribunal made legal errors when it ruled in favour of Apple over a 13-billion-euro ($14 billion) tax order and should review the case again, an adviser to Europe's… [+3948 chars]",
    },
    {
      source: {
        id: 'google-news',
        name: 'Google News',
      },
      author: 'CNN',
      title:
        'Actors’ union reaches tentative deal with Hollywood film and TV studios, ending historic strike - CNN',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMiTGh0dHBzOi8vd3d3LmNubi5jb20vMjAyMy8xMS8wOC9tZWRpYS9zYWctYWZ0cmEtYWN0b3JzLXN0cmlrZS1vdmVyL2luZGV4Lmh0bWzSAVBodHRwczovL2FtcC5jbm4uY29tL2Nubi8yMDIzLzExLzA4L21lZGlhL3NhZy1hZnRyYS1hY3RvcnMtc3RyaWtlLW92ZXIvaW5kZXguaHRtbA?oc=5',
      urlToImage: null,
      publishedAt: '2023-11-09T11:21:00Z',
      content: null,
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'TOI Sports Desk',
      title:
        'Watch: Witty Kane Williamson asks Angelo Mathews about his helmet strap during NZ-SL World Cup match - IndiaTimes',
      description:
        "Cricket News: New Zealand skipper Kane Williamson, who normally appears as a serious fellow, was at his wittiest best on Thursday when he asked Sri Lanka's Angelo M",
      url: 'https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/news/watch-witty-kane-williamson-asks-angelo-mathews-about-his-helmet-strap-during-nz-sl-world-cup-match/articleshow/105096306.cms',
      urlToImage:
        'https://static.toiimg.com/thumb/msid-105096262,width-1070,height-580,imgsize-23382,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      publishedAt: '2023-11-09T11:20:00Z',
      content:
        'World Cup 2023: Angelo Mathews becomes first ever player to be timed out in cricket | Sri Lanka vs Bangladesh',
    },
    {
      source: {
        id: null,
        name: 'Hindustan Times',
      },
      author: 'Reuters',
      title:
        'Israeli troops fight Hamas in north Gaza, hospitals in firing line - Hindustan Times',
      description:
        'The United Nations human rights chief called for a ceasefire and said both sides had committed war crimes in the month of fighting over the enclave. | World News',
      url: 'https://www.hindustantimes.com/world-news/israeli-troops-fight-hamas-in-north-gaza-hospitals-in-firing-line-palestine-101699526617651.html',
      urlToImage:
        'https://www.hindustantimes.com/ht-img/img/2023/11/09/1600x900/ISRAEL-PALESTINIANS-GAZA-3_1699526734520_1699526745605.JPG',
      publishedAt: '2023-11-09T10:55:37Z',
      content:
        'Israeli forces fought Hamas militants through shell-blasted buildings in the north of the Gaza Strip on Thursday and both sides claimed to have inflicted heavy losses on their foes as the battle over… [+5697 chars]',
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'TIMESOFINDIA.COM',
      title:
        "Wipro's email to employees: We may not give salary hikes to 'top performers with higher compensation' - Times of India",
      description:
        'Indian IT company, Wipro, may not provide salary hikes to top performers with higher compensation in its largest business line during the upcoming rou',
      url: 'https://timesofindia.indiatimes.com/gadgets-news/wipros-email-to-employees-we-may-not-give-salary-hikes-to-top-performers-with-higher-compensation/articleshow/105094835.cms',
      urlToImage:
        'https://static.toiimg.com/thumb/msid-105094814,width-1070,height-580,imgsize-17310,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      publishedAt: '2023-11-09T10:38:00Z',
      content: '5G smartphones with 50MP camera or more under Rs 20,000',
    },
  ],
};

export const mockContent4Cards: NewsApiResponse = {
  status: 'ok',
  totalResults: 79,
  articles: [
    {
      source: {
        id: null,
        name: 'NDTV News',
      },
      author: 'NDTV Sports Desk',
      title:
        'New Zealand vs Sri Lanka Live Score, World Cup 2023: Devon Conway, Rachin Ravindra Steady For New Zealand In Chase Of 172 Against Sri Lanka - NDTV Sports',
      description:
        'NZ vs SL World Cup 2023,  LIVE Updates: Devon Conway and Rachin Ravindra have given a good start to New Zealand in the chase of 172 against Sri Lanka',
      url: 'https://sports.ndtv.com/cricket/new-zealand-vs-sri-lanka-live-cricket-score-icc-cricket-world-cup-2023-nz-vs-sl-latest-updates-4559539',
      urlToImage:
        'https://c.ndtvimg.com/2023-10/48uafj1_devon-conway-afp_625x300_18_October_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675',
      publishedAt: '2023-11-09T12:21:55Z',
      content:
        'NZ vs SL, ODI World Cup 2023, Live Updates: Devon Conway and Rachin Ravindra have given a good start to New Zealand in the chase of 172 against Sri Lanka. Earlier, Trent Boult took three wickets as N… [+350 chars]',
    },
    {
      source: {
        id: null,
        name: 'India Today',
      },
      author: 'Ankita Garg',
      title:
        'Samsung unveils AI features on Galaxy phones that can translate your phone calls - India Today',
      description:
        'Samsung has introduced a new Galaxy AI feature, which promises to offer several AI-based features to Samsung phone users for a better smartphone experience. It confirmed that people will soon see the AI Live Translate Call tool.',
      url: 'https://www.indiatoday.in/technology/news/story/samsung-unveils-galaxy-ai-feature-that-can-translate-your-phone-calls-2460981-2023-11-09',
      urlToImage:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/samsung-galaxy-s22-ultrajpg-011600-16x9.jpg?VersionId=4dTkPfBrdjmudCwopCH4rHvYFAIVpwQm',
      publishedAt: '2023-11-09T12:20:48Z',
      content:
        'Samsung has taken a leap into the future of smartphone technology with the introduction of "Galaxy AI." This new feature, outlined in a recent blog post, promises to offer several AI-based features t… [+2165 chars]',
    },
    {
      source: {
        id: null,
        name: 'Business Insider India',
      },
      author: 'Ashmita Gupta',
      title:
        'Atomic oxygen found sandwiched between layers of sulphurous clouds On Venus - Business Insider India',
      description:
        'When it comes to looking for signs of life and dreaming of building an extraterrestrial human base, Venus has often played second fiddle to Mars. And our neighbour',
      url: 'https://www.businessinsider.in/science/news/atomic-oxygen-found-sandwiched-between-layers-of-sulphurous-clouds-on-venus/articleshow/105097735.cms',
      urlToImage:
        'https://www.businessinsider.in/photo/105097735/atomic-oxygen-found-sandwiched-between-layers-of-sulphurous-clouds-on-venus.jpg',
      publishedAt: '2023-11-09T12:09:00Z',
      content:
        'When it comes to looking for signs of life and dreaming of building an extraterrestrial human base, Venus\r\n has often played second fiddle to Mars. And our neighbour Venus, with its notorious 96.5% c… [+2584 chars]',
    },
    {
      source: {
        id: null,
        name: 'Livemint',
      },
      author: 'Affiliate Desk',
      title:
        'Sale on Flipkart: Offering up to 52% off on top AC brands this festive month | Mint - Mint',
      description:
        "Explore the hottest deals on top AC brands during the sale on Flipkart this festive season. Don't miss out on massive savings as you prepare to beat the heat in the upcoming summer season! Shop now and stay cool while saving big.",
      url: 'https://www.livemint.com/technology/gadgets/sale-on-flipkart-offering-up-to-52-off-on-top-ac-brands-this-festive-month-11699527660596.html',
      urlToImage:
        'https://www.livemint.com/lm-img/img/2023/11/09/1600x900/ac_brands_1699528312670_1699528327718.jpg',
      publishedAt: '2023-11-09T11:59:31Z',
      content:
        "Get ready as Flipkart's Diwali sale 2023 is here, and it's your chance to seize the best offers on ACs from the Top AC brands. The scorching sun won't stand a chance against these incredible AC festi… [+18901 chars]",
    },
  ],
};

export const mockContent10Cards: NewsApiResponse = {
  status: 'ok',
  totalResults: 79,
  articles: [
    {
      source: {
        id: null,
        name: 'NDTV News',
      },
      author: 'NDTV Sports Desk',
      title:
        'New Zealand vs Sri Lanka Live Score, World Cup 2023: Devon Conway, Rachin Ravindra Steady For New Zealand In Chase Of 172 Against Sri Lanka - NDTV Sports',
      description:
        'NZ vs SL World Cup 2023,  LIVE Updates: Devon Conway and Rachin Ravindra have given a good start to New Zealand in the chase of 172 against Sri Lanka',
      url: 'https://sports.ndtv.com/cricket/new-zealand-vs-sri-lanka-live-cricket-score-icc-cricket-world-cup-2023-nz-vs-sl-latest-updates-4559539',
      urlToImage:
        'https://c.ndtvimg.com/2023-10/48uafj1_devon-conway-afp_625x300_18_October_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675',
      publishedAt: '2023-11-09T12:21:55Z',
      content:
        'NZ vs SL, ODI World Cup 2023, Live Updates: Devon Conway and Rachin Ravindra have given a good start to New Zealand in the chase of 172 against Sri Lanka. Earlier, Trent Boult took three wickets as N… [+350 chars]',
    },
    {
      source: {
        id: null,
        name: 'India Today',
      },
      author: 'Ankita Garg',
      title:
        'Samsung unveils AI features on Galaxy phones that can translate your phone calls - India Today',
      description:
        'Samsung has introduced a new Galaxy AI feature, which promises to offer several AI-based features to Samsung phone users for a better smartphone experience. It confirmed that people will soon see the AI Live Translate Call tool.',
      url: 'https://www.indiatoday.in/technology/news/story/samsung-unveils-galaxy-ai-feature-that-can-translate-your-phone-calls-2460981-2023-11-09',
      urlToImage:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/samsung-galaxy-s22-ultrajpg-011600-16x9.jpg?VersionId=4dTkPfBrdjmudCwopCH4rHvYFAIVpwQm',
      publishedAt: '2023-11-09T12:20:48Z',
      content:
        'Samsung has taken a leap into the future of smartphone technology with the introduction of "Galaxy AI." This new feature, outlined in a recent blog post, promises to offer several AI-based features t… [+2165 chars]',
    },
    {
      source: {
        id: null,
        name: 'Business Insider India',
      },
      author: 'Ashmita Gupta',
      title:
        'Atomic oxygen found sandwiched between layers of sulphurous clouds On Venus - Business Insider India',
      description:
        'When it comes to looking for signs of life and dreaming of building an extraterrestrial human base, Venus has often played second fiddle to Mars. And our neighbour',
      url: 'https://www.businessinsider.in/science/news/atomic-oxygen-found-sandwiched-between-layers-of-sulphurous-clouds-on-venus/articleshow/105097735.cms',
      urlToImage:
        'https://www.businessinsider.in/photo/105097735/atomic-oxygen-found-sandwiched-between-layers-of-sulphurous-clouds-on-venus.jpg',
      publishedAt: '2023-11-09T12:09:00Z',
      content:
        'When it comes to looking for signs of life and dreaming of building an extraterrestrial human base, Venus\r\n has often played second fiddle to Mars. And our neighbour Venus, with its notorious 96.5% c… [+2584 chars]',
    },
    {
      source: {
        id: null,
        name: 'Livemint',
      },
      author: 'Affiliate Desk',
      title:
        'Sale on Flipkart: Offering up to 52% off on top AC brands this festive month | Mint - Mint',
      description:
        "Explore the hottest deals on top AC brands during the sale on Flipkart this festive season. Don't miss out on massive savings as you prepare to beat the heat in the upcoming summer season! Shop now and stay cool while saving big.",
      url: 'https://www.livemint.com/technology/gadgets/sale-on-flipkart-offering-up-to-52-off-on-top-ac-brands-this-festive-month-11699527660596.html',
      urlToImage:
        'https://www.livemint.com/lm-img/img/2023/11/09/1600x900/ac_brands_1699528312670_1699528327718.jpg',
      publishedAt: '2023-11-09T11:59:31Z',
      content:
        "Get ready as Flipkart's Diwali sale 2023 is here, and it's your chance to seize the best offers on ACs from the Top AC brands. The scorching sun won't stand a chance against these incredible AC festi… [+18901 chars]",
    },
    {
      source: {
        id: null,
        name: 'Hindustan Times',
      },
      author: 'HT News Desk',
      title:
        'Appeal filed, India got 2nd consular access to 8 Indians on death row in Qatar - Hindustan Times',
      description:
        'India got the first consular access to the 8 Navy veterans in Qatar last year,  two months after they were arrested.  | Latest News India',
      url: 'https://www.hindustantimes.com/india-news/india-got-consular-access-to-8-indians-on-death-row-in-qatar-on-november-7-mea-101699531070826.html',
      urlToImage:
        'https://www.hindustantimes.com/ht-img/img/2023/11/09/1600x900/External-affairs-ministry-spokesperson-Arindam-Bag_1697726127697_1699531128044.jpg',
      publishedAt: '2023-11-09T11:59:20Z',
      content:
        'India has got a second consular access to the eight Navy veterans who were sentenced to death by a Qatar court on November 7, the ministry of external affairs said. India is in touch with the Qatari … [+2802 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: 'Foo Yun Chee, Bart Meijer',
      title:
        "Apple suffers setback in fight against EU's $14 billion tax order - Reuters",
      description:
        "An EU tribunal made legal errors when it ruled in favour of Apple over a 13-billion-euro ($14 billion) tax order and should review the case again, an adviser to Europe's top court said on Thursday, in a potential setback for the iPhone maker.",
      url: 'https://www.reuters.com/technology/eu-court-adviser-backs-eus-14-bln-tax-order-apple-2023-11-09/',
      urlToImage:
        'https://www.reuters.com/resizer/6zmTo8igISLw6_1LjTPJzqOMN9A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GBZVJFRH2NJRTKZTUSESWFYRAQ.jpg',
      publishedAt: '2023-11-09T11:54:00Z',
      content:
        "LUXEMBOURG, Nov 9 (Reuters) - An EU tribunal made legal errors when it ruled in favour of Apple over a 13-billion-euro ($14 billion) tax order and should review the case again, an adviser to Europe's… [+3948 chars]",
    },
    {
      source: {
        id: 'google-news',
        name: 'Google News',
      },
      author: 'CNN',
      title:
        'Actors’ union reaches tentative deal with Hollywood film and TV studios, ending historic strike - CNN',
      description: null,
      url: 'https://news.google.com/rss/articles/CBMiTGh0dHBzOi8vd3d3LmNubi5jb20vMjAyMy8xMS8wOC9tZWRpYS9zYWctYWZ0cmEtYWN0b3JzLXN0cmlrZS1vdmVyL2luZGV4Lmh0bWzSAVBodHRwczovL2FtcC5jbm4uY29tL2Nubi8yMDIzLzExLzA4L21lZGlhL3NhZy1hZnRyYS1hY3RvcnMtc3RyaWtlLW92ZXIvaW5kZXguaHRtbA?oc=5',
      urlToImage: null,
      publishedAt: '2023-11-09T11:21:00Z',
      content: null,
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'TOI Sports Desk',
      title:
        'Watch: Witty Kane Williamson asks Angelo Mathews about his helmet strap during NZ-SL World Cup match - IndiaTimes',
      description:
        "Cricket News: New Zealand skipper Kane Williamson, who normally appears as a serious fellow, was at his wittiest best on Thursday when he asked Sri Lanka's Angelo M",
      url: 'https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/news/watch-witty-kane-williamson-asks-angelo-mathews-about-his-helmet-strap-during-nz-sl-world-cup-match/articleshow/105096306.cms',
      urlToImage:
        'https://static.toiimg.com/thumb/msid-105096262,width-1070,height-580,imgsize-23382,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      publishedAt: '2023-11-09T11:20:00Z',
      content:
        'World Cup 2023: Angelo Mathews becomes first ever player to be timed out in cricket | Sri Lanka vs Bangladesh',
    },
    {
      source: {
        id: null,
        name: 'Hindustan Times',
      },
      author: 'Reuters',
      title:
        'Israeli troops fight Hamas in north Gaza, hospitals in firing line - Hindustan Times',
      description:
        'The United Nations human rights chief called for a ceasefire and said both sides had committed war crimes in the month of fighting over the enclave. | World News',
      url: 'https://www.hindustantimes.com/world-news/israeli-troops-fight-hamas-in-north-gaza-hospitals-in-firing-line-palestine-101699526617651.html',
      urlToImage:
        'https://www.hindustantimes.com/ht-img/img/2023/11/09/1600x900/ISRAEL-PALESTINIANS-GAZA-3_1699526734520_1699526745605.JPG',
      publishedAt: '2023-11-09T10:55:37Z',
      content:
        'Israeli forces fought Hamas militants through shell-blasted buildings in the north of the Gaza Strip on Thursday and both sides claimed to have inflicted heavy losses on their foes as the battle over… [+5697 chars]',
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'TIMESOFINDIA.COM',
      title:
        "Wipro's email to employees: We may not give salary hikes to 'top performers with higher compensation' - Times of India",
      description:
        'Indian IT company, Wipro, may not provide salary hikes to top performers with higher compensation in its largest business line during the upcoming rou',
      url: 'https://timesofindia.indiatimes.com/gadgets-news/wipros-email-to-employees-we-may-not-give-salary-hikes-to-top-performers-with-higher-compensation/articleshow/105094835.cms',
      urlToImage:
        'https://static.toiimg.com/thumb/msid-105094814,width-1070,height-580,imgsize-17310,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      publishedAt: '2023-11-09T10:38:00Z',
      content: '5G smartphones with 50MP camera or more under Rs 20,000',
    },
  ],
};

export const mockContent1Card: NewsApiResponse = {
  status: 'ok',
  totalResults: 79,
  articles: [
    {
      source: {
        id: 'mock content 1 card',
        name: 'mockContent1Card',
      },
      author: 'Ivan',
      title: 'Testing detailed card component',
      description:
        'Mock server response has been successfully recieved in order to check the Detailed Card (NewsDetails) component',
      url: 'https://test.com',
      urlToImage:
        'https://c.ndtvimg.com/2023-10/48uafj1_devon-conway-afp_625x300_18_October_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675',
      publishedAt: '2023-11-12T12:21:55Z',
      content:
        'Mock server response has been successfully recieved in order to check the Detailed Card (NewsDetails) component',
    },
  ],
};

export const mockContentNoCards: NewsApiResponse = {
  status: 'ok',
  totalResults: 79,
  articles: [],
};

export const mockArticle: NewsApiArticle = {
  source: {
    id: 'reuters',
    name: 'Reuters',
  },
  author: 'test author',
  title: 'Test title',
  description: 'test description',
  url: 'https://www.test.com/',
  urlToImage: 'https://www.test.com/testimg.jpg',
  publishedAt: '2023-11-09T11:54:00Z',
  content: 'test content',
};
