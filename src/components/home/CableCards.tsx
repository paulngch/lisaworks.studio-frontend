const collections = [
  {
    name: "Stringent Koala-ty Control",
    href: "#",
    imageSrc: "./blueconnectorwhitebg.jpg",
    imageAlt: "Blue push-pull connector",
    description: "It means I have a bucket of unusable parts, trust me.",
  },
  {
    name: "Handmade, always",
    href: "#",
    imageSrc: "./pinksampletwo.png",
    imageAlt: "Pink-white braid sample",
    description:
      "It takes time, and my hands will hurt, but your cable will look great.",
  },
  {
    name: "Attention to Details",
    href: "#",
    imageSrc: "./paracordtwine.jpg",
    imageAlt: "Close up of paracord and inner twines",
    description:
      "In essence, I am stressed out by every braid more than I should.",
  },
];

const CableCards = () => {
  return (
    <>
      {/* Collection section */}
      <section
        aria-labelledby="collection-heading"
        className="mx-auto max-w-xl px-4 pt-20 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8"
      >
        <h2
          id="collection-heading"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          It's Our Collab
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Your opinion matters. Period.
          <br />
          If I take up your commission, my assurance to you starts before the
          cable-making, and goes beyond you receiving it. So expect constant
          communication and updates.
        </p>

        <div className=" mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {collections.map((collection) => (
            <a
              key={collection.name}
              href={collection.href}
              className="group block"
            >
              <div
                aria-hidden="true"
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
              >
                <img
                  src={collection.imageSrc}
                  alt={collection.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {collection.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {collection.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default CableCards;
