<script lang="ts">
	export let value: 'single' | 'multi' | 'town' | 'condo' = 'multi'
	export let onSelect: (
		value: 'single' | 'multi' | 'town' | 'condo'
	) => void = () => {}

	import Condo from '../icons/condo.svelte'
	import SingleFamily from '../icons/singleFamily.svelte'
	import MultiFamily from '../icons/multiFamily.svelte'
	import Townhome from '../icons/townhome.svelte'

	const propertyTypes = [
		{ id: 'single', label: 'Single-Family', icon: SingleFamily },
		{ id: 'multi', label: 'Multi-Family', icon: MultiFamily },
		{ id: 'town', label: 'Townhome', icon: Townhome },
		{ id: 'condo', label: 'Condo', icon: Condo },
	]
</script>

<div class="mb-8">
	<p>Property Type</p>

	<ul class="grid grid-cols-4 gap-5">
		{#each propertyTypes as { id, label, icon: Icon }}
			<li class="h-[72px] w-full">
				<button
					class="rounded border w-full h-full flex items-center justify-center space-x-3 transition-colors
						{value === id
						? 'border-primary bg-primary-lightest'
						: 'border-primary-lighter bg-white hover:bg-primary-lightest'}"
					on:click={() => onSelect(id)}
				>
					<Icon className={value === id ? 'fill-primary' : 'fill-text'} />
					<span
						class="text-medium {value === id ? 'text-primary' : 'text-text'}"
						>{label}</span
					>
				</button>
			</li>
		{/each}
	</ul>
</div>
