<script>
  import { onMount } from "svelte";
  import github from "../../lib/socials/github.svg";
  import linkedIn from "../../lib/socials/linkedin.svg";
  import mail from "../../lib/socials/mail.svg";
  import mobile from "../../lib/socials/mobile.svg";

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => observer.observe(el));

  });
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="contact details" />
</svelte:head>

<div class="contact">
  <h1>Contact</h1>
  <h2>Hit me up!</h2>
  <div class="socials">
    <a class="hidden" href="https://github.com/Dante26us" target="_blank">
      <img class="card_image" src={github} alt="github" /></a
    >
    <a class="hidden"
      href="https://www.linkedin.com/in/utkarsh-shishodia-2ab7b720b/"
      target="_blank"
      ><img class="card_image" src={linkedIn} alt="linkedIn" /></a
    >
    <a class="hidden" href="mailto:utkarshshishodiauk@gmail.com" target="_blank"
      ><img class="card_image" src={mail} alt="mail" /></a
    >
    <a class="hidden" href="tel:+918700764804" target="_blank"
      ><img class="card_image" src={mobile} alt="mobile" /></a
    >
  </div>
</div>

<style>
  h1 {
    font-weight: bolder;
  }
  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 2em;
  }
  .socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .card_image {
    border-radius: 8px;
    display: block;
    width: 5em;
    height: 5em;
    margin-inline: 20px;
    border-radius: 12px;
    background-color: rgb(255, 255, 255);
  }
  .hidden{
    opacity: 0;
    transform: translateX(100%);
    transition: all 1s;
  }
  .hidden:nth-child(2) {
    transition-delay: 200ms;
  }
  .hidden:nth-child(2) {
    transition-delay: 400ms;
  }

  .hidden:nth-child(3) {
    transition-delay: 600ms;
  }

  .hidden:nth-child(4) {
    transition-delay: 800ms;
  }

</style>
