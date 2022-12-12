import React from "react";
import { useEffect } from "react";

const Pagination = (props) => {
  const { roomSpecifications } = props;

  const onPageSelect = () => {
    console.log();
    props.setSelectedPage();
  };

  const paginate = (roomSpecifications, size) => {
    return roomSpecifications.reduce((acc, val, i) => {
      let idx = Math.floor(i / size);
      let page = acc[idx] || (acc[idx] = []);
      page.push(val);
      return acc;
    }, []);
  };

  let page_size = 6;
  let pages = paginate(roomSpecifications, page_size);
  useEffect(() => {
    props.setPageContent(pages);
  }, []);

  // console.log("all", pages); // all pages
  // console.log("2", pages[1]); // second page
  return (
    <div className="pagination">
      {pages.length &&
        pages.map((item, index) => {
          return (
            <div key={index}>
              <button
                className="pagination_btn"
                onClick={() => {
                  onPageSelect();
                }}
              >
                {index + 1}
              </button>
            </div>
          );
        })}

      {/* <button className="pagination_btn">2</button>
      <button className="pagination_btn">NEXT {"->"}</button> */}
    </div>
  );
};

export default Pagination;
