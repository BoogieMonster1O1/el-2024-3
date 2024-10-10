<script lang="ts">
    import { articles } from "$lib";

    let totalPrice = articles.reduce((sum, article) => {
        return !article.green ? sum + article.price : sum;
    }, 0);
</script>

<svelte:head>
    <title>Project ELysium - Budget</title>
</svelte:head>

<div class="flex flex-col max-w-screen-lg mx-auto p-4 text-white">
    <h2 class="text-4xl font-bold mb-4">Budget</h2>
    <p class="text-lg mb-4">
        Here is an exhaustive list of all parts we will need, along with how
        much they cost, and where we will get them.
    </p>

    <h2 class="text-2xl font-bold mb-4">
        Total Price: Rs. {totalPrice}
    </h2>

    <table
        class="min-w-full bg-neutral-800 text-white border border-neutral-900 mb-4 text-center"
    >
        <thead>
            <tr class="bg-neutral-900">
                <th class="p-4 text-center font-bold">Name</th>
                <th class="p-4 text-center font-bold">Price</th>
                <th class="p-4 text-center font-bold">Vendor</th>
            </tr>
        </thead>
        <tbody>
            {#each articles as article, index}
                <tr
                    class={article.green
                        ? "bg-green-700"
                        : index % 2 === 0
                          ? "bg-neutral-900"
                          : ""}
                >
                    <td class="p-4">
                        {#if article.link}
                            <a
                                href={article.link}
                                class="text-blue-400 hover:underline"
                                >{article.name}</a
                            >
                        {:else}
                            {article.name}
                        {/if}
                    </td>
                    <td class="p-4">Rs. {article.price}</td>
                    <td class="p-4">{article.vendor}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
