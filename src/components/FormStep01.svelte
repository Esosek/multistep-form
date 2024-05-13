<script>
  import FormInput from './FormInput.svelte';
  import FormNavigation from './FormNavigation.svelte';
  import FormButton from './FormButton.svelte';
  import FormHeader from './FormHeader.svelte';
  import formData from '../stores/formData';

  const userData = $formData.user;

  let name = userData.name;
  let email = userData.email;
  let phone = userData.phone;

  let formErrors = {
    name: false,
    email: false,
    phone: false,
  };

  function submitForm(e) {
    e.preventDefault();
    if (isFormValid()) {
      formData.setUserData({ name, email, phone });
      formData.nextStep();
    }
  }

  function isFormValid() {
    formErrors = {
      name: !isNameValid(),
      email: !isEmailValid(),
      phone: !isPhoneValid(),
    };

    return !Object.values(formErrors).includes(true);
  }

  function isNameValid() {
    return name.trim().length > 2;
  }

  function isEmailValid() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isPhoneValid() {
    const phoneRegex = /^\+?[0-9]{8,}$/;
    return phoneRegex.test(phone);
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
    value={name}
    onChange={(e) => {
      name = e.target.value;
      formErrors.name = false;
    }}
    hasError={formErrors.name}
  />
  <FormInput
    id="email"
    label="Email Address"
    placeholder="e.g. neo@sion.mx"
    type="email"
    value={email}
    onChange={(e) => {
      email = e.target.value;
      formErrors.email = false;
    }}
    hasError={formErrors.email}
  />
  <FormInput
    id="phone"
    label="Phone Number"
    placeholder="e.g. +1 234 567 890"
    type="tel"
    value={phone}
    onChange={(e) => {
      phone = e.target.value;
      formErrors.phone = false;
    }}
    hasError={formErrors.phone}
    classes="flex-grow"
  />
  <FormNavigation justifyContent="justify-end">
    <FormButton type="submit" />
  </FormNavigation>
</form>
