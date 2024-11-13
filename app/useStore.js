import { create } from "zustand";

const useUserPopupStore = create((set) => ({
  popupOpen: false,
  updatePopupOpen: (newPopup) =>
    set({
      popupOpen: newPopup,
    }),
}));

export default useUserPopupStore;
