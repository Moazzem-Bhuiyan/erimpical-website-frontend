import { fetcheventsDetails } from '@/Hooks/UsegetEvent';
import EventDetailsPage from '../_Component/EventDetailsPage';

export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const service = await fetcheventsDetails(id);
    return {
      title: `${service?.data?.title || 'Event Details'} - Empirical-Website`,
      description:
        service?.data?.description || 'Discover detailed information about our services...',
    };
  } catch (error) {
    return {
      title: 'Event Details - Empirical-Website',
      description: 'Discover detailed information about our Event...',
    };
  }
}

export default async function page({ params }) {
  const { id } = params;
  let service = null;
  let error = null;

  try {
    service = await fetcheventsDetails(id);
  } catch (err) {
    error = err.message;
  }
  return (
    <div>
      <EventDetailsPage EventDetails={service} error={error} />
    </div>
  );
}
