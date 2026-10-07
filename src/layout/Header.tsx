// props এর জন্য Type ডিফাইন করা হয়েছে (TypeScript Error কাটানোর জন্য)
interface HeaderProps {
  products?: any[];
  FoodProducts?: any[];
}

export default function Header({ products = [], FoodProducts = [] }: HeaderProps) {
  const totalCount = (products?.length || 0) + (FoodProducts?.length || 0);

  return (
    <div className="flex flex-col mx-auto">
      <header className="flex items-center justify-between gap-6 border-b border-gray-300 px-6 py-4">
        <h1 className="text-4xl font-bold bg-linear-to-r from-[#461ea4] via-[#451f69] to-[#d80b72] bg-clip-text text-transparent">
          LOGO
        </h1>
        <ul className="flex items-center gap-8 text-lg font-medium">
          <li>
            <a href="#" className="transition-colors duration-200 hover:text-[#461ea4]">
              Home
            </a>
          </li>

          <li>
            <a href="#Product_List" className="transition-colors duration-200 hover:text-[#461ea4]">
              About
            </a>
          </li>

          <li>
            <a href="#Food_Product_List" className="transition-colors duration-200 hover:text-[#461ea4]">
              Gallery
            </a>
          </li>

          <li className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            <span className="text-[#d80b72]">
              Product Count : {totalCount}
            </span>
          </li>
        </ul>
      </header>
    </div>
  );
}