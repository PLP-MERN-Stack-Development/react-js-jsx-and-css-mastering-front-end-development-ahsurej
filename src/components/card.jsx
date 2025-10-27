const Card = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
      {children}
    </div>
  );
};

export default Card;
