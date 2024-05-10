<script>
  export let title;
  export let description;
  export let price;
  export let onChange = () => {};
</script>

<li
  class="flex gap-6 border-[1px] rounded-md py-4 px-6 items-center has-[:checked]:border-marine-blue has-[:checked]:bg-purplish-blue/5"
>
  <input
    on:change={onChange}
    type="checkbox"
    name={title}
    id={`${title}-checkbox`}
    class="cursor-pointer accent-purplish-blue size-5"
  />
  <label
    for={`${title}-checkbox`}
    class="flex items-center w-full cursor-pointer"
  >
    <div>
      <p class="font-medium">{title}</p>
      <p class="text-cool-gray text-sm">{description}</p>
    </div>
    <p class="ml-auto text-sm text-purplish-blue">{price}</p>
  </label>
</li>
