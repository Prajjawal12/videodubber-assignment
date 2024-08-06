'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function Hero() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [animateArrow, setAnimateArrow] = useState(false);

  const handleUpvoteClick = () => {
    setAnimateArrow(true);
    setTimeout(() => {
      setAnimateArrow(false);
      setUpvoted(!upvoted);
    }, 500); // Duration of the animation
  };

  return (
    <div className="max-w-[48rem] mx-auto px-4 tilted mt-28">
      <div className="my-5 flex flex-row justify-between">
        <ol className="flex list-none gap-2">
          <li className="flex flex-row items-center gap-2">
            <Link
              href="#"
              className="text-[14px] font-normal text-dark-gray hover:text-blue-700 opacity-70"
            >
              Home
            </Link>
          </li>
          <span className="text-dark-gray">&gt;</span>
          <li className="flex flex-row items-center gap-2">
            <Link
              href="#"
              className="text-[14px] font-normal text-dark-gray hover:text-blue-500 opacity-70"
            >
              Product
            </Link>
          </li>
          <span className="text-dark-gray">&gt;</span>
          <li className="flex flex-row items-center gap-2">
            <span className="text-[14px] font-normal text-dark-gray">
              VideoDubber - Fast Video Translator
            </span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col sm:flex-row">
        <Image
          src="/logo.jpg"
          alt="VideoDubber - Fast Video Translator"
          width={72}
          height={72}
          className="mb-4 sm:mb-0"
        />
        <div className="flex flex-1 flex-row items-start justify-end"></div>
      </div>
      <div className="flex flex-col justify-between gap-6 sm:flex-row">
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] font-bold text-dark-gray styles_title__x5KUY whitespace-nowrap">
            VideoDubber - Fast Video Translator
          </h1>
          <h2 className="text-[24px] font-light text-light-gray text-[rgb(75,88,124)] w-full ">
            Translate videos in your own voice, globalize in a click!
          </h2>
        </div>
        <div className="flex flex-row items-end gap-3 w-full">
          <div className="relative">
            <button
              type="button"
              data-test="get-it-button"
              className="appearance-none outline-none border border-solid border-gray-300 bg-white text-gray-800 rounded-md transition duration-300 ease-in-out flex items-center justify-center h-16 w-24"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <div className="font-semibold text-sm">Visit</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                className="ml-2"
              >
                <path
                  fill="#CCC8C7"
                  d="M5.998 6.244a1 1 0 0 1-.703-.292L1.048 1.705A1.003 1.003 0 0 1 1.05.293.996.996 0 0 1 2.462.29L6 3.83 9.538.29a1.003 1.003 0 0 1 1.412.003.997.997 0 0 1 .002 1.412L6.705 5.952a1 1 0 0 1-.702.29z"
                ></path>
              </svg>
            </button>
            {dropdownVisible && (
              <ul className="absolute left-0 z-10 mt-2 w-48 border border-gray-300 bg-white shadow-lg rounded-md">
                <li className="hover:bg-gray-100">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    <strong>Website</strong> videodubber.ai
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    <strong>Learn More</strong> videodubber.ai
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    <strong>Learn More</strong> videodubber.ai
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    <strong>Learn More</strong> videodubber.ai
                  </Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    <strong>Learn More</strong> videodubber.ai
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <button
            type="button"
            data-test="vote-button"
            className={`flex-grow relative flex items-center justify-center h-16 transition duration-300 ease-in-out rounded-md ${
              upvoted
                ? 'bg-white text-black'
                : 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
            }`}
            onClick={handleUpvoteClick}
          >
            <span
              className={`absolute inset-0 border-2 ${
                upvoted ? 'border-orange-500' : 'border-transparent'
              } rounded-md shadow-lg`}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
              viewBox="0 0 9 8"
              className={`mr-2 z-10 transition-transform duration-500 ${
                animateArrow ? 'animate-arrow' : ''
              }`}
              fill={upvoted ? 'rgb(249,115,22)' : 'white'}
            >
              <path fillRule="evenodd" d="M9 8H0l4.5-8z"></path>
            </svg>
            <div className="font-semibold text-sm uppercase z-10">
              {upvoted ? `Upvoted 92` : 'Upvote 91'}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
