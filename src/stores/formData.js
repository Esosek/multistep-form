import { writable } from 'svelte/store';

const formData = writable({
  currentStep: 2,
  isYearly: false,
});

function nextStep() {
  formData.update((prevState) => {
    return { ...prevState, currentStep: prevState.currentStep + 1 };
  });
}

function previousStep() {
  formData.update((prevState) => {
    const step = prevState.currentStep;
    return { ...prevState, currentStep: step > 0 ? step - 1 : step };
  });
}

function toggleYearly() {
  formData.update((prevState) => {
    return { ...prevState, isYearly: !prevState.isYearly };
  });
}

export default {
  subscribe: formData.subscribe,
  nextStep,
  previousStep,
  toggleYearly,
};
