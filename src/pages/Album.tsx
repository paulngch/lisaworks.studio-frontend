// const products = [
//   {
//     id: 1,
//     name: "Organize Basic Set (Walnut)",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
//     imageAlt: "TODO",
//     href: "#",
//   },
//   {
//     id: 2,
//     name: "Organize Pen Holder",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
//     imageAlt: "TODO",
//     href: "#",
//   },
//   {
//     id: 3,
//     name: "Organize Sticky Note Holder",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
//     imageAlt: "TODO",
//     href: "#",
//   },
//   {
//     id: 4,
//     name: "Organize Phone Holder",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
//     imageAlt: "TODO",
//     href: "#",
//   },
//   // More products...
// ];

const Album = () => {
  return (
    <>
      <div className="bg-white">
        {/* Descriptive Header for Album Page */}
        <main className="pb-24">
          <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Album
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
              The secret to a gorgeous setup? Not a better keyboard, just get
              better cables that complements the theme.
              <br />
              <br />I don't have an official ambum yet, but you can check out my
              Instagram in the meantime.
            </p>
          </div>

          {/* Separation Line */}
          {/* <div className="grid items-center border-b border-t border-gray-200"></div> */}

          {/* Product grid
          <section
            aria-labelledby="products-heading"
            className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"
          >
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
                >
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="pb-4 pt-10 text-center">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section> */}

          {/* Pagination */}
          {/* <nav
            aria-label="Pagination"
            className="mx-auto mt-6 flex max-w-7xl justify-between px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
          >
            <div className="min-w-0 flex-1">
              <a
                href="#"
                className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
              >
                Previous
              </a>
            </div>
            <div className="hidden space-x-2 sm:flex"> */}
          {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
          {/* <a
                href="#"
                className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
              >
                1
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
              >
                2
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center rounded-md border border-indigo-600 bg-white px-4 ring-1 ring-indigo-600 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
              >
                3
              </a>
              <span className="inline-flex h-10 items-center px-1.5 text-gray-500">
                ...
              </span>
              <a
                href="#"
                className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
              >
                8
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
              >
                9
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
              >
                10
              </a>
            </div>
            <div className="flex min-w-0 flex-1 justify-end">
              <a
                href="#"
                className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
              >
                Next
              </a>
            </div>
          </nav> */}
        </main>
      </div>
    </>
  );
};

export default Album;
