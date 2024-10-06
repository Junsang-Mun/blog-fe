<script>
  export let data;

  function renderBlock(block) {
    switch (block.type) {
      case "paragraph":
        if (block.paragraph.rich_text.length === 0) {
          return "";
        }
        return `<p>${block.paragraph.rich_text[0].plain_text}</p>`;
      case "heading_1":
        return `<h1>${block.heading_1.rich_text[0].plain_text}</h1>`;
      case "heading_2":
        return `<h2>${block.heading_2.rich_text[0].plain_text}</h2>`;
      case "heading_3":
        return `<h3>${block.heading_3.rich_text[0].plain_text}</h3>`;
      case "bulleted_list_item":
        return `<li>${block.bulleted_list_item.rich_text[0].plain_text}</li>`;
      case "numbered_list_item":
        return `<li>${block.numbered_list_item.rich_text[0].plain_text}</li>`;
      case "to_do":
        return `<div>
          <input type="checkbox" ${block.to_do.checked ? "checked" : ""}>
          <span>${block.to_do.rich_text[0].plain_text}</span>
        </div>`;
      case "image":
        return `<img src="${block.image.file.url}" alt="Notion image">`;
      case "code":
        return `<pre><code class="language-${block.code.language}">${block.code.rich_text[0].plain_text}</code></pre>`;
      // Add more cases for other block types
      default:
        return `<p>Unsupported block type: ${block.type}</p>`;
    }
  }
</script>

<div class="notion-page">
  {#each data.data.results as block}
    {@html renderBlock(block)}
  {/each}
</div>
