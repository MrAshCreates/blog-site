// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MrAshCreates',
  tagline: 'Your favorite site to get the latest from Asher',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://blog.mrashcreates.xyz/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MrAshCreates', // Usually your GitHub org/user name.
  projectName: 'blog-site', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like HTML lang. For example, if your site is Chinese, you may want
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
        docs: false,
        blog: {
          blogTitle: 'MrAshCreates Blog',
						blogDescription: 'The best place to read blogs from Asher',
						routeBasePath: '/',
						showReadingTime: true,
						editUrl: 'https://github.com/MrAshCreates/blog-site/tree/main/',
						postsPerPage: 'ALL',
						blogSidebarTitle: 'All posts',
						blogSidebarCount: 'ALL',
				
						feedOptions: {
							type: 'all',
							copyright: `Copyright © ${new Date().getFullYear()} MrAshCreates`,
						},

        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    // Merge your themeConfig properties here
    // Replace with your project's social card
    image: 'img/banner-2560x1440.jpg',
    navbar: {
      title: 'MrAshCreates',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/MrAshCreates/blog-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/asher-winstead-a89a8325b',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/SW3tAHvfBD',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MrAshCreates',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main Site',
              href: 'https://mrashcreates.xyz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MrAshCreates/blog-site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MrAshCreates`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;