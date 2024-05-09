<script>
  import FormHeader from './FormHeader.svelte';
  import FormNavigation from './FormNavigation.svelte';
  import FormButton from './FormButton.svelte';
  import formData from '../stores/formData';
  import ButtonSelect from './ButtonSelect.svelte';
  import Toggle from './Toggle.svelte';
  import plans from '../data/plans';

  function selectPlan(index) {
    selectedPlanIndex = index;
  }
</script>

<div class="sm:flex sm:flex-col sm:h-full">
  <FormHeader
    title="Select your plan"
    subtext="You have the option of monthly of yearly billing."
  />
  <ul class="grid gap-3 my-6 lg:grid-cols-3">
    {#each Object.entries(plans) as [key, value]}
      <li>
        <ButtonSelect
          label={value.label}
          subtext={$formData.isYearly ? value.yearlyPrice : value.monthlyPrice}
          iconPath={value.icon}
          isSelected={key === $formData.selectedPlan}
          showFreeOffer={$formData.isYearly}
          onPress={() => formData.selectPlan(key)}
        />
      </li>
    {/each}
  </ul>

  <div>
    <div
      class="flex justify-center items-center gap-6 bg-magnolia py-3 rounded-lg"
    >
      <p class={$formData.isYearly ? 'text-cool-gray' : ''}>Monthly</p>
      <Toggle onToggle={formData.toggleYearly} />
      <p class={$formData.isYearly ? '' : 'text-cool-gray'}>Yearly</p>
    </div>
  </div>

  <FormNavigation>
    <FormButton
      label="Go Back"
      isPrimary={false}
      onPress={formData.previousStep}
    />
    <FormButton onPress={formData.nextStep} />
  </FormNavigation>
</div>
