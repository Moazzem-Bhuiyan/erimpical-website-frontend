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
import { Edit } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function EditUserInfo() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onEditSubmit = (data) => {
    console.log('Form Data: ', data);
    console.log('Uploaded Image: ', data.profileImage?.[0]);
  };

  return (
    <Dialog>
      <form onSubmit={handleSubmit(onEditSubmit)}>
        <DialogTrigger asChild>
          <Edit size={20} className="!mr-2 h-6 w-6" />
        </DialogTrigger>
        <DialogContent className="sm:!max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Name */}
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input
                {...register('name', { required: true })}
                id="name-1"
                name="name"
                defaultValue="Pedro Duarte"
              />
            </div>

            {/* Contact */}
            <div className="grid gap-3">
              <Label htmlFor="contractNo-1">Contact</Label>
              <Input
                {...register('contractNo', { required: true })}
                id="contractNo-1"
                name="contractNo"
                defaultValue="+91 9876543210"
              />
            </div>

            {/* Profile Image Upload */}
            <div className="grid gap-3">
              <Label htmlFor="profileImage">Profile Image</Label>
              <Input
                type="file"
                accept="image/*"
                {...register('profileImage', { required: false })}
                id="profileImage"
                name="profileImage"
                className="cursor-pointer"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
