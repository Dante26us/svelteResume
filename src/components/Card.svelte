<script>

  // @ts-nocheck
  import github from "../lib/socials/github.svg";
  import site from "../lib/socials/site.svg";
  /**
   * @type {{ id: number; imglink: any; imgalt: any; heading: any; description: any; technology: any; githublink: any; sitelink: any; }}
   */
   export let item;
</script>

{#if item}
  <div
    class="card"
    style="flex-direction: {item.id % 2 === 1 ? 'row-reverse' : 'row'}; transform :translateX({item.id % 2 === 1 ? "-100":"-20"}%)"
  >
    <img class="card_image" src={item.imglink} alt={item.imgalt} />
    <div class="cardInfo">
      <h2>{item.heading}</h2>
      <p>{item.description}</p>
      <h2>{item.technology}</h2>
      <div class="buttons">
        {#if item.githublink}
          <a href={item.githublink} target="_blank">
           <p> code </p><img class="aImg" src={github} alt="code" /></a
          >
        {/if}
        {#if item.sitelink}
          <a href={item.sitelink} target="_blank">
            <p> Live Demo </p><img class="aImg" src={site} alt="site" /></a
          >
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .card {
    width: 60em;
    height: 20em;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    transition: all 1s;
    transform-origin: left top;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
  }
  h2 {
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
    width: 100%;
  }
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10em;
    border: 2px solid var(--color-text);
    margin-right: 1em;
    border-radius: 6px;
    color: var(--color-bg-0);
    background-color: var(--color-bg-3);
    box-sizing: border-box;
    @media only screen and (max-width: 768px) {
      width: auto;
      min-width: 20%;
    }
  }
  p{
    padding: 5px 15px;
    margin: 0;
  }
  .aImg{
    padding: 2px;
    background-color: rgb(255, 255, 255);
    position: relative;
    left: 0px;
    border-radius: 4px;
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
    max-width: 40em;
    max-height: 15em;
    width: auto;
    height: auto;
    border: 1px solid var(--color-text);
  }
  @media only screen and (max-width: 768px) {
    .card {
      width: 100%;
      margin-bottom: 10%;
      align-items: center;
      flex-direction: column !important;
    }
    .card_image{
      max-width: 15em;
    }
    .cardInfo{
      max-width: 20em;
    }
  }
</style>
