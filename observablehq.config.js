// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Data Visualisation Guidelines",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],
  pages : [{name: "Guidelines", pages:[
    {name: "Quick intro to data visualisation", path: "/quick-intro"},
    {name: "Data visualisation principles", path: "/principles"},
    {name: "How to choose the right chart", path: "/choose-chart"},
    {name: "Chart design process", path: "/design-process"}]},
    {name: "Style Guide", pages:[
      {name: "Colour Palette", path: "/style-guide-colour"},
      {name: "Typography", path: "/style-guide-typography"},
      {name: "Layout", path: "/style-guide-layout"},
      {name: "Accessibility", path: "/style-guide-accessibility"},
      {name: "Interactivity", path: "/style-guide-interactivity"},
    ]}

  ],
  

  // Content to add to the head of the page, e.g. for a favicon:
  // head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  header: `<div id="custom-header">
              <a href="https://data.one.org/">
                <svg width="152" height="50" viewBox="0 0 152 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0C17.9261 0 0 17.8784 0 40C0 62.0739 17.8784 80 40 80C62.0739 80 80 62.1216 80 40C80 17.9261 62.0739 0 40 0ZM28.7485 45.5304C28.7485 50.3933 24.6484 53.7306 19.3087 53.7306C13.9213 53.7306 9.82122 50.441 9.82122 45.5304V32.2289C9.82122 27.3659 13.9213 24.0763 19.3087 24.0763C24.6484 24.0763 28.7485 27.3182 28.7485 32.2289V45.5304ZM50.8701 53.0155H44.6246L40.2384 43.8141L38.2837 39.7616V53.0155H31.5137V24.7914H38.093L42.3361 34.2312L44.1478 38.2837V24.7437H50.8701V53.0155ZM66.9845 35.8522V41.1919H61.4541V46.4362H70.0358V52.9678H53.826V24.7437H69.9881V30.8939H61.4064V35.8522H66.9845ZM19.261 30.3218C18.3552 30.3218 17.5447 30.8939 17.5447 31.7998V45.9595C17.5447 46.913 18.4029 47.4374 19.261 47.4374C20.1669 47.4374 20.9774 46.8653 20.9774 45.9595V31.7998C20.9774 30.8462 20.1669 30.3218 19.261 30.3218Z" fill="white"></path>
                  <path d="M91.68 30.7H99.024C103.656 30.7 106.032 33.508 106.032 37.372V40.828C106.032 44.692 103.656 47.5 99.024 47.5H91.68V30.7ZM101.904 40.852V37.348C101.904 35.212 100.776 34.084 98.28 34.084H95.784V44.116H98.28C100.776 44.116 101.904 42.988 101.904 40.852ZM118.959 47.5L117.999 44.38H111.927L110.991 47.5H106.863L112.863 30.7H117.087L123.087 47.5H118.959ZM114.975 34.42L112.935 41.068H116.991L114.975 34.42ZM122.592 30.7H135.792V34.18H131.256V47.5H127.128V34.18H122.592V30.7ZM147.389 47.5L146.429 44.38H140.357L139.421 47.5H135.293L141.293 30.7H145.517L151.517 47.5H147.389ZM143.405 34.42L141.365 41.068H145.421L143.405 34.42Z" fill="white"></path>
                </svg>
              </a>
          </div>`,
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  footer: `<div id="custom-footer">
              <div>© 2025 <a href="https://one.org/" style="color: #fff">ONE Campaign</a></div>
              <div>All rights reserved</div>
            </div>`,
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
