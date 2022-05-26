import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const MyReview = () => {
  const [user] = useAuthState(auth);
  const [star, setStar] = useState([]);
  const ratingChanged = (newRating) => {
    setStar(newRating);
  };
  const email = user.email;
  const name = user.displayName;
  const img = user.photoURL;
  const handleReview = (event) => {
    event.preventDefault();
    const reviewContent = event.target.review.value;
    const review = {
      name,
      img,
      email,
      star,
      reviewContent,
    };
    fetch("https://intense-beyond-53965.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Your review has taken successfully");
          event.target.reset();
        }
      });
  };
  return (
    <div className="flex justify-center py-14">
      <div className="">
        <h3 className="text-center text-2xl">Enter Your Honest Review</h3>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={34}
          activeColor="#ffd700"
        />
        <form onSubmit={handleReview} className="">
          <textarea
            required
            name="review"
            style={{ width: "300px" }}
            className="textarea border-gray-400 "
            placeholder="Give Us Review"
          ></textarea>
          <br />
          <input className="btn btn-sm mt-2" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default MyReview;
