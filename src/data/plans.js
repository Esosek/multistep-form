export const Plan = { Arcade: 'Arcade', Advanced: 'Advanced', Pro: 'Pro' };

const plans = {
  [Plan.Arcade]: {
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: '/assets/images/icon-arcade.svg',
  },
  [Plan.Advanced]: {
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: '/assets/images/icon-advanced.svg',
  },
  [Plan.Pro]: {
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: '/assets/images/icon-pro.svg',
  },
};

export default plans;
