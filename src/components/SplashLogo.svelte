<script>
    import {onMount} from 'svelte';
    import {runSplash, setSplash} from '../lib/splash.js';
    import {darkTheme} from '../lib/theme.js';

    export let revealDuration = 1000;
    export let beginTransform = revealDuration + 800;
    export let transformDuration = 500;

    const revealS = `${revealDuration / 1000.0}s`;
    const beginS = `${beginTransform / 1000.0}s`;
    const transformS = `${transformDuration / 1000.0}s`;

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
        }, beginTransform + transformDuration);
        setTimeout(() => transformSvg(logo.offsetWidth, bound.left, bound.top), beginTransform);
    });

    const transformSvg = (size, left, top) => {
        const tick = transformDuration / 10;
        interval = setInterval(() => {
            svgWidth -= (windowWidth - size) / tick;
            svgHeight -= (windowHeight - size) / tick;
            svgLeft += left / tick;
            svgTop += top / tick;
        }, 10);
    };

    $: style = [
        `top: ${svgTop}px`,
        `left: ${svgLeft}px`
    ].join(';');
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight}/>

{#if $runSplash}
  <div class="fixed z-50" style={style}>
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
                   dur={revealS}/>
        </circle>
      </clipPath>

      <rect x="15" y="80" width="70" height="0.5" class="fill-primary dark:fill-primary-dark">
        <animate attributeName="width"
                 fill="freeze"
                 from="0"
                 to="70"
                 dur={revealS}/>
        <animate attributeName="x"
                 fill="freeze"
                 from="50"
                 to="15"
                 dur={revealS}/>

        <animate attributeName="width"
                 fill="freeze"
                 from="70"
                 to="100"
                 begin={beginS}
                 dur={transformS}/>
        <animate attributeName="x"
                 fill="freeze"
                 from="15"
                 to="0"
                 begin={beginS}
                 dur={transformS}/>
        <animate attributeName="height"
                 fill="freeze"
                 from="0.5"
                 to="100%"
                 begin={beginS}
                 dur={transformS}/>
        <animate attributeName="rx"
                 fill="freeze"
                 from="0"
                 to="8"
                 begin={beginS}
                 dur={transformS}/>
        <animateMotion path="M 0 0 L 0 -80"
                       fill="freeze"
                       begin={beginS}
                       dur={transformS}/>
      </rect>

      <use href="#logo" clip-path="url(#clip)" transform-origin="50% 50%">
        {#if $darkTheme}
          <animate attributeName="fill"
                   fill="freeze"
                   from="black"
                   to="white"
                   dur={revealS}/>
        {:else}
          <animate attributeName="fill"
                   from="white"
                   to="black"
                   dur={revealS}/>
          <animate attributeName="fill"
                   fill="freeze"
                   from="black"
                   to="white"
                   begin={beginS}
                   dur={transformS}/>
        {/if}

      </use>
    </svg>
  </div>
{/if}
