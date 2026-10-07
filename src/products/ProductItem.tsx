
// interface IProps {
//   item?: any[];
//   text?: any[];
  
// }

export default function ProductItem({ item }) {
  
   const clickHandle = (text) => {
      alert(text)
  }
  
  return (

    <div className="border border-gray-100 p-4 text-center shadow-2xl shadow-blue-800 transition-all
          duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#461ea4]/50 active:scale-95">

      <img src={item.image}/>

      <h4 className="text-lg font-bold font-sans">{item.title}</h4>
      <p className="font-bold text-amber-600">${item.price.toFixed(2)}</p>
      <button onClick={() => clickHandle(item.title)} className="border border-gray-300 rounded-lg bg-linear-to-r from-[#461ea4] via-[#451f69] to-[#d80b72] px-15 py-2 font-semibold text-white shadow-lg transition duration-300 hover:scale-105">Add Product</button>
    </div>
  )
}
