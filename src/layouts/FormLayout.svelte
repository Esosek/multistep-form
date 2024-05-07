<script>
  export let stepCount = 1;
  export let activeStep = 0;
</script>

<body class="text-marine-blue bg-magnolia min-h-lvh">
  <main class="flex flex-col items-center">
    <ul class="flex gap-4 my-8">
      {#each { length: stepCount } as _, index}
        <li>
          <button
            type="button"
            class="size-10 aspect-square rounded-full border-[1px] text-white font-medium aria-[current='true']:bg-light-blue aria-[current='true']:text-inherit"
            aria-current={index === activeStep ? 'true' : ''}
            >{index + 1}</button
          >
        </li>
      {/each}
    </ul>
    <div class="bg-white rounded-lg w-[90%] mx-4 p-8 shadow-lg">
      <slot />
    </div>
  </main>
  <div
    class="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1 )]"
  >
    <button class="block bg-marine-blue text-white ml-auto py-2 px-4 rounded-md"
      >Next Step</button
    >
  </div>
</body>

<style>
  main {
    background-image: url('/assets/images/bg-sidebar-mobile.svg');
    background-repeat: no-repeat;
  }

  @media only screen and (min-width: 600px) {
    main {
      background-image: url('/assets/images/bg-sidebar-desktop.svg');
    }
  }
</style>
