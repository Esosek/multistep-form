export const Plan = { Arcade: 'arcade', Advanced: 'advanced', Pro: 'pro' };

const plans = {
  [Plan.Arcade]: {
    label: 'Arcade',
    monthlyPrice: '$9/mo',
    yearlyPrice: '$90/yr',
    icon: '/assets/images/icon-arcade.svg',
  },
  [Plan.Advanced]: {
    label: 'Advanced',
    monthlyPrice: '$12/mo',
    yearlyPrice: '$120/yr',
    icon: '/assets/images/icon-advanced.svg',
  },
  [Plan.Pro]: {
    label: 'Pro',
    monthlyPrice: '$15/mo',
    yearlyPrice: '$150/yr',
    icon: '/assets/images/icon-pro.svg',
  },
};

export default plans;
