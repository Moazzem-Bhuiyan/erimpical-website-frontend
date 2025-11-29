'use client';

import EyeIconInverse from '@/component/EyeIconInverse/EyeIconInverse';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSignUpMutation } from '@/redux/api/authApi';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const router = useRouter();

  // Sign up api handler
  const [signUp, { isLoading }] = useSignUpMutation();
  const onSignUpSubmit = async (data) => {
    // delete confirm password
    delete data['confirmPassword'];
    try {
      const res = await signUp(data).unwrap();
      if (res.success) {
        toast.success('User Created Successfully');
        localStorage.setItem('signupToken', res?.data?.otpToken.token);
        router.push(`/otp-verification?next=/auth/login&email=${data?.email}`);
        reset();
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSignUpSubmit)} className="">
      <div className="!space-y-8">
        {/* first name */}
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="name" className="!mb-1 block font-semibold text-primary-black">
            Name
          </Label>

          <Input
            type="text"
            id="name"
            placeholder="Enter your full name"
            {...register('name', { required: true })}
            className="rounded-xl border border-primary-black/50 bg-transparent text-primary-black outline-none focus:outline-none !px-4 !py-5"
          />
          {errors.name && <p className="!mt-1 text-danger"> Name is required</p>}
        </div>

        {/* email */}
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="email" className="!mb-1 block font-semibold text-primary-black">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register('email', {
              required: true,
            })}
            className="rounded-xl border border-primary-black/50 bg-transparent text-primary-black outline-none !px-4 !py-5"
          />
          {errors.email && <p className="!mt-1 text-danger">Email is required</p>}
        </div>

        {/* new password */}
        <div className="!mt-6 grid w-full items-center gap-2">
          <Label htmlFor="password" className="font-semibold text-primary-black">
            Password
          </Label>

          <div className="relative">
            <Input
              type={showPass ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    'Password must have at least one uppercase, one lowercase letter, one number, one special character and 8 characters long',
                },
              })}
              className="rounded-xl border border-primary-black/50 bg-transparent text-primary-black outline-none !px-4 !py-5"
            />

            <EyeIconInverse showPassword={showPass} setShowPassword={setShowPass} />
          </div>

          {errors.password && <p className="!mt-1 text-danger">{errors.password.message}</p>}
        </div>

        {/* confirm password */}
        <div className="!mt-6 grid w-full items-center gap-2">
          <Label htmlFor="confirmPassword" className="font-semibold text-primary-black">
            Confirm Password
          </Label>

          <div className="relative">
            <Input
              type={showConfirmPass ? 'text' : 'password'}
              id="confirmPassword"
              placeholder="Confirm your password"
              {...register('confirmPassword', {
                required: 'Confirm password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
                validate: (value) => value === watch('password') || 'Passwords do not match',
              })}
              className="rounded-xl border-primary-black/50 bg-transparent text-primary-black outline-none !px-4 !py-5"
            />
            <EyeIconInverse showPassword={showConfirmPass} setShowPassword={setShowConfirmPass} />
          </div>

          {errors.confirmPassword && (
            <p className="!mt-1 text-danger">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="!mt-10 h-[2.8rem] w-full rounded-xl bg-primary font-semibold"
      >
        {isLoading ? 'Singing up...' : 'Sign Up'}
      </Button>

      <div className="!mt-5 flex items-center justify-center gap-2">
        <p>Already have an account?</p>
        <Link href="/login" className="hover-underline font-medium">
          Sign In
        </Link>
      </div>
    </form>
  );
}
