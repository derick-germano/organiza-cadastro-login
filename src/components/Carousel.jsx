'use client'
import { createContext } from 'react'
const Context = createContext()
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {

  const items = [
    {
      position: 0,
      imageUrl: 'https://static.preparaenem.com/2022/08/tipos-de-graficos.jpg',
    },
    {
      position: 1,
      imageUrl: 'https://uploads.metropoles.com/wp-content/uploads/2023/08/15151434/ia-2-600x400.jpg',
    },
    {
      position: 2,
      imageUrl: 'https://midias.agazeta.com.br/2022/06/14/a-diversificacao-das-opcoes-mostra-que-o-imovel-continua-sendo-um-otimo-investimento-780575-article.jpg',
    },
    {
      position: 3,
      imageUrl: 'https://youprime.com.br/wp-content/uploads/2020/09/business-finance-and-economy-concept-T8339VV-600x400.jpg',
    },
  ];

  const options = {
    defaultPosition: 1,
    interval: 3000,
  };

  const [currentPosition, setCurrentPosition] = useState(options.defaultPosition);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, options.interval);

    return () => {
      clearInterval(interval);
    };
  },);

  const nextSlide = () => {
    setCurrentPosition((prevPosition) => (prevPosition + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentPosition((prevPosition) =>
      prevPosition === 0 ? items.length - 1 : prevPosition - 1
    );
  };

  const handleSlideChange = () => {
    console.log('New slider item has been shown');
  };

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {items.map((item) => (
          <div
            key={item.position}
            className={`${
              currentPosition === item.position ? '' : 'hidden'
            } duration-700 ease-in-out`}
          >
            <Image
              src={item.imageUrl} 
              alt=''
              width={1200}
              height={675} />
            {/* <img
              src={item.imageUrl}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            /> */}
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {items.map((item) => (
          <button
            key={item.position}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentPosition === item.position
                ? 'bg-white dark:bg-gray-800'
                : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
            }`}
            aria-current={currentPosition === item.position ? 'true' : 'false'}
            aria-label={`Slide ${item.position + 1}`}
            onClick={() => {
              setCurrentPosition(item.position);
              handleSlideChange();
            }}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}
