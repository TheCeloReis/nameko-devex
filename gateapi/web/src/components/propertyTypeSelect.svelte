<script lang="ts">
	export let value: PropertyType = 'multi'
	export let onSelect: (value: PropertyType) => void = () => {}

	import type { PropertyType } from '../types'
	import Condo from '../icons/condo.svelte'
	import SingleFamily from '../icons/singleFamily.svelte'
	import MultiFamily from '../icons/multiFamily.svelte'
	import Townhome from '../icons/townhome.svelte'
	import clsx from 'clsx'

	const propertyTypes: { id: PropertyType; label: string; icon: any }[] = [
		{ id: 'single', label: 'Single-Family', icon: SingleFamily },
		{ id: 'multi', label: 'Multi-Family', icon: MultiFamily },
		{ id: 'town', label: 'Townhome', icon: Townhome },
		{ id: 'condo', label: 'Condo', icon: Condo },
	]
</script>

<div class="mb-8">
	<p class="mb-1 font-medium">Property Type</p>

	<ul class="grid grid-cols-2 sm:grid-cols-4 gap-5">
		{#each propertyTypes as { id, label, icon: Icon }}
			<li class="h-[72px] w-full">
				<button
					class="rounded border w-full h-full flex items-center justify-center space-x-3 transition-colors
						{value === id
						? 'border-primary bg-border-color'
						: 'border-primary-lighter bg-white hover:bg-border-color'}"
					on:click={() => onSelect(id)}
				>
					<Icon
						className={value === id ? 'fill-primary' : 'fill-primary-darker'}
					/>
					<span
						class={clsx(
							value === id ? 'text-primary' : 'text-primary-darker',
							'text-medium text-sm sm:text-base'
						)}>{label}</span
					>
				</button>
			</li>
		{/each}
	</ul>
</div>
