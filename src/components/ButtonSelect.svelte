<script>
  export let iconPath;
  export let label = 'Label';
  export let subtext;
  export let isSelected = false;
  export let showFreeOffer = false;
  export let onPress = () => {};
</script>

<button
  on:click={onPress}
  class={`flex items-center gap-4 w-full border-[1px]
  p-3 rounded-lg lg:flex-col lg:items-start lg:gap-12 hover:border-purplish-blue transition-colors ${isSelected ? 'border-purplish-blue bg-magnolia' : 'border-light-gray'}`}
>
  {#if iconPath}
    <img src={iconPath} alt="" />
  {/if}

  <div class="flex flex-col text-left">
    <p class="font-bold">{label}</p>
    <p class="text-sm text-cool-gray">{subtext}</p>
    {#if showFreeOffer}
      <p class="text-xs mt-1">2 months free</p>
    {/if}
  </div>
</button>
