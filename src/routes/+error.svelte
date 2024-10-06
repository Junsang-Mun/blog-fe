<script>
  import { page } from "$app/stores";
  import { CodeSnippet, ImageLoader } from "carbon-components-svelte";
</script>

<h1>Oops...</h1>

<ImageLoader src="%sveltekit.assets%/jokebear.gif" alt="Error" />

<CodeSnippet>
  {$page.status}
  {$page.error.message}
</CodeSnippet>
