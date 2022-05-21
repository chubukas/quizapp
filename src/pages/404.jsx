import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="text-center text-black mx-auto">
      <div className="text-9xl">
        <p className="px-40 pb-32">404</p>
      </div>
      <div>
        <Link to="/" className="px-40 text-4xl cursor-pointer">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
