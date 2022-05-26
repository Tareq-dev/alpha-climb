import React from "react";
import { DiCodeigniter } from "react-icons/di";
import Footer from "./../Home/Footer";
const Portfolio = () => {
  return (
    <div>
      <div className="px-4 py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center mt-5">
            <div>
              <div className="border-l-8 border-orange-300 px-3">
                <h1 className="font-bold text-5xl w-full">Tarequl Islam</h1>
                <h3 className="font-bold text-2xl w-full mt-4">
                  Front End Developer
                </h3>
              </div>
              <p className="text-lg text-justify my-4">
                Working in a competitive environment with high professional
                standards, personal growth opportunities, opportunities for
                continual learning, and high expectations for excellent results.
              </p>
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
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
          <div className="flex items-center md:border-r-8 md:border-orange-300">
            <div>
              <h2 className="text-3xl font-bold">Education :</h2>
              <div className="py-3">
                <p className="text-2xl">Bachelor of Science in Zoology</p>
                <p className="py-1">Govt. City College, Chittagong</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Professional Training :</h2>
            <div className="py-3">
              <p className="text-2xl">
                Complete Web Development Course
                <span className="text-primary"> Programming Hero, 2022</span>
              </p>
              <p className="py-1">Govt. City College, Chittagong</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Language Proficiency :</h2>
              <ul>
                <li>Bangla – Native .</li>
                <li>English – Familiar .</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="pb-8">
          <h2 className="text-3xl font-bold py-4 mt-4">My Skill :</h2>
          <p>
            <span className="font-bold">Expertise: </span> HTML, HTML5, CSS,
            CSS3, Bootstrap5, Tailwind CSS, JavaScript, ES6, React.JS, API, Rest
            API, React Router, Private Router.
          </p>
          <p>
            <span className="font-bold">Comfortable :</span> Node.js , MongoDB
            ,Firebase, Express.js.
          </p>
          <p>
            <span className="font-bold">Familiar :</span> Python.
          </p>
          <p>
            <span className="font-bold">Design Skill:</span> Figma
          </p>
          <p>
            <span className="font-bold">Tool: </span>Git, VS Code, Chrome Dev
            tools, Heroku ,Netlify, Firebase.
          </p>
        </section>
        <section className="py-8">
          <h2 className="text-3xl font-bold text-center my-4">My Project</h2>
          <div className="flex flex-col md:flex-row bg-base-100 shadow-xl p-2 rounded-xl">
            <img
              className="md:w-48 w-full"
              src="https://i.ibb.co/ykPx303/pedu.png"
              alt="Pedal-prince"
            />
            <div className="p-2">
              <div className="">
                <h3 className="text-xl font-bold">
                  Project Name :<span className="text-info"> Pedal Prince</span>{" "}
                  ||{" "}
                  <p className="text-xl inline-block text-blue-500 font-bold underline mx-4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://pedal-prince.web.app/"
                      alt=""
                    >
                      Live Site
                    </a>
                  </p>
                </h3>
              </div>

              <h3 className="text-xl font-bold">Technology : </h3>
              <p className="">
                React.js , Tailwind CSS , Firebase authentication,
                Firebase,Node.js , MongoDB , Heroku.
              </p>
              <h3 className="text-xl font-bold">Features : </h3>

              <div className="flex">
                <DiCodeigniter className="text-info text-2xl mx-2" />
                <p className="mt-1">
                  A single page web application for Cycle warehouse management.
                </p>
              </div>

              <div className="flex">
                <DiCodeigniter className="text-info text-2xl mx-2" />
                <p className="mt-1">
                  User can add new item for store products. When products are
                  deliver user can handle it easily.
                </p>
              </div>
              <div className="flex">
                <DiCodeigniter className="text-info text-2xl mx-2" />
                <p className="mt-1">
                  User added how amounts of products it also be displayed on my
                  item page.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-base-100 shadow-xl mt-5 p-2 rounded-xl">
            <img
              className="md:w-48 w-full"
              src="https://i.ibb.co/c8q59ZS/heaven.png"
              alt="Movie"
            />
            <div className="p-2">
              <div className="">
                <h3 className="text-xl font-bold">
                  Project Name :<span className="text-info"> Heaven Show</span>{" "}
                  ||{" "}
                  <p className="text-xl inline-block text-blue-500 font-bold underline mx-4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://heaven-show.netlify.app/"
                      alt=""
                    >
                      Live Site
                    </a>
                  </p>
                </h3>
              </div>

              <h3 className="text-xl font-bold">Technology : </h3>
              <p className="">
                React.js , Tailwind CSS ,Node.js , MongoDB , Heroku, Firebase
                authentication, Firebase.
              </p>
              <h3 className="text-xl font-bold">Features : </h3>

              <div className="flex">
                <DiCodeigniter className="text-info text-2xl mx-2" />
                <p className="mt-1">
                  It is an service provider website for tourist.
                </p>
              </div>

              <div className="flex">
                <DiCodeigniter className="text-info text-2xl mx-2" />
                <p className="mt-1">
                  User can get service and checkOut sigle service .
                </p>
              </div>
              <div className="flex">
                <DiCodeigniter className="text-info text-2xl mx-2" />
                <p className="mt-1">
                  Here also implements Real time authentication system
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-base-100 shadow-xl mt-5 p-2 rounded-xl">
            <img
              className="md:w-48 w-full"
              src="https://i.ibb.co/Fg0cKrj/car.png"
              alt="Movie"
            />
            <div className="p-2">
              <div className="">
                <h3 className="text-xl font-bold">
                  Project Name :<span className="text-info"> Car Repair</span>
                  ||
                  <p className="text-xl inline-block text-blue-500 font-bold underline mx-4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://car-repair-1e5a2.web.app/"
                      alt=""
                    >
                      Live Site
                    </a>
                  </p>
                </h3>
              </div>

              <h3 className="text-xl font-bold">Technology : </h3>
              <p className="">
                React.js project with Firebase authentication, Firebase,Node.js
                , MongoDB , Heroku.
              </p>
              <h3 className="text-xl font-bold">Features : </h3>

              <div className="flex">
                <DiCodeigniter className="text-info text-2xl mx-2" />
                <p className="mt-1">
                  Car Repair site provides services for Car service
                </p>
              </div>

              <div className="flex">
                <DiCodeigniter className="text-info text-2xl mx-2" />
                <p className="mt-1">
                  Here visitor need an account to get a service with firebase
                  Authentication system.
                </p>
              </div>
              <div className="flex">
                <DiCodeigniter className="text-info text-2xl mx-2" />
                <p className="mt-1">
                  It is also connect with database and admin can add service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
