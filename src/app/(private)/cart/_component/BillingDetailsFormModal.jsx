'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAddOrderMutation, useCheckoutMutation } from '@/redux/api/orderAndpaymentApi';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function BillingDetailsFormModal({ children, items, total }) {
  const { register, handleSubmit } = useForm();

  // add order handler
  const [addOrder, { isLoading }] = useAddOrderMutation();

  // checkout handler
  const [checkout, { isLoading: checkoutLoading }] = useCheckoutMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading('Processing your order...');

    try {
      const payload = {
        items: items?.map((item) => ({
          product: item?.product?._id,
          quantity: item?.quantity,
          size: item?.size,
        })),
        orderData: {
          amount: total,
          billingDetails: data,
        },
      };

      // Add new order
      const res = await addOrder(payload).unwrap();

      if (res?.success) {
        const checkoutData = {
          user: res?.data?.order?.user,
          order: res?.data?.order?._id,
        };

        // Checkout
        const checkoutRes = await checkout(checkoutData).unwrap();

        if (checkoutRes?.success) {
          toast.success('Order placed successfully!', {
            id: toastId, // replaces loading toast
            duration: 2000,
          });

          // Redirect to payment page
          if (typeof window !== 'undefined') {
            window.location.href = checkoutRes?.data;
          }
          return;
        }
      }

      // fallback if success false
      toast.error('Something went wrong!', { id: toastId });
    } catch (error) {
      toast.error(error?.data?.message || error?.error || 'Something went wrong', {
        id: toastId, // replace loading toast
      });
    }
  };

  return (
    <Dialog>
      {/* Trigger from parent */}
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="!max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Billing Details</DialogTitle>
          <DialogDescription>Enter your billing information.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              {...register('name', { required: true })}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <Label>Address</Label>
            <Input
              type="text"
              {...register('address', { required: true })}
              placeholder="Enter your address"
            />
          </div>
          <div>
            <Label>City</Label>
            <Input type="text" {...register('city')} placeholder="Enter your city" />
          </div>
          <div>
            <Label>Contact</Label>
            <Input
              type="text"
              {...register('phoneNumber', { required: true })}
              placeholder="Enter your phone number"
            />
          </div>

          <Button>Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
