<script lang="ts">
	import type { SvelteComponent } from 'svelte'
	import clsx from 'clsx'

	export let value = ''
	export let type = 'text'
	export let placeholder = ''
	export let label = ''
	export let onInput: (value: string) => void = () => {}
	export let preInput: typeof SvelteComponent = null
	export let postInput = ''

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement
		onInput(target.value)
	}

	const id = Math.random().toString(36).substr(2, 9)
</script>

<div class="flex flex-col">
	{#if label}
		<label for={id} class="leading-4 mb-1 font-medium">
			{label}
		</label>
	{/if}

	<div class="relative">
		{#if preInput}
			<span class="absolute left-3 top-3.5 text-sm fill-primary-dark">
				<svelte:component this={preInput} />
			</span>
		{/if}
		<input
			{id}
			{type}
			{value}
			{placeholder}
			on:input={handleInput}
			class={clsx(
				'h-12 border border-primary-lighter rounded px-3 py-3.5 leading-4 focus:outline-none focus:border-primary w-full font-amplitudeBook',
				preInput && 'pl-10',
				postInput && 'pr-10'
			)}
		/>
		{#if postInput}
			<span
				class="absolute right-3 top-4 text-sm text-primary-dark pointer-events-none select-none font-amplitudeBook"
				>{postInput}</span
			>
		{/if}
	</div>
</div>
