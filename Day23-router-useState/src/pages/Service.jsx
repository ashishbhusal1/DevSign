import { useState } from "react";

function Service() {
  const Gallery = [
    {
      id: 1,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://picsum.photos/id/240/500",
    },
    {
      id: 2,
      title: "Excepturi facere molestiae libero eum saepe nisi provident!",
      image: "https://picsum.photos/id/241/500",
    },
    {
      id: 3,
      title: "Unde recusandae, inventore consequatur ducimus",
      image: "https://picsum.photos/id/242/500",
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://picsum.photos/id/243/500",
    },
    {
      id: 5,
      title: "Excepturi facere molestiae libero eum saepe nisi provident!",
      image: "https://picsum.photos/id/244/500",
    },
    {
      id: 6,
      title: "Unde recusandae, inventore consequatur ducimus",
      image: "https://picsum.photos/id/239/500",
    },
  ];
  const [currentIndex, setCurrentindex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : Gallery.length - 1;
    setCurrentindex(newIndex);
  };
  const handleNext = () => {
    const newIndex = currentIndex < Gallery.length - 1 ? currentIndex + 1 : 0;
    setCurrentindex(newIndex);
  };

  return (
    <>
      <h1>Service Page</h1>

      <div className="gallery">
        <div className="header">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>

        <div className="image">
          <img src={Gallery[currentIndex].image} />
        </div>

        <p>{Gallery[currentIndex].title}</p>
      </div>
    </>
  );
}

export default Service;
