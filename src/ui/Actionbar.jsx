//This component's content will change according to app's status
function Actionbar({ children }) {
  return (
    <div className="w-full h-full shadow-md bg-indigo-300 rounded-sm basis-1/2 overflow-clip relative grow lg:basis-2/3 lg:grow">
      {children}
    </div>
  );
}

export default Actionbar;
