const path = require('path');

module.exports = {
  title: 'Fathym pROADject',
  tagline: 'pROADject your drive with weather based routing | No credit card required',
  url: 'https://www.proadject.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'fathym-it', // Usually your GitHub org/user name.
  projectName: 'proadject-docs', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-NEWEXH7W8C',
    },
    oribi: {
      trackingID: 'XzcwMzAwMzkyNA',
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    navbar: {
      title: 'pROADject',
      logo: {
        alt: 'pROADject',
        src: 'img/Fathym-logo-white-01.png',
      },
      items: [
        {
          href: 'https://www.proadject.com/',
          label: 'Home',
          position: 'left',
          target: '_top',
        },
        {
          href: 'https://www.proadject.com/pricing',
          label: 'Pricing',
          position: 'right',
          target: '_top',
        },
        {
          to: '/',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://www.proadject.com/blog',
          label: 'Blog',
          position: 'right',
          target: '_top',
        },
        {
          href: 'https://www.proadject.com/dashboard',
          label: 'Sign In',
          position: 'right',
          target: '_top',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Next Steps',
          items: [
            {
              label: 'Getting Started',
              to: 'https://www.proadject.com/dashboard',
            },
            {
              label: 'Pricing',
              to: 'https://www.proadject.com/pricing',
            },
            {
              label: 'Support',
              to: '/introduction/support',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/proadject',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/proadject',
            //},
            {
              label: 'Twitter',
              href: 'https://twitter.com/proadject',
            },
          ],
        },
        {
          title: 'Powered by Fathym',
          items: [
            {
              label: 'Learn More',
              href: 'https://www.fathym.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fathym, Inc`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // The iot-ensemble website repo
          // editUrl: 'https://github.com/fathym-it/proadject-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // plugins: [path.resolve(__dirname, 'plugins/oribi')],
};
