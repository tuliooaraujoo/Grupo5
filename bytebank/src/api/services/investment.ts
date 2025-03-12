import { BASE_URL } from "../api";

export const getInvestments = async () => {
  const response = await fetch(`${BASE_URL}/investments`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to fetch investments');
};

export const updateInvestment = async (type: any, value: any) => {
  const response = await fetch(`${BASE_URL}/investments/${type}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Failed to update investment');
};
