<script lang="ts">
	import logo from '../assets/logo-straight.svg';
</script>

<div class="flex flex-col h-[calc(100vh-100px)] items-center justify-center px-28">
	<div class="flex flex-col items-center justify-center gap-6 mt-[-100px]">
		<img src={logo} alt="logo" class="w-28 h-28" />
		<h1 class="text-6xl font-semibold text-center max-w-[56vw] leading-[70px]">
			Empowered way to develop pages <span class="font-bold"> only with Prisma technology </span>
		</h1>
		<p class="text-xl text-center">Experience the next generation of landing page solutions</p>
		<button
			class="hidden lg:flex rounded-full font-semibold text-white py-2 px-12 bg-prisma-500 hover:bg-prisma-600 transition-colors"
		>
			Start developing
		</button>
	</div>
</div>
