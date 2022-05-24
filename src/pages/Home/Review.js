import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <h2 className="text-center text-4xl font-semibold">
        Our Customers Reviews
      </h2>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {reviews.slice(-3).map((review) => (
            <div
              review={review}
              key={review._id}
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
            >
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={review.img}
                />
                <p className="text-justify h-24 text-sm">{review.reviewContent}</p>
                <div className="flex justify-center">
                  <ReactStars
                    size={34}
                    value={review.star}
                    activeColor="#ffd700"
                  />
                </div>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-2"></span>
                <h2 className="text-gray-700 text-md font-medium title-font tracking-wider ">
                  {review.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-6">
          <button className="btn btn-sm">
            <Link to="/dashboard/my-review">Add Review</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
