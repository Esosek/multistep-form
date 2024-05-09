import { writable } from 'svelte/store';
import { Plan } from '../data/plans';

const formData = writable({
  currentStep: 2,
  selectedPlan: Plan.Arcade,
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

function selectPlan(plan) {
  formData.update((prevState) => {
    return { ...prevState, selectedPlan: plan };
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
  selectPlan,
  toggleYearly,
};
