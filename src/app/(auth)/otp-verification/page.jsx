import React from 'react';
import VerifyOtpForm from './_Component/OtpVerifyForm';
import logo from '@/assets/Logo/logo.png';
import Image from 'next/image';
export const metadata = {
  title: 'OTP Verification',
  description: 'Empirical || OTP Verification',
};

export default function page() {
  return (
    <div className="!mx-auto 2xl:w-[50%] bg-white !space-y-2 !p-10 rounded-4xl ">
      <div className="flex justify-center items-center">
        <Image src={logo} className="mx-auto w-[100px]" width={1000} height={1000} alt="logo" />
      </div>
      <h1 className="text-center text-3xl font-semibold text-danger">Welcome to EMPIRICAL</h1>
      <p className="text-center"></p>
      <VerifyOtpForm />
    </div>
  );
}
