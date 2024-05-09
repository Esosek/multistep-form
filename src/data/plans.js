export const Plan = { Arcade: 'Arcade', Advanced: 'Advanced', Pro: 'Pro' };

const plans = {
  [Plan.Arcade]: {
    monthlyPrice: '$9/mo',
    yearlyPrice: '$90/yr',
    icon: '/assets/images/icon-arcade.svg',
  },
  [Plan.Advanced]: {
    monthlyPrice: '$12/mo',
    yearlyPrice: '$120/yr',
    icon: '/assets/images/icon-advanced.svg',
  },
  [Plan.Pro]: {
    monthlyPrice: '$15/mo',
    yearlyPrice: '$150/yr',
    icon: '/assets/images/icon-pro.svg',
  },
};

export default plans;
