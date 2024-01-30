//Call-to-action button component
function Button({ type, onClick, children }) {
  const clas =
    type === "action" &&
    "bg-blue-800 text-sm text-indigo-50 max-w-fit py-2 px-6 rounded-sm hover:bg-indigo-50 hover:text-blue-900 hover:border hover:border-blue-900 transition-all duration-300 ease-in text-center self-center cursor-pointer shadow-md mt-2 mb-2 lg:py-3 lg:mt-5 lg:text-md";
  return (
    <div className={clas}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;
