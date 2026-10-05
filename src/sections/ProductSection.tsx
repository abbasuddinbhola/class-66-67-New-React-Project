
import {products} from "../../data/products"
import Ratting from "../share/Ratting"

export default function ProductSection() {
  return (
      <div className="py-10">
          <h2 className="text-center text-4xl font-semibold py-7">Chose Your Favorite Food</h2>

          <div className="container mx-auto my-[30px]">
              <div className="grid grid-cols-4 gap-[30px]">
                  {products.map((item) => (
                      <div className="border border-gray-300 rounded-sm shadow" key={item.id}>
                          <img className="w-full" src={item.image} />

                          <div className="p-2">
                          <h4 className="text-center text-lg py-2 font-medium">{item.title}</h4>
                          <p className="text-center">${item.price}</p>
                           <Ratting count={Math.round(Number(item.rating))}/>
                         </div>

                          {/* <p>{Math.round(Number(item.rating))} </p> */}
                      </div>
                  ))}
                      
         
                  
              </div>
          </div>

    </div>
  )
}































// Array.from({ length: 12 })