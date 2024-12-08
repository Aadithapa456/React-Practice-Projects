import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
const contents = [
  {
    id: 0,
    title: "Kathmandu",
    image:
      "https://img.freepik.com/free-vector/kathmandu-nepal-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-web-site_596401-445.jpg?t=st=1732721791~exp=1732725391~hmac=3924e7a6e84700fed92327317256dda856783a54eb150295c1a2af64e6c84359&w=1380",
    description:
      "Kathmandu, the capital city of Nepal, is known for its rich history, vibrant culture, and stunning architecture. It is home to several UNESCO World Heritage Sites, including the famous Swayambhunath Stupa and Durbar Square.",
    readMore:
      "Kathmandu, the capital city of Nepal, is known for its rich history, vibrant culture, and stunning architecture. It is home to several UNESCO World Heritage Sites, including the famous Swayambhunath Stupa and Durbar Square. The city offers a unique blend of ancient traditions and modern urban life, with bustling markets, historic temples, and a lively arts scene.",
  },
  {
    id: 1,
    title: "Pokhara",
    image:
      "https://img.freepik.com/free-photo/landscape-hills-covered-buildings-forests-cloudy-sky-night_181624-12599.jpg?t=st=1732725772~exp=1732729372~hmac=08b3a120234867c1abc11b954c547bd6610f7bedbd0e7d0ad0c28f1e67509fb2&w=1380",
    description:
      "Pokhara, a city on Phewa Lake, is known for its breathtaking natural beauty and adventure activities. It offers stunning views of the Annapurna mountain range and is a gateway to the Himalayas for trekkers.",
    readMore:
      "Pokhara, a city on Phewa Lake, is known for its breathtaking natural beauty and adventure activities. It offers stunning views of the Annapurna mountain range and is a gateway to the Himalayas for trekkers. Visitors can enjoy boating on the lake, paragliding, and exploring nearby caves and waterfalls. The city's laid-back atmosphere and scenic landscapes make it a popular destination for relaxation and adventure.",
  },
  {
    id: 2,
    title: "Lalitpur",
    image:
      "https://cdn.britannica.com/36/154236-050-8127D19C/Durbar-Square-Lalitpur-Nepal.jpg",
    description:
      "Lalitpur, also known as Patan, is renowned for its artistic heritage and well-preserved temples. The Patan Durbar Square is a major attraction, showcasing exquisite Newari architecture and craftsmanship.",
    readMore:
      "Lalitpur, also known as Patan, is renowned for its artistic heritage and well-preserved temples. The Patan Durbar Square is a major attraction, showcasing exquisite Newari architecture and craftsmanship. The city is also known for its vibrant festivals and traditional crafts, making it a cultural hub in the Kathmandu Valley.",
  },
  {
    id: 3,
    title: "Bhaktapur",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1D5-mTvvsni1qQ5noBSf67-Q6QaeWXSchQ&s",
    description:
      "Bhaktapur, an ancient city in the Kathmandu Valley, is famous for its medieval architecture, narrow streets, and vibrant festivals. The Bhaktapur Durbar Square is a UNESCO World Heritage Site, known for its stunning palaces and temples.",
    readMore:
      "Bhaktapur, an ancient city in the Kathmandu Valley, is famous for its medieval architecture, narrow streets, and vibrant festivals. The Bhaktapur Durbar Square is a UNESCO World Heritage Site, known for its stunning palaces and temples. The city's rich cultural heritage and traditional lifestyle make it a fascinating destination for visitors.",
  },
];
function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  const handlePagination = (direction) => {
    if (direction === "prev") {
      setCount((currentIndex) =>
        currentIndex === 0 ? contents.length - 1 : currentIndex - 1,
      );
    } else if (direction === "next") {
      setCount((currentIndex) =>
        currentIndex === contents.length - 1 ? 0 : currentIndex + 1,
      );
    }
  };
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <Card content={contents[count]} />
      <Pagination onClick={handlePagination} />
    </div>
  );
}

export default App;
