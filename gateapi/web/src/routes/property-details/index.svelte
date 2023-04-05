<script lang="ts">
	import Button from '../../components/button.svelte'
	import TextField from '../../components/textField.svelte'
	import Select from '../../components/select.svelte'
	import DatePicker from '../../components/datePicker.svelte'
	import PropertyTypeSelect from '../../components/propertyTypeSelect.svelte'

	import Cash from '../../icons/cash.svelte'
	import Bed from '../../icons/bed.svelte'
	import Bathtub from '../../icons/bathtub.svelte'
	import Persons from '../../icons/persons.svelte'
	import type { PropertyType } from '../../types'

	let selectedBeds = ''
	const optionsBeds = [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4+' },
	]
	function handleSelectBed(value) {
		selectedBeds = value
	}

	let selectedBaths = ''
	const optionsBaths = [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3+' },
	]
	function handleSelectBath(value) {
		selectedBaths = value
	}

	let selectedVacancy = ''
	const optionsVacancy = [
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
		{ value: '5', label: '5' },
		{ value: '6', label: '6' },
		{ value: '7', label: '7' },
		{ value: '8', label: '8' },
		{ value: '9', label: '9' },
		{ value: '10', label: '10+' },
	]
	function handleSelectVacancy(value) {
		selectedVacancy = value
	}

	let availableOn: Date
	function handleAvailableOn(value) {
		availableOn = value
	}

	let propertyType: PropertyType
	function handlePropertyType(value: PropertyType) {
		propertyType = value
	}
</script>

<svelte:head>
	<title>Property details</title>
</svelte:head>

<div class="w-full max-w-4xl m-auto px-6 sm:px-8">
	<header class="mt-16 grid grid-cols-2 gap-8 sm:min-h-[222px] mb-8 sm:mb-0">
		<div class="col-span-2 sm:col-span-1">
			<h1 class="text-3xl mb-4">Property details</h1>

			<p class="text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam.
			</p>
		</div>

		<div class="max-w-[350px] w-full place-self-end hidden sm:block">
			<div class="relative w-full pt-[63.71%]">
				<img
					class="w-full h-full absolute inset-0"
					src="/images/illustration-propertyPage.png"
					alt=""
				/>
			</div>
		</div>
	</header>

	<div class="sm:w-1/2 sm:pr-4 space-y-4 sm:-mt-8 md:-mt-14 mb-8">
		<TextField label="Property name" />
		<TextField label="Address" />
	</div>

	<PropertyTypeSelect value={propertyType} onSelect={handlePropertyType} />

	<div>
		<p class="mb-2 font-medium">Unit info</p>

		<div
			class="p-6 border border-primary-lighter space-y-6 rounded shadow-xl mb-16"
		>
			<div class="grid grid-cols-1 sm:grid-cols-4 gap-6">
				<TextField label="Unit name" placeholder="Name and/or number" />
				<TextField label="Rent" preInput={Cash} postInput="/mo" />
				<TextField label="Deposit" preInput={Cash} postInput="/mo" />
				<TextField label="Lease Length (months)" />
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-5 gap-6">
				<Select
					options={optionsBeds}
					selectedValue={selectedBeds}
					onSelect={handleSelectBed}
					label="Beds"
					icon={Bed}
				/>

				<Select
					options={optionsBaths}
					selectedValue={selectedBaths}
					onSelect={handleSelectBath}
					label="Baths"
					icon={Bathtub}
				/>

				<TextField label="Sq. Ft." />

				<DatePicker
					date={availableOn}
					onDateChange={handleAvailableOn}
					label="Available on"
				/>

				<Select
					options={optionsVacancy}
					selectedValue={selectedVacancy}
					onSelect={handleSelectVacancy}
					label="Vacancy"
					icon={Persons}
				/>
			</div>
		</div>
	</div>

	<div class="flex justify-between mb-8">
		<Button label="Back" variant="outlined" />
		<Button label="Continuar" />
	</div>
</div>
