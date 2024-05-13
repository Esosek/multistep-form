import { writable, get } from 'svelte/store';
import plans, { Plan } from '../data/plans';
import addOns from '../data/addons';

const formData = writable({
  currentStep: 0,
  user: {
    name: '',
    email: '',
    phone: '',
  },
  selectedPlan: Plan.Arcade,
  isYearly: false,
  addons: [],
  isSubmitted: false,
});

export function getTotalPrice() {
  let totalPrice = 0;
  let currentFormData = get(formData);

  if (currentFormData.isYearly) {
    totalPrice += parseInt(plans[currentFormData.selectedPlan].yearlyPrice);
    for (const addon of currentFormData.addons) {
      totalPrice += parseInt(addOns[addon].yearlyPrice);
    }
  } else {
    totalPrice += parseInt(plans[currentFormData.selectedPlan].monthlyPrice);
    for (const addon of currentFormData.addons) {
      totalPrice += parseInt(addOns[addon].monthlyPrice);
    }
  }
  return totalPrice;
}

function setUserData(userData) {
  formData.update((prevState) => {
    return { ...prevState, user: userData };
  });
}

function nextStep() {
  formData.update((prevState) => {
    return { ...prevState, currentStep: prevState.currentStep + 1 };
  });
}

function previousStep(stepCount = 1) {
  formData.update((prevState) => {
    const step = prevState.currentStep;
    return {
      ...prevState,
      currentStep: step > 0 ? step - stepCount : step,
    };
  });
}

function selectPlan(plan) {
  formData.update((prevState) => {
    return { ...prevState, selectedPlan: plan };
  });
}

function toggleYearly() {
  formData.update((prevState) => {
    return {
      ...prevState,
      isYearly: !prevState.isYearly,
    };
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
    return {
      ...prevState,
      addons: [...updatedAddons],
    };
  });
}

function submitForm() {
  formData.update((prevState) => {
    return {
      ...prevState,
      isSubmitted: true,
    };
  });
}

export default {
  subscribe: formData.subscribe,
  setUserData,
  nextStep,
  previousStep,
  selectPlan,
  toggleYearly,
  toggleAddon,
  submitForm,
};
