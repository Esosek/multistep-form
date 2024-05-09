import { writable } from 'svelte/store';

const currentStep = writable(1);

function next() {
  currentStep.update((prevStep) => prevStep + 1);
}

function back() {
  currentStep.update((prevStep) => {
    if (prevStep > 0) {
      return prevStep - 1;
    }
  });
}

export default {
  subscribe: currentStep.subscribe,
  next,
  back,
};
