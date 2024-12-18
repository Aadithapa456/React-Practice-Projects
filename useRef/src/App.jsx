import { useRef } from "react";

const imageLink = [
  "https://placecats.com/neo/300/200",
  "https://placecats.com/millie/200/200",
  "https://placecats.com/bella/199/200",
];
export default function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav className="flex space-x-4 p-4 bg-gray-100">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => scrollToIndex(0)}
        >
          Neo
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => scrollToIndex(1)}
        >
          Millie
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => scrollToIndex(2)}
        >
          Bella
        </button>
      </nav>
      <div className="h-96 overflow-y-scroll border border-gray-300 p-4 mt-4 bg-cover">
        <ul ref={listRef} className="space-y-3">
          {imageLink.map((src, index) => (
            <li key={index}>
              <img src={src} alt="Neo" className="h-1/2 w-1/2" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
