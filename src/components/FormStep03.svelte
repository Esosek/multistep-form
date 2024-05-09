<script>
  import FormHeader from './FormHeader.svelte';
  import FormNavigation from './FormNavigation.svelte';
  import FormButton from './FormButton.svelte';
  import formData from '../stores/formData';
  import addOns from '../data/addons';

  function selectAddon(addon) {}
</script>

<div class="sm:flex sm:flex-col sm:h-full">
  <FormHeader
    title="Pick add-ons"
    subtext="Add-ons help enhance your gaming experience."
  />
  <ul class="grid gap-3 my-6 lg:grid-cols-3">
    {#each Object.entries(addOns) as [key, value]}
      <li>
        {key}
      </li>
    {/each}
  </ul>

  <FormNavigation>
    <FormButton
      label="Go Back"
      isPrimary={false}
      onPress={() => formData.previousStep()}
    />
    <FormButton />
  </FormNavigation>
</div>
