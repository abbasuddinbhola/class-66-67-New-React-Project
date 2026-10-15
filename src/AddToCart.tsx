
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react"


// const initialTodos = [
//     {
//         id: 1,
//         title: "hello one"
//      },
//     {
//         id: 2,
//         title: "hello two"
//      },
//     {
//         id: 3,
//         title: "hello three"
//      },
    
// ]


type Todo = {
    id: string | number;
    title: string
}
type TodoList = Todo[];


export default function AddToCart() {

    const [text, setText] = useState("");
    const [todos, setTodos] = useState<TodoList>([]);
    const [isSubmitted, setIsSubmitted] = useState(false); 


    const handleClearAll = () => {
    if (todos.length === 0) return;

    const isconfirm = confirm("Are you sure you want to clear all todos?");
    if (!isconfirm) return;

    setTodos([]);

    toast.warn("All todos cleared!", {
        position: "top-right",
        autoClose: 2000,
    });
};
    
   
    // const handleClick = () => {

    //     if (text.trim() === "") return;


    //     const newObj = {
    //         id: crypto.randomUUID(),
    //         title: text
    //     }
    //     setTodos([
    //         ...todos,
    //         newObj
    //     ]);

    //     setText("");
        
    // }
    
    const handleClick = () => {

        setIsSubmitted(true); 
        
        if (text.trim() === "") {
            toast.error("Please write something in input box!", {
                position: "top-right",
                autoClose: 2000,
            });
            return;
        }
    // if (text.trim() === "") return;

    const newObj = {
        id: crypto.randomUUID(),
        title: text
    }
    setTodos([
        ...todos,
        newObj
    ]);

        setText("");
        toast.success("Todo added successfully!", {
            position: "top-right",
            autoClose: 2000,
        });
    setIsSubmitted(false);
}

    const handleDelete = (id: string | number) => {
        
        const isconfirm = confirm("Are you sure you want to remove it?");
        if (!isconfirm) return;

        const updateTodosAfterDelete = todos.filter((item) => {
            return item.id != id;
        })

        setTodos(updateTodosAfterDelete)

        toast.info("Todo deleted successfully!", {
            position: "top-right",
            autoClose: 2000,
        });
    }


    return (
        <>
         <h1 className="text-2xl mt-5 font-bold bg-linear-to-r from-[#461ea4] via-[#451f69] to-[#d80b72] bg-clip-text text-transparent">New Todo App</h1>
        <div className="border border-gray-200 rounded-lg shadow w-100 p-3 bg-gray-200 my-12.5 mx-auto mt-10">
            <ToastContainer />
            <div className="flex">
                <input value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(e) => e.key === "Enter" && handleClick()} type="text" className="border rounded-l-lg py-1 border-gray-400 w-full" />
                <button onClick={handleClick} type="button" className="bg-green-500 cursor-pointer rounded-r-lg text-white px-4 text-2xl"> + </button>
            </div>
            <div className="min-h-4">
                  {isSubmitted && text.trim() === "" && (
                <p className="text-xs text-red-500 text-start">Please write something in input box...</p>
            )}
            
          </div>
          {/* <div className="flex">
              
              <input value={text} onChange={(event) => setText(event.target.value)} type="text" className="border text-purple-500 rounded-l-lg py-1 border-gray-400 w-full" />
              <button onClick={handleClick} type="button" className="bg-green-500 cursor-pointer rounded-r-lg text-white p-1">Add</button>
          </div>
          <p className="text-xs text-red-500 text-start hidden">Please write somthing in inputbox...</p> */}

          <div className="mt-3 ">
              <div className="flex justify-between items-center bg-linear-to-r from-[#461ea4] via-[#451f69] to-[#d80b72] py-1.5 rounded-lg px-2">
                  <h4 className="font-semibold text-xl text-white">Our Todo List</h4>
                  <span className="text-white">Count: {todos.length}</span>
              </div>

              <ul className="flex flex-col justify-start items-start max-h-60 overflow-y-auto pr-1 my-2">
                  {todos.map((item, index) => (
                      
                  <li key={item.id} className="py-1 flex justify-between w-full bg-green-300 rounded-lg px-2 my-2">
                          <span>{index + 1}. {item.title}</span>
                      <button onClick={() => handleDelete(item.id)} className="border p-1.5 bg-red-500 rounded-sm text-xs cursor-pointer">Delete</button>
                  </li>
                      
                  ))}
              </ul>

              <div className="flex">
                    <button onClick={handleClearAll} className="border bg-linear-to-r from-[#461ea4] via-[#d80b72] to-[#451f69]
                      text rounded-lg w-full py-1 text-white cursor-pointer font-semibold">Clear All</button>
              </div>
          </div>
        
            </div>
            </>
  )
}
