<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Feed from '$lib/components/Feed.svelte';

	export let data;

	const { blocks } = data;

	console.log(blocks)

  let windowWidth: number;

  let filterBreakpointActive: boolean = false;

  $: {
    filterBreakpointActive = windowWidth >= 1024;
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<main class="flex flex-wrap p-5">
  <Card />
	<Feed events={blocks}/>
</main>
