<script>
  import FormHeader from './FormHeader.svelte';
  import FormNavigation from './FormNavigation.svelte';
  import FormButton from './FormButton.svelte';
  import formData from '../stores/formData';

  const addOns = {
    onlineService: {
      title: 'Online service',
      description: 'Access to multiplayer games',
      monthlyPrice: '+$1/mo',
      yearlyPrice: '+$10/yr',
    },
    extraStorage: {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthlyPrice: '+$2/mo',
      yearlyPrice: '+$20/yr',
    },
    customProfile: {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthlyPrice: '+$2/mo',
      yearlyPrice: '+$20/yr',
    },
  };

  function selectAddon(addon) {}
</script>

<div class="sm:flex sm:flex-col sm:h-full">
  <FormHeader
    title="Pick add-ons"
    subtext="Add-ons help enhance your gaming experience."
  />
  <ul class="grid gap-3 my-6 lg:grid-cols-3">
    {#each Object.values(addOns) as addon}
      <li>
        {addon.title}
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
