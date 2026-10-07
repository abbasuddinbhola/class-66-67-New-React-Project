

export default function Banner() {
  return (
    <div>
   
 
    <section
      className="relative mx-auto overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative flex min-h-[420px] items-center justify-center px-8 py-16 md:px-16">
        <div className="max-w-2xl text-white text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-pink-300">
            Discover Something New
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Find Products
            <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              You’ll Love
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-gray-200 md:text-lg">
            Explore our collection of quality products and discover
            something perfect for you.
          </p>

          <button className="mt-7 rounded-lg bg-gradient-to-r from-[#461ea4] via-[#451f69] to-[#d80b72] px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105">
            Explore Products
          </button>

        </div>
      </div>
    </section>

    </div>
  )
}





































// export default function Banner() {
//   return (
//     <div className="container">
//           <img className="" src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp" />
//     </div>
//   )
// }

