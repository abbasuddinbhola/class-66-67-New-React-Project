// import FoodProducts from "./FoodProduct";
import FoodProduct from "./FoodProduct";
import ProductItem from "./ProductItem";


export default function ProductContainer({products, FoodProducts}) {
  return (
    <div className="mx-auto py-20">
      <h2 className="text-4xl text-center font-bold">Product List</h2>
      <div className="container mx-auto mt-8 p-4 grid grid-cols-4 gap-4">
        {products?.map((item) => (
          <ProductItem key={item.title} item={item} />
        ))}
      </div>
    <div className="py-15">
        <h2 className="text-4xl text-center font-bold">Food Product List</h2>
      <div className="mx-auto container mt-8 p-4 grid grid-cols-4 gap-4">
        {FoodProducts?.map((item) => (
          <FoodProduct key={item.title} item={item} />
        ))}
      </div>
      </div>
    </div>
  );
}
