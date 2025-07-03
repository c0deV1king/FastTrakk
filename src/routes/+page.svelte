<script lang="ts">
    import DemoScene from '$lib/components/three/DemoScene.svelte';
</script>

<svelte:head>
    <title>SvelteKit + ThreeJS</title>
</svelte:head>

<h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<section class="w-full h-96">
    <DemoScene />
</section>

<style lang="postcss">
@reference "tailwindcss";
</style>