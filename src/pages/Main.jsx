import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="text-center text-black w-3/5 mx-auto my-10">
      <div className=" mb-20 text-4xl">
        <p>Welcome to the Question Challenge</p>
      </div>
      <div className="mb-20 text-2xl font-normal">
        <p>You will be Presented with 10 True of False questions</p>
      </div>
      <div className="mb-20 text-2xl font-normal">
        <p>Can you score 100%?</p>
      </div>

      <div className="text-2xl">
        <Link to="/quiz" className=" cursor-pointer">
          BEGIN
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
