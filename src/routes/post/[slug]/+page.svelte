<script>
  export let data;
  import { CodeSnippet } from "carbon-components-svelte";
</script>

<div class="notion-page">
  {#each data.data.results as block}
    {#if block.type === "paragraph"}
      <p>
        {#each block.paragraph.rich_text as rt}
          <span
            style="
              {rt.annotations.bold ? 'font-weight: bold;' : ''}
              {rt.annotations.italic ? 'font-style: italic;' : ''}
              {rt.annotations.strikethrough
              ? 'text-decoration: line-through;'
              : ''}
              {rt.annotations.underline ? 'text-decoration: underline;' : ''}
              {rt.annotations.code
              ? 'font-family: monospace; background-color: #f0f0f0; padding: 2px;'
              : ''}
              color: {rt.annotations.color !== 'default'
              ? rt.annotations.color
              : 'inherit'};
            "
          >
            {#if rt.text.link}
              <a
                href={rt.text.link.url}
                target="_blank"
                rel="noopener noreferrer">{rt.text.content}</a
              >
            {:else}
              {rt.text.content}
            {/if}
          </span>
        {/each}
      </p>
    {:else if block.type === "heading_1"}
      <h1>{block.heading_1.rich_text[0].plain_text}</h1>
    {:else if block.type === "heading_2"}
      <h2>{block.heading_2.rich_text[0].plain_text}</h2>
    {:else if block.type === "heading_3"}
      <h3>{block.heading_3.rich_text[0].plain_text}</h3>
    {:else if block.type === "bulleted_list_item"}
      <li>{block.bulleted_list_item.rich_text[0].plain_text}</li>
    {:else if block.type === "numbered_list_item"}
      <li>{block.numbered_list_item.rich_text[0].plain_text}</li>
    {:else if block.type === "image"}
      <img src={block.image.file.url} alt="Body" />
    {:else if block.type === "embed"}
      <iframe src={block.embed.url} title="embedded" />
    {:else if block.type === "divider"}
      <hr />
    {:else if block.type === "bookmark"}
      <hr />
    {:else if block.type === "code"}
      <CodeSnippet type="multi">
        {block.code.rich_text[0].plain_text}
      </CodeSnippet>
    {:else}
      <p>Unsupported Block</p>
    {/if}
  {/each}
</div>

<style>
  img,
  iframe {
    max-width: 100%;
  }
</style>
