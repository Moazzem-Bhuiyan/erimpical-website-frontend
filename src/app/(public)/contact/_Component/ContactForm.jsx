'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Handle form submission here
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="!space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center"> Get in touch</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <p className="!mb-2">Name</p>
          <Input
            placeholder="Your Name"
            {...register('name', { required: 'Name is required' })}
            className="h-12"
          />
          {errors.name && <p className="!mt-1 text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <p className="!mb-2">Email</p>
          <Input
            type="email"
            placeholder="Email Address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="h-12"
          />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="!mt-5">
        <p className="!mb-2 !my-2">Subject</p>
        <Input
          placeholder="Subject"
          {...register('subject', { required: 'Subject is required' })}
          className="h-12"
        />
        {errors.subject && (
          <p className="!mt-1 text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>

      <div className="!mt-5">
        <p className="!mb-2">Message</p>
        <Textarea
          placeholder="Your Message"
          {...register('message', { required: 'Message is required' })}
          className="min-h-[120px] resize-none !p-3"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="h-12 !mt-5 w-full bg-foreground text-background hover:bg-foreground/90"
      >
        Inquire Now
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
