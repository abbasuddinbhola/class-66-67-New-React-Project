


export default function Header() {

  
  return (
    <header className="border-b py-5">
       <div className="container mx-auto">
      <div className="flex items-center justify-between">
          <a className="font-bold text-4xl bg-linear-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent"href="#">LOGO</a>

        <ul className="flex gap-3 font-medium text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Cantact</li>
          
        </ul>
      </div>
    </div>
   </header>
  )
}































// type IProps = {
//   test: string;
//   title: string;
// }

// export default function Header({ test, title }: IProps) {

  
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }