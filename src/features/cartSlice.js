import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Sepetteki ürünler
  totalAmount: 0, // Toplam tutar
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload; // Yeni ürün
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1, isChecked: true }); // Yeni ürünü ekle ve varsayılan olarak işaretli yap
      } else {
        existingItem.quantity += 1; // Mevcut ürünün miktarını artır
      }

      // Toplam tutarı güncelle
      state.totalAmount = state.items.reduce(
        (total, item) =>
          item.isChecked ? total + item.price * item.quantity : total,
        0
      );
    },
    increaseQuantity(state, action) {
      const itemId = action.payload; // Miktarı artırılacak ürünün ID'si
      const item = state.items.find((item) => item.id === itemId);

      if (item) {
        item.quantity += 1; // Miktarı artır
      }

      // Toplam tutarı güncelle
      state.totalAmount = state.items.reduce(
        (total, item) =>
          item.isChecked ? total + item.price * item.quantity : total,
        0
      );
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload; // Miktarı azaltılacak ürünün ID'si
      const item = state.items.find((item) => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1; // Miktarı azalt
      }

      // Toplam tutarı güncelle
      state.totalAmount = state.items.reduce(
        (total, item) =>
          item.isChecked ? total + item.price * item.quantity : total,
        0
      );
    },
    toggleItemCheck(state, action) {
      const itemId = action.payload; // İşaret durumu değiştirilecek ürünün ID'si
      const item = state.items.find((item) => item.id === itemId);

      if (item) {
        item.isChecked = !item.isChecked; // İşaret durumunu tersine çevir
      }

      // Toplam tutarı güncelle
      state.totalAmount = state.items.reduce(
        (total, item) =>
          item.isChecked ? total + item.price * item.quantity : total,
        0
      );
    },
    removeFromCart(state, action) {
      const itemId = action.payload; // Sepetten çıkarılacak ürünün ID'si
      state.items = state.items.filter((item) => item.id !== itemId); // Ürünü sepetten çıkar

      // Toplam tutarı güncelle
      state.totalAmount = state.items.reduce(
        (total, item) =>
          item.isChecked ? total + item.price * item.quantity : total,
        0
      );
    },
    clearCart(state) {
      state.items = []; // Tüm ürünleri sepetten kaldır
      state.totalAmount = 0; // Toplam tutarı sıfırla
    },
  },
});

// Selector ile toplam tutarı yalnızca işaretli ürünler üzerinden hesapla
export const selectTotalAmount = (state) =>
  state.cart.items.reduce(
    (total, item) =>
      item.isChecked ? total + item.price * item.quantity : total,
    0
  );

// Sepetteki toplam ürün miktarını almak için selector
export const selectCartItemCount = (state) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  toggleItemCheck,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
