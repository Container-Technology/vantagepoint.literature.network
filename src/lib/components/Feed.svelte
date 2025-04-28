<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Heartbeat from '$lib/components/Heartbeat.svelte';
	import { connectionLoaded } from '$lib/store';

	export let events: any[] = [];

	const eventSwitches = Array(events.length + 1).fill(false);

	const eventVars = events
		.map(({ description }, i) => `--event-${i}: ${description}`)
		.join('; ');


	connectionLoaded.subscribe((loaded) => {
		if (loaded) {
			events.forEach((_, i) => {
				setTimeout(() => {
					eventSwitches[i] = true;
				}, 2000 + (i * 1500));
			});
		}
	})
</script>

{#if $connectionLoaded}
	<ul
		class="text-gray-200 text-lg lg:text-base lg:max-w-8/12 xl:max-w-6/12"
		style={eventVars}>
		{#each events as event, i}
			{#if eventSwitches[i]}
				<li
					class="event mb-5"
					in:fade
					>
					{event.title}	<br> 
					<span style={`background: var(--event-${i})`}>
						{@html event.content}
					</span>
				</li>
			{/if}
		{/each}
		<li
			class="event"
			in:fade={{ delay: (1500 * (events.length + 1))}}
			>
			<Heartbeat />
		</li>
	</ul>
{/if}

<style>
	:global(.event span > *:not(a)) {
		background: #000 !important;
	}

	:global(.event a:not(.heartbeat):hover) {
		opacity: 0.5;
	}
</style>

