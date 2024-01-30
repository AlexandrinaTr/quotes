//This is a container component for Search bar, Book list and CTA button (Add new book)
function Sidebar({ children }) {
  return (
    <div className="bg-indigo-100 shadow-md rounded-sm w-full min-w-80 flex flex-col grow basis-1/2 lg:basis-1/3 h-full">
      {children}
    </div>
  );
}

export default Sidebar;
