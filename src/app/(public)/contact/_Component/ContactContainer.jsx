import React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import Image from 'next/image';

const ContactContainer = () => {
  return (
    <div>
      <div className="w-full ">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left side - Contact Information */}
          <div>
            <Image
              src="/contact.png"
              alt="Contact Image"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          {/* Right side - Contact Form */}
          <div className=" flex flex-1 justify-center items-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
