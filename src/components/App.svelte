<script>
  import FormLayout from '../layouts/FormLayout.svelte';
  import formStepCounter from '../stores/formStepCounter';
  import FormStep01 from './FormStep01.svelte';
  import FormStep02 from './FormStep02.svelte';

  const steps = ['your info', 'select plan', 'add-ons', 'summary'];
</script>

<FormLayout {steps}>
  {#if $formStepCounter === 0}
    <FormStep01 />
  {:else if $formStepCounter === 1}
    <FormStep02 />
  {/if}
</FormLayout>
