<script>
  import FormHeader from './FormHeader.svelte';
  import FormNavigation from './FormNavigation.svelte';
  import FormButton from './FormButton.svelte';
  import formStepCounter from '../stores/formStepCounter';
</script>

<div class="sm:flex sm:flex-col sm:h-full">
  <FormHeader
    title="Select your plan"
    subtext="You have the option of monthly of yearly billing."
  />
  <FormNavigation>
    <FormButton
      label="Go Back"
      isPrimary={false}
      onPress={() => formStepCounter.back()}
    />
    <FormButton />
  </FormNavigation>
</div>
