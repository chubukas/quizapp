const AnsweredList = ({ questions, answer, correctAns }) => {
  return (
    <li>
      <div>{questions}</div>
      <div className="text-white">
        {answer === correctAns ? (
          <div>
            <span className="bg-green-500 rounded-full px-6 py-1 font-semibold text-lg">
              {answer}
            </span>
            <span className="text-black font-bold mx-6">(Correct) </span>
          </div>
        ) : (
          <>
            <span className="bg-red-500 rounded-full px-6 py-1 font-semibold text-lg">
              {answer}
            </span>

            <span className="text-black font-bold mx-6">(Wrong)</span>
          </>
        )}
      </div>
    </li>
  );
};

export default AnsweredList;
