const getProducts = async () => {
  try {
    const response = await fetch('/api/products')
    const products = await response.json()
    return products
  } catch (error) {
      console.log(`Error in public/js/routes/getProducts`);
  }
}

export const API_ROUTES = {
  getProducts
}