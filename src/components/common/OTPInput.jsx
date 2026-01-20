const OTPInput = ({ length = 6 }) => {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          maxLength="1"
          className="w-10 h-10 border rounded-md text-center text-lg focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
};

export default OTPInput;
