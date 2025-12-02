import React from 'react';
import { ContactForm } from './ContactForm';
import Image from 'next/image';

const ContactContainer = () => {
  return (
    <div className=" w-[90%] !mx-auto">
      <div className="!w-full">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left side - Contact Information */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/contact.png"
              alt="Contact Image"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          {/* Right side - Contact Form */}
          <div className=" w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
