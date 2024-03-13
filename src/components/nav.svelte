<script lang="ts">
	import logo from '../assets/logo-text.svg';
	import NavButton from './nav-button.svelte';
</script>

<div
	class="flex max-w-full max-h-[100px] min-h-[100px] shadow w-full h-full sticky top-0 left-0 justify-between px-28 items-center transition-colors overflow-hidden"
>
	<div class="flex flex-row h-full items-center justify-center gap-12">
		<img src={logo} alt="logo" class="w-32 h-32 mr-10" />
		<NavButton text="Home" />
		<NavButton text="Products" />
		<NavButton text="Prices" />
		<NavButton text="About" />
	</div>
  <button class="hidden lg:flex rounded-full font-semibold text-white py-2 px-6 bg-prisma-500 hover:bg-prisma-600 transition-colors ">
    Sign in
  </button>
</div>
