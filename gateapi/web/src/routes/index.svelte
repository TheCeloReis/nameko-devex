<script context="module" lang="ts">
	import { ROUTES } from './routes'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen bg-gray-100">
	<div class="max-w-lg w-full">
		<main class="flex flex-col items-center space-y-4">
			{#each Object.entries(ROUTES) as [name, route]}
				<a
					class="w-full py-4 px-6 text-center bg-white hover:bg-border-color rounded-md shadow-md transition duration-300 text-primary border-2 border-primary"
					href={route}
				>
					{name}
				</a>
			{/each}
		</main>
	</div>
</div>
