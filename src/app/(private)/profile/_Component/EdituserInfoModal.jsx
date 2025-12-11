import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUpdateProfileMutation } from '@/redux/api/authApi';
import { Edit, Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function EditUserInfo({ user }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: user?.name || '',
      contractNo: user?.contractNo || '',
    },
  });

  const [update, { isLoading }] = useUpdateProfileMutation();

  const onEditSubmit = async (data) => {
    try {
      const formData = new FormData();

      // attach profile image (if selected)
      if (data.profileImage && data.profileImage.length > 0) {
        formData.append('image', data.profileImage[0]);
      }

      // pass other fields except image
      const sendData = {
        name: data?.name,
        contractNo: data?.contractNo,
      };

      formData.append('data', JSON.stringify(sendData));

      const res = await update(formData).unwrap();

      if (res.success) {
        toast.success('Profile updated successfully');
      }
    } catch (error) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Edit size={20} className="cursor-pointer h-6 w-6" />
      </DialogTrigger>

      <DialogContent className="!max-w-[650px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        {/* Form moved inside dialog */}
        <form onSubmit={handleSubmit(onEditSubmit)} className="!space-y-6">
          {/* Name */}
          <div className="grid gap-2">
            <Label htmlFor="name-1">Name</Label>
            <Input id="name-1" {...register('name', { required: 'Name is required' })} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Contact */}
          <div className="grid gap-2">
            <Label htmlFor="contractNo-1">Contact</Label>
            <Input
              id="contractNo-1"
              {...register('contractNo', {
                required: 'Contact number is required',
                minLength: { value: 10, message: 'Minimum 10 digits required' },
              })}
            />
            {errors.contractNo && (
              <p className="text-red-500 text-sm">{errors.contractNo.message}</p>
            )}
          </div>

          {/* Profile Image */}
          <div className="grid gap-2">
            <Label htmlFor="profileImage">Profile Image</Label>

            <input
              type="file"
              accept="image/*"
              id="profileImage"
              {...register('profileImage')}
              className="hidden"
            />

            <label
              htmlFor="profileImage"
              className="cursor-pointer flex items-center justify-center border rounded-md !p-4 hover:bg-gray-100 transition"
            >
              <Upload />
            </label>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
