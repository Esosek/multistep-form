<script>
  import FormInput from './FormInput.svelte';
  import FormButton from './FormButton.svelte';

  let formErrors = {
    name: false,
    email: false,
    phone: false,
  };

  function submitForm(e) {
    e.preventDefault();
    console.log('form submitted!');
    if (isFormValid()) {
      //TODO: Move to next step
    }
  }

  function isFormValid() {
    //TODO: Form validation
    return true;
  }
</script>

<form on:submit={submitForm} class="sm:flex sm:flex-col sm:h-full">
  <h1 class="text-2xl font-bold my-2">Personal info</h1>
  <p class="text-cool-gray mb-6">
    Please provide your name, email address, and phne number.
  </p>
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
    type="phone"
    hasError={formErrors.phone}
  />
  <FormButton />
</form>
