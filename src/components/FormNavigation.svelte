<script>
  export let justifyContent = 'justify-between';
</script>

<div
  id="form-navigation"
  class="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1 )] sm:static flex {justifyContent} items-center sm:shadow-none sm:bg-transparent sm:p-0"
>
  <slot />
</div>
