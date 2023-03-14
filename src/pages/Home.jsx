function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border-2 border-sky-500 flex rounded-lg">
        <div className="w-2/5">
          <img
            src="https://i.pinimg.com/736x/91/57/2a/91572a0b086bf7e811f78c0a15536633.jpg"
            alt="image"
            className="rounded-l-md h-auto bg-left object-cover bg-no-repeat"
          />
        </div>
        <div className="w-3/5 bg-slate-100 rounded-r-md flex flex-col justify-center">
          <h2 className="text-center font-bold text-3xl text-slate-800 mt-4">
            Sign Up
          </h2>
          <form className="px-10 my-4">
            <label
              htmlFor="UserName"
              className="text-slate-800 font-medium text-lg after:content-['*'] after:ml-0.5"
            >
              User Name
            </label>
            <input
              type="text"
              id="UserName"
              className="block px-3 py-2  mb-10 bg-transparent border-b-4  border-slate-800 placeholder-slate-800 placeholder:opacity-50 focus:outline-none focus:border-b-blue-500 w-full text-slate-800"
              placeholder="Enter your User name..."
            />
            <label
              htmlFor="UserName"
              className="text-slate-800 font-medium text-lg after:content-['*'] after:ml-0.5"
            >
              User Name
            </label>
            <input
              type="text"
              id="UserName"
              className="block px-3 py-2 mb-10 bg-transparent border-b-4  border-slate-800 placeholder-slate-800 placeholder:opacity-50 focus:outline-none focus:border-b-blue-500 w-full text-slate-800"
              placeholder="Enter your User name..."
            />
            <label
              htmlFor="UserName"
              className="text-slate-800 font-medium text-lg after:content-['*'] after:ml-0.5"
            >
              User Name
            </label>
            <input
              type="text"
              id="UserName"
              className="block px-3 py-2 mb-10 bg-transparent border-b-4  border-slate-800 placeholder-slate-800 placeholder:opacity-50 focus:outline-none focus:border-b-blue-500 w-full text-slate-800"
              placeholder="Enter your User name..."
            />
            <label
              htmlFor="UserName"
              className="text-slate-800 font-medium text-lg after:content-['*'] after:ml-0.5"
            >
              User Name
            </label>
            <input
              type="text"
              id="UserName"
              className="block px-3 py-2 mb-10 bg-transparent border-b-4  border-slate-800 placeholder-slate-800 placeholder:opacity-50 focus:outline-none focus:border-b-blue-500 w-full text-slate-800"
              placeholder="Enter your User name..."
            />
            <label
              htmlFor="UserName"
              className="text-slate-800 font-medium text-lg after:content-['*'] after:ml-0.5"
            >
              User Name
            </label>
            <input
              type="text"
              id="UserName"
              className="block px-3 py-2 mb-10 bg-transparent border-b-4  border-slate-800 placeholder-slate-800 placeholder:opacity-50 focus:outline-none focus:border-b-blue-500 w-full text-slate-800"
              placeholder="Enter your User name..."
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
