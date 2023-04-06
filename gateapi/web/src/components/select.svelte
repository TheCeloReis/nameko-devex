<script lang="ts">
	import type { SvelteComponent } from 'svelte'
	import ArrowDown from '../icons/arrowDown.svelte'
	import { onMount } from 'svelte'
	import clsx from 'clsx'

	export let label: string = ''
	export let options: Array<{ value: string; label: string }> = []
	export let selectedValue = ''
	export let onSelect: (value: string) => void = () => {}
	export let icon: any = null

	let isOpen = false
	let buttonElement
	let listElement
	let focusedOptionIndex = -1

	function handleSelect(value: string) {
		onSelect(value)
		selectedValue = value
		isOpen = false
	}

	function handleButtonClick() {
		isOpen = !isOpen
		if (isOpen) {
			setTimeout(() => {
				listElement.focus()
			}, 500)
		}
	}

	function handleListBlur() {
		isOpen = false
	}

	function handleListKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			isOpen = false
			buttonElement.focus()
		} else if (event.key === 'ArrowDown') {
			event.preventDefault()
			focusedOptionIndex = Math.min(focusedOptionIndex + 1, options.length - 1)
		} else if (event.key === 'ArrowUp') {
			event.preventDefault()
			focusedOptionIndex = Math.max(focusedOptionIndex - 1, 0)
		} else if (event.key === 'Enter' && focusedOptionIndex >= 0) {
			handleSelect(options[focusedOptionIndex].value)
		}
	}

	onMount(() => {
		document.addEventListener('click', (event: MouseEvent) => {
			if (![buttonElement, listElement].includes(event.target as HTMLElement)) {
				isOpen = false
			}
		})

		return () => {
			document.removeEventListener('click', (event: MouseEvent) => {
				if (
					![buttonElement, listElement].includes(event.target as HTMLElement)
				) {
					isOpen = false
				}
			})
		}
	})

	const id = Math.random().toString(36).substr(2, 9)
</script>

<div class="relative flex flex-col">
	{#if label}
		<label for={id} class="leading-4 mb-1 font-medium">
			{label}
		</label>
	{/if}

	<button
		bind:this={buttonElement}
		aria-haspopup="listbox"
		aria-expanded={isOpen}
		class={clsx(
			'w-full h-12 bg-white border border-primary-lighter rounded px-3 py-3.5 focus:outline-none focus:border-primary pr-10 leading-5',
			icon && 'pl-10'
		)}
		on:click={handleButtonClick}
	>
		{selectedValue
			? options.find((option) => option.value === selectedValue).label
			: 'Select'}
	</button>

	{#if icon}
		<span class="absolute left-3 top-8">
			<svelte:component this={icon} />
		</span>
	{/if}

	<span class="absolute right-3 top-10">
		<ArrowDown />
	</span>

	{#if isOpen}
		<ul
			{id}
			bind:this={listElement}
			tabindex="0"
			role="listbox"
			aria-label="Select options"
			class="absolute w-full mt-1 top-16 bg-white border border-gray-300 rounded shadow z-50 font-amplitudeBook"
			on:blur={handleListBlur}
			on:keydown={handleListKeyDown}
		>
			{#each options as option, index (option.value)}
				<li
					role="option"
					aria-selected={selectedValue === option.value}
					class="px-3 py-2 hover:bg-gray-200 cursor-pointer {focusedOptionIndex ===
					index
						? 'bg-gray-200'
						: ''}"
					on:click={() => handleSelect(option.value)}
					on:keydown={(event) => {
						if (event.key === 'Enter') {
							handleSelect(option.value)
						}
					}}
				>
					{option.label}
				</li>
			{/each}
		</ul>
	{/if}
</div>
