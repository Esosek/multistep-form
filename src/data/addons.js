export const AddOn = {
  OnlineService: 'Online service',
  ExtraStorage: 'Larger storage',
  CustomProfile: 'Customizable profile',
};

const addOns = {
  [AddOn.OnlineService]: {
    description: 'Access to multiplayer games',
    monthlyPrice: '+$1/mo',
    yearlyPrice: '+$10/yr',
  },
  [AddOn.ExtraStorage]: {
    description: 'Extra 1TB of cloud save',
    monthlyPrice: '+$2/mo',
    yearlyPrice: '+$20/yr',
  },
  [AddOn.CustomProfile]: {
    description: 'Custom theme on your profile',
    monthlyPrice: '+$2/mo',
    yearlyPrice: '+$20/yr',
  },
};

export default addOns;
