import { TiStarFullOutline } from "react-icons/ti";

type IProps = {count: number}

export default function ratting({count} : IProps) {
  return (
      <div className="flex justify-center items-center gap-1 py-2">
          

          {Array.from({ length: count }).map((_item, index) => (
              <TiStarFullOutline key={index} className="text-yellow-400" />
          ))}
     
  
    </div>
  )
}

