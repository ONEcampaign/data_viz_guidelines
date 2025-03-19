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
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  footer: "ONE Campaign, 2025",
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
