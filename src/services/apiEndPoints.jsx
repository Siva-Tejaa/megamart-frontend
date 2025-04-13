export const API_BASE_URL = "https://mega-mart-lgq3.onrender.com/api";

export const API_END_POINTS = {
  AUTH: {
    SIGNUP: `${API_BASE_URL}/auth/signup`,
    SIGNIN: `${API_BASE_URL}/auth/signin`,
    SIGNOUT: `${API_BASE_URL}/auth/signout`,
  },
  REFRESH_TOKEN: `${API_BASE_URL}/refresh-token`,
  PRODUCTS: {
    GET_ALL_PRODUCTS: `${API_BASE_URL}/products`,
    GET_SINGLE_PRODUCT_DETAILS: (productId) =>
      `${API_BASE_URL}/products/${productId}`,
  },
  USER: {
    GET_USER_DETAILS: `${API_BASE_URL}/users/me`,
    UPDATE_USER_PROFILE: `${API_BASE_URL}/users/me`,
  },
  CUSTOMER: {
    CART: {
      ADD_ITEM_TO_CART: `${API_BASE_URL}/customers/me/cart`,
      GET_CART_ITEMS: `${API_BASE_URL}/customers/me/cart`,
      DECREASE_CART_ITEM_QUANTITY: (productId) =>
        `${API_BASE_URL}/customers/me/cart/${productId}`,
      REMOVE_CART_ITEM: (productId) =>
        `${API_BASE_URL}/customers/me/cart/${productId}`,
      REMOVE_ALL_CART_ITEMS: `${API_BASE_URL}/customers/me/cart`,
    },
    ORDERS: {
      PLACE_ORDER: `${API_BASE_URL}/customers/me/orders`,
      GET_ALL_ORDERS: `${API_BASE_URL}/customers/me/orders`,
    },
    WISHLIST: {
      GET_WISHLIST_ITEMS: `${API_BASE_URL}/customers/me/wishlist`,
      ADD_REMOVE_WISHLIST_ITEM: `${API_BASE_URL}/customers/me/wishlist`,
    },
  },
  SELLER: {
    PRODUCTS: {
      ADD_PRODUCT: `${API_BASE_URL}/sellers/me/products`,
      GET_SELLER_PRODUCTS: `${API_BASE_URL}/sellers/me/products`,
    },
    GET_SELLER_ORDERS: `${API_BASE_URL}/sellers/me/orders`,
  },
  ADMIN: {
    CUSTOMERS: {
      GET_ALL_CUSTOMERS: `${API_BASE_URL}/admin/customers`,
      GET_CUSTOMER_ORDERS: (customerId) =>
        `${API_BASE_URL}/admin/customers/${customerId}/orders`,
    },
    SELLERS: {
      GET_ALL_SELLERS: `${API_BASE_URL}/admin/sellers`,
      GET_SELLER_PRODUCTS: (sellerId) =>
        `${API_BASE_URL}/admin/sellers/${sellerId}/products`,
      GET_SELLER_ORDERS: (sellerId) =>
        `${API_BASE_URL}/admin/sellers/${sellerId}/orders`,
    },
  },
};
