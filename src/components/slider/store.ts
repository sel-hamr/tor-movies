import { create } from "zustand";

type State = {
  index: number;
};

type Actions = {
  setIndex: (index: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleClick: (index: number) => void;
};

const useSlider = create<State & Actions>((set) => ({
  index: 0,
  setIndex: (index) => set({ index }),
  handleNext: () => set((state) => ({ index: state.index + 1 })),
  handlePrev: () => set((state) => ({ index: state.index - 1 })),
  handleClick: (index) => set({ index }),
}));

export default useSlider;
