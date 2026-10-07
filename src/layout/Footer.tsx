

export default function Footer() {
  return (
    <div className=" bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="text-3xl font-bold bg-linear-to-r from-[#461ea4] via-[#451f69] to-[#d80b72] bg-clip-text text-transparent">
              LOGO
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Discover quality products, explore new collections,
              and find everything you need in one place.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Shop
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  All Products
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  New Arrivals
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Best Sellers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Featured Products
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Stay Connected
            </h3>

            <p className="mb-4 text-sm text-gray-400">
              Subscribe to get the latest products and updates.
            </p>

            <div className="flex overflow-hidden rounded-lg border border-gray-700">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-500"
              />

              <button className="bg-linear-to-r from-[#461ea4] via-[#451f69] to-[#d80b72] px-5 text-sm font-semibold transition hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>

        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} LOGO. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Facebook
            </a>

            <a href="#" className="transition hover:text-white">
              Instagram
            </a>

            <a href="#" className="transition hover:text-white">
              GitHub
            </a>
          </div>

        </div>

      </div>
  
    </div>
  )
}





     