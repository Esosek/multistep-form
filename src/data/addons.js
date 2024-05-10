export const AddOn = {
  OnlineService: 'Online service',
  ExtraStorage: 'Larger storage',
  CustomProfile: 'Customizable profile',
};

const addOns = {
  [AddOn.OnlineService]: {
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  [AddOn.ExtraStorage]: {
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  [AddOn.CustomProfile]: {
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
};

export default addOns;
