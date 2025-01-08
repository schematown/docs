import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Schema Town Docs",
  description: "Schema Town Docs",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      { src: "https://cdn.usefathom.com/script.js", "data-site": "ZRANKCSF" },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: "https://github.com/schematown/docs/edit/main/:path",
    },
    logo: {
      light: "/light-logo.svg",
      dark: "/dark-logo.svg",
    },
    nav: [
      { text: "Getting Started", link: "/getting-started/creating-an-account" },
      { text: "Examples", link: "/examples/making-an-api-request" },
      { text: "OpenAPI Reference", link: "/openapi-reference" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "Creating an Account",
            link: "/getting-started/creating-an-account",
          },
        ],
      },
      {
        text: "Examples",
        items: [
          {
            text: "Making an API Request",
            link: "/examples/making-an-api-request",
          },
        ],
      },
      {
        text: "OpenAPI Reference",
        link: "/openapi-reference",
      },
      {
        text: "Documentation Versioning",
        link: "/documentation-versioning",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/schematown" }],
  },
});
