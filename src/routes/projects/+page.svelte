<script>
  // @ts-nocheck

  import Card from "../../components/Card.svelte";
  import baxa from "../../lib/images/baxa.png";
  import svelteResume from "../../lib/images/svelteResume.png";
  let obj = [
    {
      id:1,
      heading: "Bharti AXA Digiserve",
      description:
        "Digiserve is an online portal for policy holders of Bharti AXA. Built by To The New, I helped build the front-end platform from scratch and implemented various payment related functionalities.",
      githublink: "",
      sitelink: "https://www.bhartiaxa.com/customer-service-login/",
      imglink: baxa,
      technology: "React, Redux, SASS",
      imgalt: "baxa",
    },
    {
      id:2,
      heading: "Portfolio Website",
      description:
        "THe current website which was made with the help of svelte and svelte kit.",
      githublink: "https://github.com/Dante26us/svelteResume",
      sitelink: "https://www.bhartiaxa.com/customer-service-login/",
      imglink: svelteResume,
      technology: "Svelte, Svelte Kit, CSS",
      imgalt: "svelteResume",
    },
  ];
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="project">
  <h1>Projects</h1>

  {#each obj as item}
    <Card {item} />
  {/each}
</div>

<style>
  .project {
    color: var(--color-text);
  }
  h1 {
    margin-top: 2em;
  }
</style>
