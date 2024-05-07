<script>
  export let stepCount = 1;
  export let activeStep = 0;
</script>

<body class="text-marine-blue">
  <main class="min-h-lvh flex flex-col items-center">
    <ul class="flex gap-4 my-4">
      {#each { length: stepCount } as _, index}
        <li>
          <button
            type="button"
            class="size-10 aspect-square rounded-full border-[1px] text-white aria-[current='true']:bg-pastel-blue aria-[current='true']:text-inherit"
            aria-current={index === activeStep ? 'true' : ''}
            >{index + 1}</button
          >
        </li>
      {/each}
    </ul>
    <div>
      <slot />
    </div>
  </main>
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
