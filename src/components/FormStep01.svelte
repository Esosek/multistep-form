<script>
  import FormInput from './FormInput.svelte';
  import FormNavigation from './FormNavigation.svelte';
  import FormButton from './FormButton.svelte';
  import FormHeader from './FormHeader.svelte';
  import formData from '../stores/formData';

  const formErrors = {
    name: false,
    email: false,
    phone: false,
  };

  function submitForm(e) {
    e.preventDefault();
    console.log('form submitted!');
    if (isFormValid()) {
      formData.next();
    }
  }

  function isFormValid() {
    //TODO: Form validation
    return true;
  }
</script>

<form on:submit={submitForm} class="sm:flex sm:flex-col sm:h-full">
  <FormHeader
    title="Personal info"
    subtext="Please provide your name, email address, and phone number."
  />
  <FormInput
    id="username"
    label="Name"
    placeholder="e.g. Thomas A. Anderson"
    type="text"
    hasError={formErrors.name}
  />
  <FormInput
    id="email"
    label="Email Address"
    placeholder="e.g. neo@sion.mx"
    type="email"
    hasError={formErrors.email}
  />
  <FormInput
    id="phone"
    label="Phone Number"
    placeholder="e.g. +1 234 567 890"
    type="tel"
    hasError={formErrors.phone}
  />
  <FormNavigation justifyContent="justify-end">
    <FormButton type="submit" />
  </FormNavigation>
</form>
