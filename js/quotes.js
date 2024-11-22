const quotes = [
  {
    quote: "인생은 짧다. 디저트부터 먹어라.",
    author: "미상",
  },
  {
    quote: "다이어트는 내일부터다. 오늘은 치킨이다.",
    author: "치킨철학자",
  },
  {
    quote: "운동은 내가 좋아하는 사람이 하는 걸 보는 게 제일 재밌다.",
    author: "게으른 철학자",
  },
  {
    quote: "돈이 전부가 아니다. 신용카드도 있다.",
    author: "현대인의 지혜",
  },
  {
    quote: "아침형 인간이 되고 싶었는데, 새벽형 인간이 되어버렸다.",
    author: "잠만보",
  },
  {
    quote: "커피는 내 혈액형이다.",
    author: "카페인 중독자",
  },
  {
    quote: "방 청소는 손님이 오기 5분 전에 가장 빠르게 된다.",
    author: "현실주의자",
  },
  {
    quote: "내일 할 일을 오늘로 미루지 말자.",
    author: "프로미루기러",
  },
  {
    quote: "침대는 나의 진정한 소울메이트다.",
    author: "주말의 철학자",
  },
  {
    quote: "피자는 채소다. 토마토 소스가 있으니까.",
    author: "자기합리화의 대가",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
