import React from 'react';
import Image from 'next/image';

export default function AuthLayout({ children }) {
  return (
    <div className=" bg-[url('/philosophy.png')] bg-cover bg-center bg-no-repeat z-10 !min-h-screen flex justify-center items-center !overflow-hidden !px-5 md:!px-10 lg:!mx-auto lg:w-[90%] 2xl:w-[85%]">
      <div className="!mx-auto w-full ">{children}</div>
    </div>
  );
}
