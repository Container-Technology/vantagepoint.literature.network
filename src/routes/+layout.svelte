<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>VPN</title>
</svelte:head>

{@render children()}
