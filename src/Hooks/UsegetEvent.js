export async function fetcheventsDetails(id) {
  console.log(`Fetching events details for ID: ${id}`);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events/${id}`, {
      next: { revalidate: 5 },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch events details');
    }
    return await response.json();
  } catch (err) {
    console.error('Error fetching events details:', err);
    throw new Error('Failed to fetch events details');
  }
}
