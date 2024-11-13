import create from "zustand";
const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (product, quantity = 1) =>
    set((state) => {
      let existingIndex = state.cartItems.findIndex(
        (item) => item.id == product.id
      );
      if (existingIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingIndex].quantity += quantity;
        return { cartItems: updatedCartItems };
      } else {
        const newProduct = { ...product, quantity };
        return { cartItems: [...state.cartItems, newProduct] };
      }
    }),
  removeQuantity: (product, quantity = 1) =>
    set((state) => {
      let existingIndex = state.cartItems.findIndex(
        (item) => item.id == product.id
      );

      const updatedCartItems = [...state.cartItems];
      updatedCartItems[existingIndex].quantity = Math.max(
        0,
        updatedCartItems[existingIndex].quantity - quantity
      );
      return { cartItems: updatedCartItems };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    })),
  clearCart: () =>
    set(() => ({
      cartItems: [],
    })),
}));

export default useCartStore;
