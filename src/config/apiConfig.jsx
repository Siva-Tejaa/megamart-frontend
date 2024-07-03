export const API_BASE_URL = "https://mega-mart-lgq3.onrender.com";

export const API_END_POINTS = {
  AUTH: {
    SIGNUP: `${API_BASE_URL}/api/auth/signup`,
    SIGNIN: `${API_BASE_URL}/api/auth/signin`,
    SIGNOUT: `${API_BASE_URL}/api/auth/signout`,
  },
  REFRESH_TOKEN: `${API_BASE_URL}/api/refresh-token`,
  PRODUCTS: {
    GET_ALL_PRODUCTS: `${API_BASE_URL}/api/products`,
    GET_SINGLE_PRODUCT_DETAILS: (productId) =>
      `${API_BASE_URL}/api/products/${productId}`,
  },
  USER: {
    GET_USER_DETAILS: `${API_BASE_URL}/api/users/me`,
    UPDATE_USER_PROFILE: `${API_BASE_URL}/api/users/me`,
  },
  CUSTOMER: {
    CART: {
      ADD_ITEM_TO_CART: `${API_BASE_URL}/api/customers/me/cart`,
      GET_CART_ITEMS: `${API_BASE_URL}/api/customers/me/cart`,
      DECREASE_CART_ITEM_QUANTITY: (productId) =>
        `${API_BASE_URL}/api/customers/me/cart/${productId}`,
      REMOVE_CART_ITEM: (productId) =>
        `${API_BASE_URL}/api/customers/me/cart/${productId}`,
      REMOVE_ALL_CART_ITEMS: `${API_BASE_URL}/api/customers/me/cart`,
    },
    ORDERS: {
      PLACE_ORDER: `${API_BASE_URL}/api/customers/me/orders`,
      GET_ALL_ORDERS: `${API_BASE_URL}/api/customers/me/orders`,
    },
    WISHLIST: {
      GET_WISHLIST_ITEMS: `${API_BASE_URL}/api/customers/me/wishlist`,
      ADD_REMOVE_WISHLIST_ITEM: `${API_BASE_URL}/api/customers/me/wishlist`,
    },
  },
  SELLER: {
    PRODUCTS: {
      ADD_PRODUCT: `${API_BASE_URL}/api/sellers/me/products`,
      GET_SELLER_PRODUCTS: `${API_BASE_URL}/api/sellers/me/products`,
    },
    GET_SELLER_ORDERS: `${API_BASE_URL}/api/sellers/me/orders`,
  },
  ADMIN: {
    CUSTOMERS: {
      GET_ALL_CUSTOMERS: `${API_BASE_URL}/api/admin/customers`,
      GET_CUSTOMER_ORDERS: (customerId) =>
        `${API_BASE_URL}/api/admin/customers/${customerId}/orders`,
    },
    SELLERS: {
      GET_ALL_SELLERS: `${API_BASE_URL}/api/admin/sellers`,
      GET_SELLER_PRODUCTS: (sellerId) =>
        `${API_BASE_URL}/api/admin/sellers/${sellerId}/products`,
      GET_SELLER_ORDERS: (sellerId) =>
        `${API_BASE_URL}/api/admin/sellers/${sellerId}/orders`,
    },
  },
};
