export const fetchTickets = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      if (!response.ok) {
        throw new Error('Failed to fetch tickets');
      }
      const data = await response.json();
      return data.tickets; // Assuming API returns { tickets: [...] }
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  