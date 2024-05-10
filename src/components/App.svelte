<script>
  import FormLayout from '../layouts/FormLayout.svelte';
  import formData from '../stores/formData';
  import FormStep01 from './FormStep01.svelte';
  import FormStep02 from './FormStep02.svelte';
  import FormStep03 from './FormStep03.svelte';
  import FormStep04 from './FormStep04.svelte';

  const steps = ['your info', 'select plan', 'add-ons', 'summary'];
</script>

<FormLayout {steps}>
  {#if $formData.currentStep === 0}
    <FormStep01 />
  {:else if $formData.currentStep === 1}
    <FormStep02 />
  {:else if $formData.currentStep === 2}
    <FormStep03 />
  {:else if $formData.currentStep === 3}
    <FormStep04 />
  {/if}
</FormLayout>
