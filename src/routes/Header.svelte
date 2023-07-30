<script>
  import { page } from '$app/stores';
  import Toggle from '../components/Toggle.svelte';
  import Resume from "../lib/Utkarsh_React_2.pdf";
</script>

<header>
	<div class="corner">
			Utkarsh
	</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/project' ? 'page' : undefined}>
				<a href="/project">Projects</a>
			</li>
			<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
				<a href="/contact">Contact</a>
			</li>
			<li aria-current={$page.url.pathname === '/resume' ? 'page' : undefined}>
				<a href={Resume} target="_blank">Resume</a>
			</li>
			
		</ul>
	</nav>
	<Toggle/>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background: var(--color-bg-0);
		font-family: var(--font-mono);
		font-weight: bolder;
		width: 100%;
		position: fixed;
		z-index: 2;
	}

	.corner {
		width: 10em;
		height: 3em;
		color: black;
		display: flex;
		align-items: center;
		justify-content: center;
		color:var(--color-text);;
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}

	nav {
		display: flex;
		justify-content: space-between;
		flex-grow: 1;
		width: 100%;
		background: var(--color-bg-0);
	
	}
	
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
		background: var(--color-bg-0);
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] {
		border-bottom: 2px solid var(--color-theme-2);
		color:var(--color-theme-2) ;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		@media only screen and (max-width: 768px) {
			font-size: 0.7rem;
		}
	}

	a:hover {
		color: var(--color-theme-2);
	}
</style>
