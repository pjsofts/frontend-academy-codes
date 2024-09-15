function App() {
  return (
    <div className="relative">
      <img
        className="w-full max-h-96 object-cover"
        src="http://188.166.151.245:3001/_next/image?url=http%3A%2F%2F188.166.151.245%3A1337%2Fuploads%2Fcfc26ed158c05dcc25fb7546966e87f8_9b90f8ba8d.png&w=1920&q=75"
        alt="Dubai"
      />
      <div className="absolute bottom-3 w-full">
        <div className="py-8 w-fit px-4 bg-white/70 mx-16 flex flex-wrap  justify-center gap-2 mt-2">
          <input className="max-w-40  lg:max-w-60 p-2 border border-black" type="text" />
          <input
            className="max-w-40 lg:max-w-60 p-2 border border-black"
            type="text"
            placeholder="Location"
          />
          <input
            className="max-w-40 lg:max-w-60 p-2 border border-black"
            type="text"
          />
          <input
            className="max-w-40 lg:max-w-60  p-2 border border-black"
            type="text"
          />
          <button className=" min-w-40 bg-blue-500 text-white p-2 border border-black" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
