import { writable } from 'svelte/store';

const currentStep = writable(0);

function next() {
  currentStep.update((prevStep) => prevStep++);
}

function back() {
  currentStep.update((prevStep) => {
    if (prevStep > 0) {
      prevStep++;
    }
  });
}

export default {
  subscribe: currentStep.subscribe,
  next,
  back,
};
