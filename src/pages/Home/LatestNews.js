import React from "react";

const LatestNews = () => {
  return (
    <div className="py-8">
      <h1 className="text-center text-2xl uppercase py-10">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img className="w-[612px] h-[408px]"
            src="https://media.istockphoto.com/photos/senior-man-on-his-mountain-bike-outdoors-picture-id518659520?k=20&m=518659520&s=612x612&w=0&h=LE3tC8Q8b_eAY6os_vY6jzbAGHmKKAObZHnDMq2zM0U="
            alt=""
          />
          <div className="mx-4">
            <h1 className="text-xl py-2">BRANDON SEMENUK: REALM</h1>
            <p className="text-justify mt-4">
              Watch the latest bicycle sorcery from Brandon. Huge thanks to
              @revel_co @redbullbike and @tobycowley. Take a look behind the
              scenes here.
            </p>
            <a
              className="block py-2 text-center bg-sky-300 px-2 rounded-lg my-3 w-30"
              href="https://chromagbikes.com/blogs/news/brandon-semenuk-realm"
            >
              Read more ...
            </a>
          </div>
        </div>
        <div>
          <img className="w-[612px] h-[408px]"
            src="https://awaken.com/wp-content/uploads/2018/04/cycling-benefits.jpg"
            alt=""
          />
          <div className="mx-4">
            <h1 className="text-xl py-2">A PRE/POST WORK RIDE</h1>
            <p className="text-justify mt-4">
              The other day, Greg (who's buttocks you might recognise from this
              video) suggested we ride to the top of Lord of the Squirrels, have
              an awful night...
            </p>
            <a
              className="block py-2 text-center bg-sky-300 px-2 rounded-lg my-3 w-30"
              href="https://chromagbikes.com/blogs/news/brandon-semenuk-realm"
            >
              Read more ...
            </a>
          </div>
        </div>
        <div>
          <img className="w-[612px] h-[408px]"
            src="https://bikeexperience.net/wp-content/uploads/2015/10/bg-home-1024x692.jpg"
            alt=""
          />
          <div className="mx-4">
            <h1 className="text-xl py-2">THE MINOR THREAT</h1>
            <p className="text-justify mt-4">
              We design stuff that we want to use. That's how every Chromag
              product has come into existence, and as some of us are parents,
              the Minor Threat is n...
            </p>
            <a
              className="block py-2 text-center bg-sky-300 px-2 rounded-lg my-3 w-30"
              href="https://chromagbikes.com/blogs/news/brandon-semenuk-realm"
            >
              Read more ...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
