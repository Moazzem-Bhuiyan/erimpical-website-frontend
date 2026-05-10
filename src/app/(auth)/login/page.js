import React from 'react';
import LoginForm from './_Component/LoginForm';
import Image from 'next/image';
import logo from '@/assets/Logo/logo.png';

export const metadata = {
  title: 'Login',
  description:
    'Empirical is a cutting-edge platform that leverages advanced technologies to provide innovative solutions for data analysis, visualization, and decision-making. Our mission is to empower businesses and individuals with the tools they need to harness the power of their data effectively.',
};

export default function page() {
  return (
    <div className="!mx-auto 2xl:w-[50%] bg-white !space-y-2 !p-10 rounded-4xl ">
      <div className="flex justify-center items-center">
        <Image src={logo} className="mx-auto w-[100px]" width={1000} height={1000} alt="logo" />
      </div>
      <h1 className="text-center text-3xl font-semibold text-danger">Welcome to EMPIRICAL</h1>
      <p className="text-center">Sign in to your account</p>
      <LoginForm />
    </div>
  );
}
