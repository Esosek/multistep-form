<script>
  export let title = 'title';
  export let description = 'description';
  export let price = 0;
  export let value = false;
  export let onChange = () => {};
</script>

<li class="">
  <label
    for={`${title}-checkbox`}
    class="flex gap-3 border-[1px] cursor-pointer rounded-md p-3 lg:gap-6 lg:py-4 lg:px-6 items-center hover:border-marine-blue has-[:checked]:border-marine-blue has-[:checked]:bg-purplish-blue/5 transition-colors"
  >
    <input
      on:change={onChange}
      type="checkbox"
      checked={value}
      name={title}
      id={`${title}-checkbox`}
      class="cursor-pointer accent-purplish-blue size-5"
    />

    <div>
      <p class="font-medium">{title}</p>
      <p class="text-cool-gray text-sm">{description}</p>
    </div>
    <p class="ml-auto text-xs text-purplish-blue">{price}</p>
  </label>
</li>
