<script>
  // @ts-nocheck
  import github from "../lib/socials/github.svg";
  import site from "../lib/socials/site.svg";
  export let item;
</script>

{#if item}
  <div class="card">
    <img class="card_image" src={item.imglink} alt={item.imgalt} />
    <div class="cardInfo">
      <h2>{item.heading}</h2>
      <p>{item.description}</p>
      <h2>{item.technology}</h2>
      <div class="buttons">
        {#if item.githublink}
          <a href={item.githublink} target="_blank"> code <img src={github} alt="code" /></a>
        {/if}
        {#if item.sitelink}
          <a href={item.sitelink} target="_blank"> Live Demo<img src={site} alt="site" /></a>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .card {
    display: flex;
    width: 60em;
    height: 20em;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  }
  h2{
    font-size: 1.6em;
    font-weight: bolder;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    max-width: 25em;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10em;
    border: 2px solid var(--color-text);
    margin-right: 1em;
    padding: 5px 15px;
    border-radius: 6px;
    color: var(--color-text);
  }
  a:hover {
    text-decoration: none;
    cursor: pointer;
  }
  img {
    width: 2em;
  }
  .card_image {
    border-radius: 8px;
    display: block;
    max-width: 25em;
    max-height: 25em;
    width: auto;
    height: auto;
  }
</style>
