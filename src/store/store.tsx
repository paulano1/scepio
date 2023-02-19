import { create } from 'zustand';

export type AppState = {
  signedIn: boolean;
  setSignedIn: (signedIn: boolean) => void;
  userName: string;
  setUserName: (userName: string) => void;
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
  userEmailAddress: string;
  setUserEmailAddress: (userEmailAddress: string) => void;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
export const useStore = create<AppState>((set, get) => ({
  signedIn: false,
  setSignedIn: (signedIn: boolean) => set({ signedIn }),
  userName: '',
  setUserName: (userName: string) => set({ userName }),
  currentPage: 'maps',
  setCurrentPage: (currentPage: string) => set({ currentPage }),
  userEmailAddress: '',
  setUserEmailAddress: (userEmailAddress: string) => set({ userEmailAddress }),
}));

