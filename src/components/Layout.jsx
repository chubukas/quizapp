const Layout = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-center my-6">
        <div className=" bg-gray-300 text-white font-bold rounded-lg border shadow-lg">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
