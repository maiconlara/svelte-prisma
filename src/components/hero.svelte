<script lang="ts">
	import logo from '../assets/logo-straight.svg';
	import pepsi from '../assets/pepsi.svg';
	import coca from '../assets/coca-cola.svg';
	import arduino from '../assets/arduino.svg';
	import microsoft from '../assets/microsoft.svg';
	import discord from '../assets/discord.svg';
	import yahoo from '../assets/yahoo.svg';
</script>

<div class="flex flex-col h-[calc(100vh-100px)] items-start justify-start px-28 gap-12 3xl:gap-24">
	<div class="flex flex-col min-h-[55vh] items-center w-full justify-end gap-4 3xl:gap-6">
		<img src={logo} alt="logo" class="w-24 2xl:w-28 h-24 2xl:h-28" />
		<div class="flex flex-col items-center justify-center">
			<h1
				class=" md:text-3xl lg:text-4xl 3xl:text-6xl font-semibold text-center w-full 3xl:leading-[70px]"
			>
				Empowered way to develop pages
			</h1>
			<h1
				class=" md:text-3xl lg:text-4xl 3xl:text-6xl font-bold text-center w-full 3xl:leading-[70px]"
			>
				only with Prisma technology
			</h1>
		</div>
		<p class="text-md 3xl:text-xl text-center">
			Experience the next generation of landing page solutions
		</p>
		<button
			class="hidden md:flex rounded-full font-semibold text-white py-2 px-12 bg-prisma-500 hover:bg-prisma-600 transition-colors"
		>
			Start now
		</button>
	</div>
	<div class="hidden md:flex h-full w-[80vw] flex-col justify-start items-center">
		<div class="flex flex-col w-full h-full items-center justify-center">
			<p class="text-gray-400">Trusted by 100+ companies from over 128 countries worldwide</p>
			<div class="flex flex-row gap-8">
				<img src={pepsi} alt="pepsi" class="w-16 lg:w-24 h-16 lg:h-24" />
				<img src={coca} alt="coca" class="w-16 lg:w-24 h-16 lg:h-24" />
				<img src={arduino} alt="arduino" class="w-16 lg:w-24 h-16 lg:h-24" />
				<img src={microsoft} alt="microsoft" class="w-16 lg:w-24 h-16 lg:h-24" />
				<img src={discord} alt="discord" class="w-16 lg:w-24 h-16 lg:h-24" />
				<img src={yahoo} alt="yahoo" class="w-20 lg:w-24 h-16 lg:h-24" />
			</div>
		</div>
	</div>
</div>
