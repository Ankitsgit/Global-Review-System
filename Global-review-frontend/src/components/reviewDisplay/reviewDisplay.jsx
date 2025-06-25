
import './reviewDisplay.css';
import React, { useContext } from 'react';
import ReviewItems from '../reviewItems/reviewItems';
import { StoreContext } from '../../context/StoreContext';

const ReviewDisplay = ({ selectedCategory, sortByRating }) => {
  const { reviewlist } = useContext(StoreContext);

  // Filter reviews based on selected category
  let filteredReviews = selectedCategory === "All"
    ? reviewlist 
    : reviewlist.filter(item => item.productCategory === selectedCategory);

  // Sorting ka implementation filtered reviews pe
  if (sortByRating) {
    filteredReviews = [...filteredReviews].sort((a, b) => 
      sortByRating === "asc" ? a.rating - b.rating : b.rating - a.rating
    );
  }

  return (
    <>
    <div className='food-display' id='food-display'>
      <h2>Know Your Product Reviews</h2>
      <div className="food-display-list">
        {filteredReviews && filteredReviews.length > 0 ? (
          filteredReviews.map((item, index) => (
            item.status === "Approved" && (
              <ReviewItems 
                key={index} 
                id={item._id} 
                productName={item.productName}
                productCategory={item.productCategory}
                rating={item.rating}
                reviewTitle={item.reviewTitle}
                review={item.review}
                userName={item.userName}
                image={item.image}
                date={item.date} 
              />
            )
          ))
        ) : (
          <p>No reviews available for this category.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default ReviewDisplay;





