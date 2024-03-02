<script lang="ts">
  // https://nubolab-ffwd.github.io/svelte-fluent/docs/tutorial#first-steps
  import { FluentBundle, FluentResource } from '@fluent/bundle';
  import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';

  // https://panda-css.com/docs/installation/svelte
  import '../../app.css';

  // https://panda-css.com/docs/installation/svelte#start-using-panda
  import { css, cx } from 'styled-system/css';

  export let data;

  const { translations } = data;
  const MENU_WIDTH = '250px';

  const bundle = new FluentBundle('en');
  bundle.addResource(new FluentResource(translations));
</script>

<div
  class={css({
    minHeight: '100vh',
  })}
>
  <!-- The hidden input of the menu toggle, holds state via ``:checked` -->
  <input
    type="checkbox"
    id="menu-toggler"
    class={cx(
      'peer',
      css({
        position: 'fixed',
        clip: 'rect(0,0,0,0)',
        lg: {
          color: 'red',
          width: '64rem',
        },
        mdToXl: {
          color: 'blue',
        },
        xxsOnly: {
          color: 'palegreen',
        },
      })
    )}
  />

  <!-- Menu toggle -->
  <label
    for="menu-toggler"
    class={css({
      transition: 'transform .25s ease-in-out,opacity .25s linear',

      position: 'fixed',
      zIndex: 4,
      top: '1.5rem',
      right: '2rem',

      padding: '0.5rem',

      borderRadius: '50%',
      cursor: 'pointer',
      opacity: { base: 0.6, _hover: 1 },
      bgColor: 'white',

      _peerChecked: {
        transform: `translate(-${MENU_WIDTH}, 0)`,
        opacity: 1,
      },
    })}
  >
    <svg
      height="25"
      viewBox="0 0 25 25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      class={css({
        display: 'block',
      })}
    >
      <path d="M0 2h25v4H0V2zm0 8h25v4H0v-4zm0 8h25v4H0v-4z" fill="#000" fill-rule="evenodd"></path>
    </svg>
  </label>

  <!-- Menu backdrop -->
  <label
    for="menu-toggler"
    class={css({
      pointerEvents: 'none',
      opacity: 0,

      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 3,

      cursor: 'pointer',
      transition: '0.5s opacity linear',

      background: `repeating-linear-gradient(
        45deg,
        #606dbc,
        #606dbc 10px,
        #465298 10px,
        #465298 20px
      )`,

      _peerChecked: {
        opacity: 0.5,
        pointerEvents: 'auto',
      },
    })}
  >
  </label>

  <!-- Menu -->
  <div
    class={css({
      position: 'fixed',
      top: 0,
      right: 0,
      width: MENU_WIDTH,
      height: '100vh',
      zIndex: 4,
      overflowY: 'auto',
      transform: `translate(${MENU_WIDTH},0)`,

      transition: 'transform .25s ease-in-out, opacity .25s linear',
      bgColor: '#B74934',
      color: '#fff',

      _peerChecked: {
        transform: 'translate(0, 0)',
      },
    })}
  >
    <!-- Greeting -->
    <div
      class={css({
        marginBottom: '2rem',
        verticalAlign: 'middle',

        padding: '1rem',
        textAlign: 'center',
        fontFamily: `'PT Sans Caption',sans-serif`,
        fontSize: '1.2rem',
        fontWeight: 700,
      })}
    >
      You are awesome today!
      <span
        class={css({
          fontSize: '1.5em',
          verticalAlign: 'middle',
        })}
      >
        😎
      </span>
    </div>

    <div class="route-locale-menu-items">
      <a href="/en/blog" id="ember567" class="route-locale-menu-item _blog ember-view">Blog</a>

      <!---->
      <a href="https://github.com/lolmaus/lolma.us" class="route-locale-menu-item _source -no-icon">
        Source on&nbsp;GitHub
        <span class="externalLink"></span>
      </a>

      <a href="/ru" id="ember584" class="route-locale-menu-item _locale ember-view">
        Моя не понимать
      </a>
    </div>
  </div>

  <div>
    <FluentProvider bundles={[bundle]}>
      <Localized id="hello" />
      <slot />
    </FluentProvider>
  </div>
</div>
