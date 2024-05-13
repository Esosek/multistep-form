<script>
  import FormHeader from './FormHeader.svelte';
  import FormNavigation from './FormNavigation.svelte';
  import FormButton from './FormButton.svelte';
  import formData, { getTotalPrice } from '../stores/formData';
  import addons from '../data/addons';
  import plans from '../data/plans';

  let { isYearly, selectedPlan, addons: selectedAddons } = $formData;

  let selectedPlanText = `${selectedPlan} (${isYearly ? 'Yearly' : 'Monthly'})`;
  let selectedPlanPrice = `$${isYearly ? `${plans[selectedPlan].yearlyPrice}/yr` : `${plans[selectedPlan].monthlyPrice}/mo`}`;

  function changePlan() {
    formData.previousStep(2);
  }
</script>

<div class="sm:flex sm:flex-col sm:h-full">
  <FormHeader
    title="Finishing up"
    subtext="Double-check everything looks OK before confirming."
  />
  <ul class="p-4 mt-6 bg-marine-blue/5 rounded-lg text-sm">
    <li class="flex justify-between items-center font-bold">
      <div class="flex flex-col items-start">
        <p>{selectedPlanText}</p>
        <button
          on:click={changePlan}
          class="underline text-cool-gray font-normal hover:text-purplish-blue"
          >Change</button
        >
      </div>
      <p>{selectedPlanPrice}</p>
    </li>
    {#if selectedAddons.length > 0}
      <div class="border-t-[1px] border-light-gray my-3 sm:my-5"></div>
      {#each selectedAddons as addonKey}
        <li class="flex justify-between my-2">
          <p class="text-cool-gray">{addonKey}</p>
          <p>
            {isYearly
              ? `+$${addons[addonKey].yearlyPrice}/yr`
              : `+$${addons[addonKey].monthlyPrice}/mo`}
          </p>
        </li>
      {/each}
    {/if}
  </ul>
  <div class="flex justify-between m-6">
    <p class="text-cool-gray">{`Total (per ${isYearly ? 'year' : 'month'})`}</p>
    <p class="text-purplish-blue font-bold">
      {`$${getTotalPrice()}/${isYearly ? 'yr' : 'mo'}`}
    </p>
  </div>

  <FormNavigation>
    <FormButton
      label="Go Back"
      isPrimary={false}
      onPress={formData.previousStep}
    />
    <FormButton
      bgColor="bg-purplish-blue"
      label="Confirm"
      onPress={formData.nextStep}
    />
  </FormNavigation>
</div>
