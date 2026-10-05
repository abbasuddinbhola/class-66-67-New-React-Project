// import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
     <footer className="mt-16 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Logo & Description */}
          <div>
            <a
              href="#"
              className="bg-linear-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-3xl font-bold text-transparent"
            >
              LOGO
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Delicious food, fresh ingredients and fast delivery.
              Enjoy your favorite meals anytime, anywhere.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-600"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-600"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-600"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-600"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-purple-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-purple-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-purple-400">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-purple-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-3 text-sm">
              <li>🍕 Food Delivery</li>
              <li>🍔 Fresh Food</li>
              <li>🚚 Fast Delivery</li>
              <li>🎁 Special Offers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span>📍</span>
                <span>Dhaka, Bangladesh</span>
              </li>

              <li className="flex gap-3">
                <span>📞</span>
                <span>+880 1234-567890</span>
              </li>

              <li className="flex gap-3">
                <span>✉️</span>
                <span>hello@food.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>
            © 2026 <span className="text-purple-400">LOGO</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}



     