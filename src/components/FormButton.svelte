<script>
  export let label = 'Next Step';
  export let type = 'submit';
  export let isPrimary = true;
  export let onPress = () => {};

  let classes =
    'bg-marine-blue text-white rounded-md py-2 px-4 sm:px-6 hover:bg-marine-blue/85';

  if (!isPrimary) {
    classes = 'text-cool-gray hover:text-marine-blue';
  }
</script>

<button on:click={onPress} {type} class={`block transition-colors ${classes}`}
  >{label}</button
>
