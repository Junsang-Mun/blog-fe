<script>
  import { createEventDispatcher } from "svelte";
  // import { searchArticleByTag } from "$lib/api.js";
  import "carbon-components-svelte/css/g80.css";
  export let data;
  let article;
  const dispatch = createEventDispatcher();
  const updateView = (key) => {
    dispatch("updateView", { new_page: "article", new_data: key });
    console.log(`updateViewDEBUG: new_page: article, new_data: ${key}`);
  };
  async function searchArticleByTag(tag) {
    try {
      const response = await fetch("/api/tag", {
        method: "POST",
        body: JSON.stringify({ tag: tag }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
</script>

<h1 style="font-weight: 900;">{data}</h1>
<p>{data} 태그로 분류된 기록을 모아두었습니다.</p>
<hr style="border: solid 0.05em white;" />
{#await searchArticleByTag(data)}
  <div
    style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; padding-top:5rem"
  >
    <p>로딩 중...</p>
  </div>
{:then r}
  {#if r.items && r.items.length > 0}
    {#each r.items as item}
      <br />
      <h1 style="cursor: pointer;" on:click={() => updateView(item.key)}>
        {item.title}
      </h1>
      <p>{item.date}</p>
      <p>{item.tag}</p>
      <br />
    {/each}
  {:else}
    <p>아직 {data} 태그로 쓰인 글은 없네요!</p>
  {/if}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
