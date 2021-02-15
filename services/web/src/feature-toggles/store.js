import { writable } from "svelte/store";

const createStore = () => {
  const { subscribe, update } = writable({});

  return {
    subscribe,
    setFeatureToggle: (featureToggleName, isEnabled) =>
      update((store) => ({
        ...store,
        [featureToggleName]: isEnabled,
      })),
  };
};

export const featureTogglesStore = createStore();
