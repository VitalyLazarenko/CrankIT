import create from 'zustand'

interface ExampleAppState {
  router: any | null,
  dom: any | null,
}


const useStore = create<ExampleAppState>(() => {
  return {
    router: null,
    dom: null,
  }
})

export default useStore
