<script>
  import FormLayout from '../layouts/FormLayout.svelte';
  import formData from '../stores/formData';
  import FormStep01 from './FormStep01.svelte';
  import FormStep02 from './FormStep02.svelte';

  const steps = ['your info', 'select plan', 'add-ons', 'summary'];
</script>

<FormLayout {steps}>
  {#if $formData === 0}
    <FormStep01 />
  {:else if $formData === 1}
    <FormStep02 />
  {/if}
</FormLayout>
