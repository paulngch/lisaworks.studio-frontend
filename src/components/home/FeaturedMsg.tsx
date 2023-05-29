const FeaturedMsg = () => {
  return (
    <>
      {/* Featured section */}
      <section
        aria-labelledby="social-impact-heading"
        className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              src="./triplecable.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2
                id="social-impact-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                <span className="block sm:inline">Make better connections, </span>
                <span className="block sm:inline">literally</span>
              </h2>
              <p className="mt-3 text-xl text-white">
                Make your setup look unique and appealing. Post a picture to social
                media and watch it get more likes than life-changing
                announcements. Feel happy yet sad at the same time. At
                least you have a really nice setup.
              </p>
              <a
                href="/pages/album"
                className="mt-8 block w-full rounded-md border border-transparent bg-pink-400 px-8 py-3 text-base font-medium text-gray-900 hover:bg-pink-300 sm:w-auto"
              >
                Past Commissions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedMsg;
