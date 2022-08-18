// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thiha Swan Htet',
  tagline: 'fullstack web developer from Myanmar',
  url: 'https://thiha.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ninnroot', // Usually your GitHub org/user name.
  projectName: 'portfolio-v2', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        
        blog: {
          routeBasePath: "projects",
          blogTitle: "Projects",
          blogSidebarTitle: "Project list",

          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'thiha.net',
        logo: {
          alt: 'thiha.net logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/projects', label: 'Projects', position: 'left'},
          {
            href: 'https://github.com/ninnroot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'schedjuice5',
                to: 'https://github.com/ninnnroot/schedjuice5',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/jameydevdev',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/thiha-swanhtet-679811214/',
              },
              {
                label: 'Github',
                href: 'https://github.com/ninnroot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} thiha.net. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
