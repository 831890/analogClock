import { create } from 'zustand';

const useTimeStore = create((set) => ({
  date: new Date(),
  updateDate: () => set(() => ({ date: new Date() })),
}));

export default useTimeStore;
