import { OrderHistory } from './_Component/OrderHistory';
import { ProfileHeader } from './_Component/ProfileHeader';

export const metadata = {
  title: 'User Profile',
  description: 'View your profile information and order history',
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl !mx-auto !px-4 !py-8 md:!py-12">
        <ProfileHeader />
        <OrderHistory />
      </div>
    </main>
  );
}
