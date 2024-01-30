//This component will be rendered when the app will start and whenever the app's status is set to 'start'
function StartActionBar() {
  return (
    <div className="h-full w-full bg-start bg-cover bg-center rounded-sm shadow-md">
      <div className="lg:text-2xl font-semibold text-blue-900 text-xl text-center py-5 z-10 bg-indigo-100/80 w-full">
        Collect, Inspire, and Share the Wisdom of the World.
      </div>
    </div>
  );
}

export default StartActionBar;
