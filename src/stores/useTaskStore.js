import { create } from "zustand";

export const useTaskStore = create((set) => ({
    tasks:[],
    addTask: () => set((state) => ({ tasks: tasks.push(state)}))
}))