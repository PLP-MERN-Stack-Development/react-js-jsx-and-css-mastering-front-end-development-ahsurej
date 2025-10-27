const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-10">
      <div className="max-w-7xl mx-auto py-4 px-4 text-center text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
