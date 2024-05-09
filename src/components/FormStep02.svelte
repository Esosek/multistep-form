<script>
  import FormHeader from './FormHeader.svelte';
  import FormNavigation from './FormNavigation.svelte';
  import FormButton from './FormButton.svelte';
  import formData from '../stores/formData';
  import ButtonSelect from './ButtonSelect.svelte';
  import Toggle from './Toggle.svelte';

  const plans = [
    {
      label: 'Arcade',
      monthlyPrice: '$9/mo',
      yearlyPrice: '$90/yr',
      icon: '/assets/images/icon-arcade.svg',
    },
    {
      label: 'Advanced',
      monthlyPrice: '$12/mo',
      yearlyPrice: '$120/yr',
      icon: '/assets/images/icon-advanced.svg',
    },
    {
      label: 'Pro',
      monthlyPrice: '$15/mo',
      yearlyPrice: '$150/yr',
      icon: '/assets/images/icon-pro.svg',
    },
  ];

  let selectedPlanIndex = 0;
  let isYearly = false;

  function selectPlan(index) {
    selectedPlanIndex = index;
  }

  function togglePlan(event) {
    isYearly = event.target.checked;
  }
</script>

<div class="sm:flex sm:flex-col sm:h-full">
  <FormHeader
    title="Select your plan"
    subtext="You have the option of monthly of yearly billing."
  />
  <ul class="grid gap-3 my-6 lg:grid-cols-3">
    {#each plans as plan, index}
      <li>
        <ButtonSelect
          label={plan.label}
          subtext={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
          iconPath={plan.icon}
          isSelected={index === selectedPlanIndex}
          showFreeOffer={isYearly}
          onPress={() => selectPlan(index)}
        />
      </li>
    {/each}
  </ul>

  <div>
    <div
      class="flex justify-center items-center gap-6 bg-magnolia py-3 rounded-lg"
    >
      <p class={isYearly ? 'text-cool-gray' : ''}>Monthly</p>
      <Toggle onToggle={togglePlan} />
      <p class={isYearly ? '' : 'text-cool-gray'}>Yearly</p>
    </div>
  </div>

  <FormNavigation>
    <FormButton
      label="Go Back"
      isPrimary={false}
      onPress={() => formData.back()}
    />
    <FormButton />
  </FormNavigation>
</div>
