<script>
  import FormInput from './FormInput.svelte';
</script>

<form>
  <h1 class="text-2xl font-bold my-2">Personal info</h1>
  <p class="text-cool-gray">
    Please provide your name, email address, and phne number.
  </p>
  <FormInput
    id="username"
    label="Name"
    placeholder="e.g. Thomas A. Anderson"
    type="text"
  />
  <FormInput
    id="email"
    label="Email Address"
    placeholder="e.g. neo@sion.mx"
    type="email"
  />
  <FormInput
    id="phone"
    label="Phone Number"
    placeholder="e.g. +1 234 567 890"
    type="phone"
  />
</form>
