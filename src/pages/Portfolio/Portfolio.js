import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center mt-5">
            <div>
              <div className="border-l-8 border-orange-300 px-3">
                <h1 className="font-bold text-5xl w-full">Tarequl Islam</h1>
                <h3 className="font-bold text-2xl w-full mt-4">
                  Front End Developer
                </h3>
              </div>
              <div className="flex my-5 mt-5">
                <a
                  className="bg-slate-500  text-white py-3 px-5 rounded-3xl shadow-lg"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/tareq-dev/"
                >
                  LinkedIn
                </a>
                <a
                  className="mx-4 bg-slate-500 text-white py-3 px-3 rounded-3xl shadow-lg"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Tareq-dev"
                >
                  Github
                </a>
                <a
                  className="mx-4 bg-slate-500 text-white py-3 px-3 rounded-3xl shadow-lg"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/tareq.servant"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:w-3/4">
            <img
              src="https://developer-tareq.netlify.app/static/media/pp.193cfa35fd7fe3ed41fd.gif"
              alt="pp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
