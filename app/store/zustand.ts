import { create } from 'zustand';

interface NumberStates {
  count: number,
  hasInit: boolean,
  increase: ()=>void,
  decrease: ()=>void,
}
export const useCountStore = create<NumberStates>( set => ({
  count: 0,
  hasInit: false,
  increase: () => set( state => ({ count: state.count+1 })),
  decrease: () => set( state => ({ count: state.count-1 })),

}));

export type ComplexState = {
  hasInit: boolean,
  dataA: {
    value1: number,
    value2: number,
  },
  name: string,
}
type ComplexCreateType = {

  setState: (data:ComplexState)=>void
  updateDataA: (key: keyof ComplexState['dataA'], value: number)=>void
  setName: (name:string)=>void,
} & ComplexState;

export const useComplexStore = create<ComplexCreateType>( set => ({
  hasInit: false,
  dataA: {
    value1: 0,
    value2: -1
  },
  name: "",
  setState(data) {
    set(data);
  },
  updateDataA(key, value) {
    set(state => ({
      ...state,
      dataA: {
        ...state.dataA,
        [key]: value
      }
    }))
  },
  setName(name) {
    set(state => {
      
      return ({
        ...state,
        name: name,
      })
    })
  },
}))