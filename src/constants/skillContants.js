export const skillsConstants = [
  {
    name: "react",
    url: "https://reactjs.org/",
    icon: (
      <svg
        height="2500"
        viewBox="175.7 78 490.6 436.9"
        width="2194"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#61dafb">
          <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
          <circle cx="420.9" cy="296.5" r="45.7" />
        </g>
      </svg>
    ),
  },
  {
    name: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: (
      <svg
        fill="none"
        height="2500"
        width="2183"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 124 141.53199999999998"
      >
        <path
          d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
          fill="#e9ca32"
        />
        <path
          d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
          fill="#ffde25"
        />
        <g fill="#fff">
          <path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
        </g>
      </svg>
    ),
  },
  {
    name: "typescript",
    url: "https://www.typescriptlang.org/",
    icon: (
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        width="2500"
        height="2500"
      >
        <path className="st0" d="M0 200V0h400v400H0" fill="#007acc" />
        <path
          className="st1"
          fill="#fff"
          d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
        />
      </svg>
    ),
  },
  {
    name: "redux",
    url: "https://redux.js.org/",
    icon: (
      <svg
        width="2500"
        height="2383"
        viewBox="0 0 256 244"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
          fill="#764ABC"
        />
      </svg>
    ),
  },
  {
    name: "styled-components",
    url: "https://styled-components.com/",
    icon: (
      <svg
        viewBox="0 0 318 318"
        xmlns="http://www.w3.org/2000/svg"
        href="http://www.w3.org/1999/xlink"
        width="2500"
        height="2500"
      >
        <defs>
          <path id="a" d="M0 0h318v318H0z" />
          <mask id="b" fill="#fff" height="318" width="318" x="0" y="0">
            <use href="#a" />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
          <use mask="url(#b)" stroke="#fff" strokeWidth="8" href="#a" />
          <path
            d="M44.284 229.416c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zm20.412 15.732l1.62 2.952c-1.368.972-3.096 1.44-4.788 1.44-3.744-.036-5.724-2.16-5.724-6.228v-10.044h-2.988v-3.312h2.988v-4.212l4.608-.54v4.752h4.428l-.468 3.312h-3.96v9.936c0 1.872.612 2.628 2.016 2.628.72 0 1.44-.216 2.268-.684zm19.62-15.192l-6.192 19.116c-1.44 4.464-4.248 7.344-9.9 7.776l-.468-3.348c3.78-.576 5.004-1.8 6.084-4.5h-1.584l-6.048-19.044h4.896l4.14 15.984 4.32-15.984zm7.308 19.584a7.55 7.55 0 0 0 3.06-.648l-.972-3.24c-.324.108-.648.18-1.08.18-.756 0-1.08-.432-1.08-1.332v-22.68l-4.608.504v22.32c0 3.132 1.764 4.896 4.68 4.896zm21.744-10.512c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm20.124-16.092l4.608.504V249h-4.068l-.324-2.412c-1.152 1.728-2.988 2.952-5.436 2.952-4.752 0-7.236-3.996-7.236-10.044 0-5.868 2.952-10.08 7.668-10.08 2.016 0 3.6.864 4.788 2.052zm-3.924 24.228c1.692 0 2.844-.828 3.924-2.448v-8.712c-1.008-1.224-2.088-2.016-3.636-2.016-2.376 0-3.96 2.016-3.96 6.588 0 4.896 1.404 6.588 3.672 6.588zM44.44 265.416c-5.472 0-8.892 4.14-8.892 10.224s3.42 9.9 8.928 9.9c2.448 0 4.428-.792 6.156-2.196l-2.052-2.916c-1.404.9-2.412 1.368-3.852 1.368-2.592 0-4.284-1.62-4.284-6.228 0-4.572 1.62-6.516 4.284-6.516 1.44 0 2.592.432 3.852 1.368l2.052-2.772c-1.8-1.548-3.708-2.232-6.192-2.232zm17.316 0c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm33.444-3.492c-2.52 0-4.284 1.224-5.724 3.204-.72-2.016-2.376-3.204-4.608-3.204-2.412 0-4.14 1.116-5.508 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.636-2.88 1.116 0 2.088.684 2.088 3.06V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.6-2.88 1.152 0 2.088.684 2.088 3.06V285h4.608v-13.788c0-3.6-2.016-5.796-5.04-5.796zm20.268 0c4.968 0 7.056 3.924 7.056 10.008 0 5.832-2.7 10.116-7.524 10.116-1.944 0-3.6-.684-4.788-2.088v8.892l-4.608.504v-26.892h4.032l.252 2.34c1.512-1.98 3.528-2.88 5.58-2.88zm-1.764 16.596c2.52 0 3.996-1.944 3.996-6.552 0-4.824-1.296-6.588-3.6-6.588-1.62 0-2.988 1.116-3.888 2.592v8.568c.9 1.332 2.052 1.98 3.492 1.98zm21.132-16.596c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm23.4-3.492c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm26.388 9.612c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm18.864-8.496c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm20.052 15.732c-.828.468-1.548.684-2.268.684-1.404 0-2.016-.756-2.016-2.628v-9.936h3.96l.468-3.312h-4.428v-4.752l-4.608.54v4.212h-2.988v3.312h2.988v10.044c0 4.068 1.98 6.192 5.724 6.228 1.692 0 3.42-.468 4.788-1.44zm10.224-15.732c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zM79.8 87.2l-36.2 22.5 36.2 22.9-3.7 4.6-37.7-23.6v-7.9l38.1-23.6m189.3 22.7v7.8l-37.7 23.6-3.7-4.9 36.1-22.6L224.4 86l3.2-4.9"
            fill="#fff"
          />
          <text
            fill="#000"
            fontFamily="AppleColorEmoji, Apple Color Emoji"
            fontSize="100"
            letterSpacing=".5"
            transform="translate(38 44)"
          >
            <tspan x="70" y="100">
              💅
            </tspan>
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "material-ui",
    url: "https://mui.com",
    icon: (
      <svg
        viewBox="0 0 600 476.30000000000007"
        xmlns="http://www.w3.org/2000/svg"
        width="2500"
        height="1985"
      >
        <path d="M0 259.8V0l225 129.9v86.6L75 129.9v173.2z" fill="#00b0ff" />
        <path
          d="M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
          fill="#0081cb"
        />
        <path d="M225 303.1v86.6l150 86.6v-86.6z" fill="#00b0ff" />
        <path
          d="M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z"
          fill="#0081cb"
        />
      </svg>
    ),
  },
  {
    name: "bootstrap-5",
    url: "https://getbootstrap.com/",
    icon: (
      <svg
        height="1992"
        viewBox="0 0 512 407.864"
        width="2500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m106.344 0c-29.214 0-50.831 25.57-49.863 53.3.929 26.641-.278 61.145-8.964 89.283-8.717 28.217-23.449 46.098-47.517 48.393v25.912c24.068 2.3 38.8 20.172 47.516 48.393 8.687 28.138 9.893 62.642 8.964 89.283-.968 27.726 20.649 53.3 49.868 53.3h299.347c29.214 0 50.827-25.57 49.859-53.3-.929-26.641.278-61.145 8.964-89.283 8.717-28.221 23.413-46.1 47.482-48.393v-25.912c-24.068-2.3-38.764-20.172-47.482-48.393-8.687-28.134-9.893-62.642-8.964-89.283.968-27.726-20.645-53.3-49.859-53.3h-299.355zm240.775 251.067c0 38.183-28.481 61.34-75.746 61.34h-80.458a8.678 8.678 0 0 1 -8.678-8.678v-199.593a8.678 8.678 0 0 1 8.678-8.678h80c39.411 0 65.276 21.348 65.276 54.124 0 23.005-17.4 43.6-39.567 47.208v1.2c30.176 3.31 50.495 24.21 50.495 53.077zm-84.519-128.1h-45.876v64.8h38.639c29.87 0 46.34-12.028 46.34-33.527-.003-20.148-14.163-31.273-39.103-31.273zm-45.876 90.511v71.411h47.564c31.1 0 47.573-12.479 47.573-35.931s-16.935-35.484-49.573-35.484h-45.564z"
          fill="#7952b3"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "jest",
    url: "https://jestjs.io/",
    icon: (
      <svg
        height="2500"
        preserveAspectRatio="xMidYMid"
        width="2261"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-165.83095323455666 -227.12219430273237 515.6590368124253 797.3960759087976"
      >
        <path
          d="M239.553 138.96c0-14.508-11.762-26.27-26.27-26.27-.934 0-1.854.05-2.762.146l36.082-106.42H93.267l36.032 106.327a26.318 26.318 0 0 0-1.597-.052c-14.508 0-26.27 11.76-26.27 26.27 0 11.727 7.686 21.656 18.293 25.034-5.602 9.704-12.652 18.445-20.656 25.997-10.884 10.267-23.34 18.053-36.812 22.85-16.04-8.24-23.614-26.565-16.78-42.632.772-1.815 1.56-3.654 2.313-5.485 11.62-2.712 20.28-13.129 20.28-25.576 0-14.509-11.762-26.27-26.271-26.27s-26.27 11.761-26.27 26.27c0 8.897 4.426 16.756 11.193 21.508-6.502 14.804-16.06 30.298-19.038 48.255-3.569 21.52-.012 44.364 18.601 57.265 43.348 30.044 90.402-18.625 140.014-30.86 17.98-4.433 37.717-3.719 53.558-12.893 11.896-6.89 19.739-18.309 21.964-31.128 2.2-12.664-1.006-25.273-8.378-35.497a26.158 26.158 0 0 0 6.11-16.839"
          fill="#99425b"
        />
        <path
          d="M235.5 190.198c-1.932 11.13-8.806 20.851-18.858 26.674-9.371 5.427-20.6 7.047-32.49 8.761-6.369.918-12.955 1.869-19.389 3.455-17.012 4.195-33.49 12.38-49.424 20.295-31.89 15.84-59.43 29.518-85.398 11.52-19.022-13.183-18.144-37.575-15.928-50.941 2.054-12.384 7.607-23.789 12.976-34.818a796.621 796.621 0 0 0 2.722-5.634 32.453 32.453 0 0 0 8.443 2.118c-5.466 18.039 3.13 37.653 21.171 46.921l2.47 1.269 2.614-.931c14.263-5.08 27.406-13.23 39.063-24.229 7.535-7.109 14.014-14.974 19.339-23.378a32.8 32.8 0 0 0 4.891.367c16.559 0 30.271-12.379 32.393-28.367 6.778-.248 13.977-.25 20.794-.002 2.12 15.99 15.834 28.37 32.393 28.37 6.924 0 13.346-2.17 18.637-5.856 3.673 7.519 5.044 15.979 3.581 24.406zM41.8 119.295c10.948 0 19.854 8.907 19.854 19.855 0 3.932-1.154 7.599-3.135 10.687-3.3 5.147-8.91 8.675-15.355 9.115-.451.03-.906.052-1.364.052-2.44 0-4.777-.445-6.938-1.253a19.967 19.967 0 0 1-10.305-8.777 19.725 19.725 0 0 1-2.612-9.824c0-10.948 8.907-19.855 19.855-19.855zm66.049 19.666c0-9.947 7.353-18.206 16.907-19.634.962-.145 1.946-.22 2.947-.22 6.365 0 12.032 3.015 15.666 7.687a19.88 19.88 0 0 1 2.318 3.765 19.73 19.73 0 0 1 1.87 8.402c0 1.587-.192 3.13-.545 4.61-1.935 8.1-8.842 14.292-17.306 15.144-.658.066-1.326.1-2.003.1a19.734 19.734 0 0 1-10.76-3.181c-5.466-3.541-9.094-9.69-9.094-16.673zm82.865-23.61a32.721 32.721 0 0 0-8.991 15.117 304.792 304.792 0 0 0-22.458 0c-1.68-6.232-5.162-11.73-9.847-15.906l20.545-41.542zM102.216 12.834h135.437l-31.989 94.345a32.479 32.479 0 0 0-4.051 1.255l-31.6-64.463-31.69 64.078a32.502 32.502 0 0 0-4.226-1.139zm130.92 126.128c0 1.99-.297 3.912-.844 5.727a19.933 19.933 0 0 1-7.653 10.545 19.74 19.74 0 0 1-11.357 3.582c-9.167 0-16.9-6.247-19.174-14.707a19.803 19.803 0 0 1-.68-5.147c0-2.714.548-5.302 1.538-7.66a19.848 19.848 0 0 1 1.878-3.442c3.573-5.274 9.602-8.752 16.438-8.752.627 0 1.245.032 1.858.09 10.08.939 17.997 9.442 17.997 19.764zm12.833 0c0-15.958-11.498-29.273-26.642-32.117L255.553 0H84.318L120.6 107.061c-14.618 3.253-25.583 16.316-25.583 31.9 0 11.702 6.184 21.98 15.452 27.756-4.458 6.642-9.744 12.892-15.802 18.608-9.608 9.063-20.311 15.937-31.85 20.46-11.623-7.301-16.536-21.07-11.434-33.064l.4-.94.75-1.764c12.766-4.453 21.953-16.603 21.953-30.867 0-18.024-14.663-32.687-32.686-32.687S9.112 121.126 9.112 139.15c0 9.097 3.74 17.335 9.758 23.267a552.73 552.73 0 0 1-3.418 7.11c-5.503 11.301-11.739 24.11-14.098 38.335-4.684 28.25 2.872 50.833 21.277 63.588 11.168 7.74 22.51 10.784 33.923 10.784 21.49 0 43.23-10.797 64.493-21.359 15.313-7.605 31.148-15.47 46.789-19.328 5.82-1.435 11.808-2.299 18.148-3.213 12.573-1.814 25.573-3.689 37.089-10.358 13.349-7.732 22.486-20.702 25.07-35.582 2.218-12.775-.451-25.57-6.961-36.422a32.488 32.488 0 0 0 4.787-17.011z"
          fill="#fff"
        />
      </svg>
    ),
  },
];
