// interface InputProps {
//   label?: string;
//   id?: string;
//   type?: React.HTMLInputTypeAttribute;
//   name?: string;
//   value?: string | number;
//   placeholder?: string;
//   required?: boolean;
//   disabled?: boolean;

//   // Custom controls
//   className?: string;

//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const Input = (Props: InputProps) => {
//   return (
//     <input
//       id={Props.id}
//       type={Props.type || "text"}
//       name={Props.name}
//       value={Props.value}
//       placeholder={Props.placeholder || "Enter your text"}
//       required={Props.required}
//       disabled={Props.disabled}
//       onChange={Props.onChange}
//       className={`${Props.className || "w-full"} rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100`}
//     />
//   );
// };

// export default Input;