import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    /* colors */
    --font-color-dark: hsl(216.92, 10.24%, 24.9%);
    --font-color-light: hsl(0, 0%, 94.9%);
    --bkgd-base-color: white;
    --bkgd-section-color: hsl(204, 15.15%, 93.53%);
    --bkgd-highlight-color:  hsl(49, 78%, 66%);
    --secondary-color: hsl(212.31, 66%, 53.14%);
    --primary-color: black;
    --light-color: hsl(0, 0%, 48.96%);
    /* spacing */
    --sp-unit: 8;
    --sp-base: calc(var(--sp-unit) * 1px);
    --sp-half: calc(var(--sp-unit) / 2px);
    --sp-2x: calc(var(--sp-unit) * 2px);
    --sp-3x: calc(var(--sp-unit) * 3px);
    --sp-4x: calc(var(--sp-unit) * 4px);
    --sp-5x: calc(var(--sp-unit) * 5px);
    --sp-6x: calc(var(--sp-unit) * 6px);
    --sp-7x: calc(var(--sp-unit) * 7px);
    --sp-8x: calc(var(--sp-unit) * 8px);
    --sp-10x: calc(var(--sp-unit) * 10px);
    /* utils */
    --news-banner-height: 3rem;
    --min-height: max(70vmin, 425px);
    /* shadows */
    --box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.65);
    --lg-txt-shadow: black 2px 0 15px;
	  --sm-txt-shadow: black 1px 0 3px;
    /* CSS Reset */
    /*
  1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
      box-sizing: border-box;
    }
    /*
      2. Remove default margin
    */
    * {
      margin: 0;
    }
    /*
      6. Improve media defaults
    */
    img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
    }
    /*
      7. Remove built-in form typography styles
    */
    input, button, textarea, select {
      font: inherit;
    }
    /*
      8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
    }
    /*
      9. Create a root stacking context
    */
    #root, #__next {
      isolation: isolate;
    }
  }
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    color: var(--primary-color);
    background: var(--bkgd-base-color);
    font-size: clamp(1.125rem, calc(1rem + 0.2vmin), 1.2rem);
    line-height: clamp(1.4rem, calc(1.5rem + 0.5vmin), 1.7rem);
    font-weight: 300;
    vertical-align: baseline;
    width: 100vw;
  }

  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
  }

  * {
    box-sizing: border-box;
  }

  .nav-link-active {
    cursor: not-allowed;
    opacity: 0.7;
    pointer-events: none;
    &:before {
      content: '';
      position: absolute;
      border-left: 3px solid var(--light-color);
      height: calc(1em - 3px);
      left: -8px;
      top: 3px;
    }
  }
  a {
    position: relative;
    color: inherit;
    text-decoration: none;
    &:hover {
      color: var(--secondary-color);

    }
  }
`;
