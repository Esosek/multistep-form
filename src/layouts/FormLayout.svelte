<script>
  import { onMount } from 'svelte';
  import formData from '../stores/formData';

  export let steps = ['step 1', 'step 2'];

  let footer;
  let main;

  onMount(() => {
    footer = document.getElementById('form-navigation');
    main = document.getElementsByTagName('main')[0];

    if (main && footer && window.screen.width <= 640) {
      main.style.marginBottom = `calc(${footer.clientHeight}px + 1rem)`;
    }
  });
</script>

<body
  class="text-marine-blue bg-magnolia min-h-lvh flex justify-center sm:items-center"
>
  <main
    class="flex flex-col items-center w-full max-w-5xl sm:bg-white sm:grid sm:grid-cols-[min(274px_,35%)_2fr] sm:rounded-xl sm:shadow-lg sm:mx-4 sm:p-4"
  >
    <ul
      class="flex gap-4 my-8 sm:flex-col sm:max-w-[274px] sm:min-h-[568px] sm:rounded-xl sm:my-0 sm:p-6 sm:gap-6"
    >
      {#each steps as _, index}
        <li class="sm:flex sm:gap-4">
          <div
            type="button"
            class="flex items-center justify-center size-10 rounded-full border-[1px] text-white font-medium aria-[current='true']:bg-light-blue aria-[current='true']:text-inherit"
            aria-current={index === $formData.currentStep ? 'true' : ''}
          >
            {index + 1}
          </div>
          <div class="hidden sm:grid uppercase text-sm">
            <p class="text-xs text-cool-gray">Step {index + 1}</p>
            <p class="tracking-wider text-white">{steps[index]}</p>
          </div>
        </li>
      {/each}
    </ul>
    <div
      class="content-wrap bg-white rounded-lg w-[92%] p-5 shadow-lg sm:px-10 md:px-20 sm:bg-transparent sm:shadow-none sm:h-full sm:w-auto sm:m-0"
    >
      <slot />
    </div>
  </main>
</body>

<style>
  main {
    background-image: url('/assets/images/bg-sidebar-mobile.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }

  /* Move navigation buttons bottom */
  :global(.content-wrap > :only-child > *:nth-last-child(2)) {
    flex-grow: 1;
  }

  @media only screen and (min-width: 640px) {
    main {
      background-image: none;
    }
    ul {
      background-image: url('/assets/images/bg-sidebar-desktop.svg');
      background-repeat: no-repeat;
    }
  }
</style>
