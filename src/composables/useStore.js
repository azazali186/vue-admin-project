import { reactive, toRefs } from "vue";
export default function useStore() {
  const state = reactive({
    leftDrawerOpen: false,
  });

  const setLeftDrawer = () => {
    state.leftDrawerOpen = true
  }

  return {
    ...toRefs(state),
    setLeftDrawer
  };
}