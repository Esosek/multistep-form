<script>
  export let id;
  export let label;
  export let type;
  export let placeholder;
</script>

<div class="my-3">
  <label for={id} class="text-sm">{label}</label>
  <input
    {type}
    name={id}
    {id}
    {placeholder}
    class="block py-2 px-4 w-full border-[1px] rounded-md sm:mt-1"
  />
</div>
