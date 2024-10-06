<script>
  import "carbon-components-svelte/css/all.css";
  import {
    Header,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
</script>

<Header
  company="A"
  platformName="Personal Blog"
  bind:isSideNavOpen
  on:click={() => {
    window.location.href = "/";
  }}
>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
</Header>

<Content>
  <Grid>
    <Row>
      <Column>
        <slot></slot>
      </Column>
    </Row>
  </Grid>
</Content>
