<script lang="ts">
	export let date: Date = new Date()
	export let onDateChange: (newDate: Date) => void = () => {}
	export let label: string = 'Select a date'

	import Calendar from '../icons/calendar.svelte'

	function handleDateChange(event: Event) {
		const newDate = new Date((event.target as HTMLInputElement).value)
		onDateChange(newDate)
		date = newDate
	}
</script>

<div class="flex flex-col relative">
	<label for="datepicker" class="leading-4 mb-1 font-medium">{label}</label>
	<input
		id="datepicker"
		type="date"
		value={date.toISOString().slice(0, 10)}
		on:input={handleDateChange}
		class="h-12 border border-primary-lighter rounded px-3 pr-2 pl-10 focus:outline-none focus:border-primary text-sm font-amplitudeBook"
	/>
	<button class="absolute left-3 top-8">
		<Calendar className="fill-primary-dark" />
	</button>
</div>

<style>
	/* create invisible native calendar picker on top of the customized datapicker */
	input[type='date']::-webkit-inner-spin-button,
	input[type='date']::-webkit-calendar-picker-indicator {
		opacity: 0;
		position: absolute;
		z-index: 100;
		top: 20px;
		left: 0;
		height: 48px;
		width: 40px;
		cursor: pointer;
	}
</style>
