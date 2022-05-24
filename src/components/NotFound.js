import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?t=st=1653371332~exp=1653371932~hmac=8a99b0a5e5608d5a2d19c33e3f96cda49bc58ab7b85a1b7d0524160efd02530d&w=740"
            alt="404"
          />
        </div>
      <div className='flex justify-center items-center'>
      <div className='md:py-24 mx-10'>
      <h1 className="text-4xl font-bold">Ooops.</h1>
      <p className="text-xl">Relax, take it easy.</p>
      <p className="text-xl">Keep fresh your mind!</p>
      <p className="text-sm">
        You find out error page 404, this is not your fault, it is just a
        little bit mistakes
      </p>
      <br />
      <button className="btn btn-default uppercase">
        <Link to="/">Back to the Home Page</Link>
      </button>
    </div>
      </div>
      </div>
    </div>
  );
};

export default NotFound;
