import create from "zustand";
import { persist, devtools } from "zustand/middleware";

const store = (set) => ({
  storage: [],
  total: 0,
  CountQueuingStrategy: 0,
  CountRunning: 0,
  CountSucceeded: 0,

  setStorage: (storage) => {
    set((state) => ({
      storage: storage,
    }));
  },

  // Add more state here
  addData: (data) => {
    set((state) => ({
      storage: [...state.storage, data],
    }));
  },

  // Add more state here
  removeData: (data) => {
    set((state) => ({
      storage: state.storage.filter((item) => item !== data),
    }));
  },

  // Add more state here
  clearData: () => {
    set((state) => ({
      storage: [],
    }));
  },
});

const useStore = create(devtools(persist(store, { name: "storage" })));

export default useStore;
