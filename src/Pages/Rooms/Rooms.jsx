import React, { useState } from "react";
import Card from "../../components/Card";
import "./Rooms.css";
import PageTitle from "../../components/PageTitle";
import Pagination from "../../components/Pagination";
import { img1, img10, img2, img3, img4, img6, img9 } from "../../Utils/Utils";

const Rooms = () => {
  const [pageContent, setPageContent] = useState([[]]);
  const [selectedPage, setSelectedPage] = useState(1);
  const roomSpecifications = [
    {
      imgSrc: img9,
      category: "Premium Room",
      price: 199,
      capacity: 3,
    },
    {
      imgSrc: img10,
      category: "Deluxe Room",
      price: 299,
      capacity: 2,
    },
    {
      imgSrc: img2,
      category: "Double Room",
      price: 399,
      capacity: 5,
    },
    {
      imgSrc: img6,
      category: "Luxury Room",
      price: 299,
      capacity: 4,
    },
    {
      imgSrc: img3,
      category: "Room With View",
      price: 199,
      capacity: 2,
    },
    {
      imgSrc: img4,
      category: "Small View",
      price: 399,
      capacity: 4,
    },
    {
      imgSrc: img1,
      category: "Premium Room",
      price: 199,
      capacity: 3,
    },
  ];
  return (
    <>
      <PageTitle title={"Our Rooms"} page={"Rooms"} />
      <div className="rooms_page">
        {pageContent[0].map((data, index) => {
          return (
            <Card
              data={data}
              key={index}
              imgSrc={data.imgSrc}
              category={data.category}
              price={data.price}
              capacity={data.capacity}
            />
          );
        })}
      </div>
      <Pagination
        roomSpecifications={roomSpecifications}
        pageContent={pageContent}
        setPageContent={setPageContent}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  );
};

export default Rooms;
