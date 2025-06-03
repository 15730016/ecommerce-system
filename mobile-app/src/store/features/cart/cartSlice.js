import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      // Save to AsyncStorage
      AsyncStorage.setItem('CART_ITEMS', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      // Save to AsyncStorage
      AsyncStorage.setItem('CART_ITEMS', JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      // Save to AsyncStorage
      AsyncStorage.setItem('CART_ITEMS', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      // Save to AsyncStorage
      AsyncStorage.setItem('CART_ITEMS', JSON.stringify([]));
    },
    loadCartFromStorage: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  loadCartFromStorage,
  setLoading,
  setError,
} = cartSlice.actions;

// Thunk for loading cart from AsyncStorage
export const loadCart = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const cartData = await AsyncStorage.getItem('CART_ITEMS');
    if (cartData) {
      dispatch(loadCartFromStorage(JSON.parse(cartData)));
    }
  } catch (error) {
    dispatch(setError('Không thể tải giỏ hàng'));
  } finally {
    dispatch(setLoading(false));
  }
};

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => 
  state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectCartItemCount = (state) => 
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;
