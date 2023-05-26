import create from 'zustand'

interface ExampleAppState {
  router: any | null,
  dom: any | null,
  showFooter: boolean,
  showHeader: boolean,
  toggleFooter: (value: boolean) => void,
  toggleHeader: (value: boolean) => void,
}


const useStore = create<ExampleAppState>((set) => {
  return {
    router: null,
    dom: null,
    showFooter: false,
    showHeader: true,

    toggleFooter: (value) => {
      set(() => ({showFooter: value}))
    },
    toggleHeader: (value) => {
      set(() => ({showHeader: value}))
    },
  }
})

export default useStore
