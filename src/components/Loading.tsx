const Loading = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen duration-5000">
        <div className="flex md:ml-5 items-center animate-bounce">
          <img src="/src/assets/logo.jpeg" className="h-32 mr-2" alt="" />
        </div>
        <p className="text-3xl text-orange-500 font-mono">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
