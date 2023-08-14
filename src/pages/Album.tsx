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
              The secret to a gorgeous setup? A cable that accentuates and
              complements your keyboard.
              <br />
              <br />I don't have an official album yet, but you can check out my
              <a className=" font-bold" href="https://www.instagram.com/lisaworks.studio/">
                {" "}
                Instagram
              </a>{" "}
              in the meantime.
            </p>
          </div>

         
        </main>
      </div>
    </>
  );
};

export default Album;
