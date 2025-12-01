'use client';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useMyProfileQuery } from '@/redux/api/authApi';
import { logout, selectToken } from '@/redux/slices/authSlice';
import { Edit } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { EditUserInfo } from './EdituserInfoModal';

export function ProfileHeader() {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  // get user info from api
  const { data } = useMyProfileQuery({
    skip: !token,
  });
  const user = data?.data;

  return (
    <div className="!mb-12">
      <div className="flex relative flex-col md:flex-row gap-8 items-start md:items-center border-b border-border !pb-8">
        <Avatar className="!h-24 !w-24 md:h-32 md:w-32 absolute md:static">
          <AvatarImage src={user?.photoUrl || '/placeholder.svg'} alt={user?.name} />
          <AvatarFallback className="text-2xl">
            {user?.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>

        <button
          className=" absolute   bottom-14 bg-transparent hover:bg-transparent cursor-pointer border-0 left-18"
          // onClick={() => router.push('/profile/edit')}
          variant="outline"
        >
          <EditUserInfo />
        </button>

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground !mb-2">
            {user?.name || 'User Name'}
          </h1>
          {/* <p className="text-muted-foreground !mb-4">Member since {user.memberSince}</p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Email</p>
              <p className="text-foreground font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Phone</p>
              <p className="text-foreground font-medium">{user?.contractNo || 'N/A'}</p>
            </div>
            <div className="md:col-span-2">
              <Button
                onClick={() => {
                  dispatch(logout());
                  router.refresh();
                  router.push('/');
                }}
                className="!p-4 cursor-pointer"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
