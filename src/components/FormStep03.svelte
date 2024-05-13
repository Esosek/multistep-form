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
    title="Pick add-ons"
    subtext="Add-ons help enhance your gaming experience."
  />
  <ul class="flex flex-col gap-3 my-6 flex-grow">
    {#each Object.entries(addOns) as [key, value]}
      <li>
        <CheckboxSelect
          value={$formData.addons.includes(key)}
          title={key}
          description={value.description}
          price={$formData.isYearly
            ? `+$${value.yearlyPrice}/yr`
            : `+$${value.monthlyPrice}/mo`}
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
      onPress={() => formData.previousStep()}
    />
    <FormButton onPress={formData.nextStep} />
  </FormNavigation>
</div>
