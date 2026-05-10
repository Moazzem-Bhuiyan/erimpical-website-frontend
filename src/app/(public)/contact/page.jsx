import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import ContactContainer from './_Component/ContactContainer';

export async function generateMetadata() {
  return {
    title: 'Contact',
    description:
      'Building fashion that speaks to you, while respecting the planet and empowering communities through ethical practices.',
  };
}

export default function Contact() {
  return (
    <ResponsiveContainer className={'w-full !p-0'}>
      <ContactContainer />
    </ResponsiveContainer>
  );
}
