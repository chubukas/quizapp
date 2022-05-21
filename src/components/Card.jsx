const Card = ({ question, selected }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{question}</p>
        </div>
        <div className="px-6 pt-4 pb-2 text-white flex justify-around">
          <span
            onClick={() => selected("True")}
            className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer"
          >
            True
          </span>
          <span
            onClick={() => selected("False")}
            className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer"
          >
            False
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
