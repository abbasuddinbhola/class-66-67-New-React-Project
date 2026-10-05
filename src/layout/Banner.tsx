

// export default function Banner() {
//   return (
//     <div className="container">
//           <img className="" src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp" />
//     </div>
//   )
// }

export default function Banner() {
  return (
    <section className="mx-auto w-full">
      <div
        className="relative overflow-hidden min-h-[450px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[450px] items-center justify-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-xl text-white">
            <div className="flex items-center justify-center">
            <span className="mb-4 inline-block text-center rounded-full bg-purple-500 px-4 py-2 text-sm font-semibold">
              🍕 Fresh & Delicious
            </span>
           </div>

            <h1 className="text-4xl font-bold leading-tight text-center sm:text-5xl lg:text-6xl">
              Taste the Best Food
              <span className="block text-purple-400">
                Delivered to You
              </span>
            </h1>

            <p className="mt-5 max-w-[550px] text-center text-base leading-7 text-gray-200 sm:text-lg">
              Enjoy delicious, fresh and tasty meals prepared with love.
              Order your favorite food and enjoy it at your doorstep.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 items-center justify-center">
              <button className="rounded-full bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-700">
                Order Now
              </button>

              <button className="rounded-full border border-white/60 px-6 py-3 font-semibold transition hover:bg-white hover:text-black">
                Explore Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}