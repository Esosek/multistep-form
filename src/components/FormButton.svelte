<script>
  export let label = 'Next Step';
  export let type = 'submit';
</script>

<div
  class="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1 )] sm:static sm:flex sm:items-end sm:flex-grow sm:shadow-none sm:bg-transparent sm:p-0"
>
  <button
    {type}
    class="block bg-marine-blue text-white ml-auto py-2 px-4 rounded-md sm:px-6 hover:bg-marine-blue/85"
    >{label}</button
  >
</div>
