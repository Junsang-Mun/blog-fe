<script>
  export let data;
  import { ClickableTile } from "carbon-components-svelte";
  import { Tag } from "carbon-components-svelte";

  function convertZuluToLocalTime(zuluTimeString) {
    const zuluTime = new Date(zuluTimeString);
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formatter = new Intl.DateTimeFormat("ko-KR", {
      timeZone: localTimeZone,
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const localTime = formatter.format(zuluTime);
    return localTime;
  }
</script>

<!-- <h1>{JSON.stringify(data.data)}</h1> -->
{#each data.data.results as datas}
  <ClickableTile href="post/{datas.id}">
    <h1>
      {JSON.stringify(datas.properties.Title.title[0]?.plain_text).replace(
        /['"]+/g,
        ""
      )}
    </h1>
    <h3>{convertZuluToLocalTime(datas.created_time)}</h3>
    {#if datas.properties.Tag.select}
      <Tag type="outline">{datas.properties.Tag.select.name}</Tag>
    {/if}
  </ClickableTile>
{/each}
