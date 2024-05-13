<script>
  export let value = false;
  export let onToggle = () => {};
</script>

<label class="flex items-center cursor-pointer">
  <input
    type="checkbox"
    checked={value}
    class="sr-only peer"
    on:change={onToggle}
  />
  <div
    class="relative w-12 h-6 bg-marine-blue rounded-full peer peer-checked:after:translate-x-6 rtl:peer-checked:after:-translate-x-6 after:content-[''] after:absolute after:top-1 after:start-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"
  ></div>
</label>
