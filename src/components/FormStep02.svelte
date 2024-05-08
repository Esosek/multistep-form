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
  <div class="grid gap-3 my-6 sm:grid-cols-3">
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

  <div>
    <div
      class="flex justify-center items-center gap-6 bg-magnolia py-3 rounded-lg"
    >
      <p>Monthly</p>
      <input type="checkbox" value="" class="sr-only peer" />

      <label class="flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div
          class="relative w-12 h-6 bg-marine-blue rounded-full peer peer-checked:after:translate-x-6 rtl:peer-checked:after:-translate-x-6 after:content-[''] after:absolute after:top-1 after:start-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"
        ></div>
      </label>

      <p class="text-cool-gray">Yearly</p>
    </div>
  </div>

  <FormNavigation>
    <FormButton
      label="Go Back"
      isPrimary={false}
      onPress={() => formStepCounter.back()}
    />
    <FormButton />
  </FormNavigation>
</div>
