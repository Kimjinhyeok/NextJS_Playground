import { create } from 'zustand';

interface NumberStates {
  count: number,
  increase: ()=>void,
  decrease: ()=>void,
}
export const useCountStore = create<NumberStates>( set => ({
  count: 0,
  increase: () => set( state => ({ count: state.count+1 })),
  decrease: () => set( state => ({ count: state.count-1 })),

}));