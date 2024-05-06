<script>
  export let activeStep = 0;
</script>

<body>
  <main class="min-h-lvh">
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
