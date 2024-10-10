<script>
    import "../app.css";
    import InstagramIcon from "$lib/icons/InstagramIcon.svelte";
    import GithubIcon from "$lib/icons/GithubIcon.svelte";
    import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
</script>

<svelte:head>
    <title>Project ELysium</title>
</svelte:head>

<div
    class="bg-neutral-800 p-2 min-h-screen flex flex-col justify-between text-white"
>
    <header class="flex flex-col items-center">
        <h1
            class="text-5xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
            Project ELysium
        </h1>
        <nav class="mt-4">
            <ul class="flex space-x-8">
                <li>
                    <a
                        href="/"
                        class="text-white hover:text-blue-400 transition"
                        >Home</a
                    >
                </li>
                <li>
                    <a
                        href="/budget"
                        class="text-white hover:text-blue-400 transition"
                        >Budget</a
                    >
                </li>
                <li>
                    <a
                        href="/res"
                        class="text-white hover:text-blue-400 transition"
                        >Resources</a
                    >
                </li>
            </ul>
        </nav>
        <hr class="border-white border-opacity-20 my-4 w-full" />
    </header>

    <main class="flex-grow flex items-center justify-center">
        <slot></slot>
    </main>

    <footer class="text-center p-4 font-mono">
        <div class="max-w-screen-lg mx-auto">
            <div class="flex justify-center space-x-4 mb-2">
                <a href="https://instagram.com/shrishdeshpande">
                    <InstagramIcon />
                </a>
                <a href="https://github.com/BoogieMonster1O1">
                    <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/shrishdeshpande/">
                    <LinkedInIcon />
                </a>
            </div>
            <p class="text-neutral-400 text-sm">
                © {new Date().getFullYear()} Shrish Deshpande. MIT License.
            </p>
        </div>
    </footer>
</div>
