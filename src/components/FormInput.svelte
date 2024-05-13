<script>
  export let id;
  export let label;
  export let type;
  export let value;
  export let placeholder;
  export let hasError = false;
  export let errorMessage = 'This field is required';
  export let classes = '';
  export let onChange = () => {};
</script>

<div class={`my-3 ${classes}`}>
  <div class="flex justify-between">
    <label for={id} class="text-sm">{label}</label>
    {#if hasError}
      <p class="text-strawberry-red font-bold text-sm">
        {errorMessage}
      </p>
    {/if}
  </div>
  <input
    {type}
    {value}
    name={id}
    {id}
    {placeholder}
    on:input={onChange}
    class={`block py-2 px-4 w-full border-[1px] ${hasError ? 'border-strawberry-red' : 'border-light-gray'} rounded-md outline-none sm:mt-1 focus:border-purplish-blue`}
  />
</div>
