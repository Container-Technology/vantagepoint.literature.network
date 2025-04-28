<script lang="ts">
  import { fade } from 'svelte/transition';
  import { connectionLoaded } from '$lib/store';

  const connectionLimit = 12;

  let connection = '';
  let step = 0;

  const connectionInterval = setInterval(() => {
    if (step >= connectionLimit) {
      clearInterval(connectionInterval);
      $connectionLoaded = true;
    }

    if (step % 2 === 0) {
      connection += '=';
    } else {
      connection += '𓏵';
    }

    step++;
  }, 300);
</script>

<header class="mb-10 flex w-full flex-col flex-wrap lg:flex-col">
  <div class="flex flex-row gap-5">
    {connection}
  </div>

  {#if $connectionLoaded === true}
    <div
      class="flex flex max-w-12/12 px-0 pt-5 text-lg text-gray-200 lg:max-w-8/12 lg:text-base xl:max-w-6/12"
      in:fade={{ delay: 300 }}
    >
      <p class="bio">
        The Vantage Point Literature Network (VPN) meets at <a
          href="https://trust.support/"
          target="_blank"
          class="underline">Trust</a
        >, to look into, around and beyond the political possibilities of technology.
      </p>
    </div>
  {/if}
</header>

<style>
  li:not(:last-child) {
    border-bottom: 1px solid #99a1af50;
  }
</style>
