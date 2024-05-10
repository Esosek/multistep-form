import { writable } from 'svelte/store';
import { Plan } from '../data/plans';

const formData = writable({
  currentStep: 3,
  selectedPlan: Plan.Arcade,
  isYearly: false,
  addons: [],
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

function toggleAddon(addon) {
  formData.update((prevState) => {
    const updatedAddons = [...prevState.addons];
    const includesAddon = updatedAddons.includes(addon);

    if (includesAddon) {
      const addonIndex = updatedAddons.indexOf(addon);
      updatedAddons.splice(addonIndex, 1);
    } else {
      updatedAddons.push(addon);
    }
    return { ...prevState, addons: [...updatedAddons] };
  });
}

export default {
  subscribe: formData.subscribe,
  nextStep,
  previousStep,
  selectPlan,
  toggleYearly,
  toggleAddon,
};
