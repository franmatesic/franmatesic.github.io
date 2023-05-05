<script>
    import {onMount} from 'svelte';
    import {runSplash, setSplash} from '../lib/splash.js';

    let windowWidth, windowHeight;
    let interval;
    let svgWidth;
    let svgHeight;
    let svgTop = 0;
    let svgLeft = 0;

    onMount(() => {
        if (!$runSplash) {
            return;
        }

        const logo = document.getElementById('layoutNavLogo');
        const bound = logo.getBoundingClientRect();

        svgWidth = windowWidth;
        svgHeight = windowHeight;


        setTimeout(() => {
            clearInterval(interval);
            setSplash();
        }, 2000);
        setTimeout(() => transformSvg(logo.offsetWidth, bound.left, bound.top), 1200);
    });

    const transformSvg = (size, left, top) => {
        const tick = 80;
        interval = setInterval(() => {
            svgWidth -= (windowWidth - size) / tick;
            svgHeight -= (windowHeight - size) / tick;
            if (svgLeft < left) {
                svgLeft += left / tick;
            }
            if (svgTop < top) {
                svgTop += top / tick;
            }
        }, 10);
    };

    $: style = [
        `top: ${svgTop}px`,
        `left: ${svgLeft}px`
    ].join(';');
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>

{#if $runSplash}
  <div class="fixed" style={style}>
    <svg viewBox="0 0 100 100" width={svgWidth} height={svgHeight}>

      <defs>
        <g id="logo">
          <path d="M 15 25 h 40 v 10 h -30 v 10 h 20 v 10 h -20 v 20 h -10 Z
                 m 50 0 h 20 v 50 h -10 v -40 h -10 Z
                 m -30 40 h 10 v 10 h -10 Z
                 m 20 -20 h 10 v 30 h -10 Z"/>
        </g>
      </defs>

      <clipPath id="clip">
        <circle cx="50%" cy="50%" r="0">
          <animate attributeName="r"
                   fill="freeze"
                   from="0"
                   to="60%"
                   dur="1s"/>
        </circle>
      </clipPath>

      <rect x="15" y="80" width="70" height="0.5" class="fill-primary dark:fill-primary-dark">
        <animate attributeName="width"
                 fill="freeze"
                 from="0"
                 to="70"
                 dur="0.8s"/>
        <animate attributeName="x"
                 fill="freeze"
                 from="50"
                 to="15"
                 dur="0.8s"/>
        <animate attributeName="width"
                 fill="freeze"
                 from="70"
                 to="100"
                 begin="1.2s"
                 dur="0.8s"/>
        <animate attributeName="x"
                 fill="freeze"
                 from="15"
                 to="0"
                 begin="1.2s"
                 dur="0.8s"/>
        <animate attributeName="height"
                 fill="freeze"
                 from="0.5"
                 to="100%"
                 begin="1.2s"
                 dur="0.8s"/>
        <animate attributeName="rx"
                 fill="freeze"
                 from="0"
                 to="8"
                 begin="1.2s"
                 dur="0.8s"/>
        <animateMotion path="M 0 0 L 0 -80"
                       fill="freeze"
                       begin="1.2s"
                       dur="0.8s"/>
      </rect>

      <use href="#logo" clip-path="url(#clip)" transform-origin="50% 50%">
        <animate attributeName="fill"
                 from="white"
                 to="black"
                 dur="1s"/>
        <animate attributeName="fill"
                 fill="freeze"
                 from="black"
                 to="white"
                 begin="1.2s"
                 dur="0.8s"/>
      </use>
    </svg>
  </div>
{/if}