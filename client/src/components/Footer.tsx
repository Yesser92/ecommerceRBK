import React from 'react';
import { FaChevronUp } from 'react-icons/fa';

interface Props {}

const Footer: React.FC<Props> = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full flex justify-center items-end ml-36 mr-12 mt-6 mb-0">
      <footer className="bg-gray-60 ">
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-600 rounded-full p-2 transition-colors duration-200 focus:outline-none"
            onClick={() => {
              scrollToTop();
            }}
          >
            <FaChevronUp className="text-white" />
          </button>
          <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-gray-800 text-xl font-bold mb-4">FOOTER</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla blandit mauris, a ullamcorper mi vehicula nec. Ut non
              nisl non arcu vestibulum hendrerit eget quis velit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
