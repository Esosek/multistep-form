<script>
  import FormHeader from './FormHeader.svelte';
  import FormNavigation from './FormNavigation.svelte';
  import FormButton from './FormButton.svelte';
  import formData from '../stores/formData';
  import addOns from '../data/addons';
  import CheckboxSelect from './CheckboxSelect.svelte';

  function selectAddon(addon) {}
</script>

<div class="sm:flex sm:flex-col sm:h-full">
  <FormHeader
    title="Finishing up"
    subtext="Double-check everything looks OK before confirming."
  />
  <ul class="flex flex-col gap-3 my-6">
    {#each Object.entries(addOns) as [key, value]}
      <li>
        <CheckboxSelect
          title={key}
          description={value.description}
          price={$formData.isYearly ? value.yearlyPrice : value.monthlyPrice}
          onChange={() => {
            formData.toggleAddon(key);
          }}
        />
      </li>
    {/each}
  </ul>

  <FormNavigation>
    <FormButton
      label="Go Back"
      isPrimary={false}
      onPress={formData.previousStep}
    />
    <FormButton label="Confirm" onPress={formData.nextStep} />
  </FormNavigation>
</div>
