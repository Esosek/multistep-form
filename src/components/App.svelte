<script>
  import FormLayout from '../layouts/FormLayout.svelte';
  import FormStep01 from './FormStep01.svelte';
</script>

<FormLayout stepCount={4} activeStep={0}>
  <FormStep01 />
</FormLayout>
