
const API_URL = process.env.REACT_APP_API_URL;

export async function fetchProducts() {
  try {
    // Use the API_URL variable to construct the full endpoint URL
    const response = await fetch(`${API_URL}/api/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}
