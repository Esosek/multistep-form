<script>
  export let id;
  export let label;
  export let type;
  export let placeholder;
  export let hasError = false;
  export let flexGrow = false;
</script>

<div class={`my-3 ${flexGrow ? 'flex-grow' : ''}`}>
  <div class="flex justify-between">
    <label for={id} class="text-sm">{label}</label>
    {#if hasError}
      <p class="text-strawberry-red font-bold text-sm">
        This field is required
      </p>
    {/if}
  </div>
  <input
    {type}
    name={id}
    {id}
    {placeholder}
    class={`block py-2 px-4 w-full border-[1px] ${hasError ? 'border-strawberry-red' : 'border-light-gray'} rounded-md outline-none sm:mt-1 focus:border-purplish-blue`}
  />
</div>
