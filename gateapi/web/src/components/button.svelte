<script lang="ts">
	import clsx from 'clsx'

	export let label: string = ''
	export let type: 'submit' | 'button' | 'reset' = 'button'
	export let variant: 'filled' | 'outlined' = 'filled'
	export let onClick = () => {}
</script>

<button
	class={clsx(
		'border border-primary-light uppercase p-3 font-medium rounded-full min-w-[7.75rem] leading-4 transition font-inter',
		variant === 'filled'
			? 'bg-primary-light text-white hover:bg-primary'
			: 'bg-white text-primary-darker hover:bg-border-color'
	)}
	{type}
	on:click={onClick}>{label}</button
>
