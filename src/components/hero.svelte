<script lang="ts">
	import logo from '../assets/logo-straight.svg';
	import pepsi from '../assets/pepsi.svg';
	import coca from '../assets/coca-cola.svg';
	import arduino from '../assets/arduino.svg';
	import microsoft from '../assets/microsoft.svg';
	import discord from '../assets/discord.svg';
	import yahoo from '../assets/yahoo.svg';
</script>

<div class="flex flex-col h-[calc(100vh-100px)] items-start justify-start px-28 gap-24">
	<div class="flex flex-col min-h-[55vh] items-center justify-end gap-6">
		<img src={logo} alt="logo" class="w-28 h-28" />
		<h1 class="text-6xl font-semibold text-center max-w-[56vw] leading-[70px]">
			Empowered way to develop pages <span class="font-bold"> only with Prisma technology </span>
		</h1>
		<p class="text-xl text-center">Experience the next generation of landing page solutions</p>
		<button
			class="hidden lg:flex rounded-full font-semibold text-white py-2 px-12 bg-prisma-500 hover:bg-prisma-600 transition-colors"
			>
			Start now
		</button>
	</div>
	<div class="flex h-full w-full flex-col justify-start items-center">
		<p class="text-gray-400">Trusted by 100+ companies from over 128 countries worldwide</p>
		<div class="flex flex-row gap-8">
			<img src={pepsi} alt="pepsi" class="w-24 h-24" />
			<img src={coca} alt="coca" class="w-24 h-24" />
			<img src={arduino} alt="arduino" class="w-24 h-24" />
			<img src={microsoft} alt="microsoft" class="w-24 h-24" />
			<img src={discord} alt="discord" class="w-24 h-24" />
			<img src={yahoo} alt="yahoo" class="w-24 h-24" />
		</div>
	</div>
</div>
