<script>
  import FormLayout from '../layouts/FormLayout.svelte';
  import FormStep01 from './FormStep01.svelte';

  const steps = ['your info', 'select plan', 'add-ons', 'summary'];
</script>

<FormLayout {steps} activeStep={0}>
  <FormStep01 />
</FormLayout>
