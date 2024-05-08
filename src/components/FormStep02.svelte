<script>
  import FormHeader from './FormHeader.svelte';
  import FormNavigation from './FormNavigation.svelte';
  import FormButton from './FormButton.svelte';
  import formStepCounter from '../stores/formStepCounter';
  import ButtonSelect from './ButtonSelect.svelte';

  const plans = [
    {
      label: 'Arcade',
      price: '$9/mo',
      icon: '/assets/images/icon-arcade.svg',
    },
    {
      label: 'Advanced',
      price: '$12/mo',
      icon: '/assets/images/icon-advanced.svg',
    },
    {
      label: 'Pro',
      price: '$15/mo',
      icon: '/assets/images/icon-pro.svg',
    },
  ];

  let selectedPlanIndex = 0;

  function selectPlan(index) {
    selectedPlanIndex = index;
  }
</script>

<div class="sm:flex sm:flex-col sm:h-full">
  <FormHeader
    title="Select your plan"
    subtext="You have the option of monthly of yearly billing."
  />
  <div class="grid gap-3 sm:grid-cols-3">
    {#each plans as plan, index}
      <ButtonSelect
        label={plan.label}
        subtext={plan.price}
        iconPath={plan.icon}
        isSelected={index === selectedPlanIndex}
        onPress={() => selectPlan(index)}
      />
    {/each}
  </div>

  <div id="toggle"></div>
  <FormNavigation>
    <FormButton
      label="Go Back"
      isPrimary={false}
      onPress={() => formStepCounter.back()}
    />
    <FormButton />
  </FormNavigation>
</div>
