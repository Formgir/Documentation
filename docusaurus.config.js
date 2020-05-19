module.exports = {
    title: "My Site",
    tagline: "The tagline of my site",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "My Site",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.svg",
            },
            links: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                { to: "blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/facebook/docusaurus",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Style Guide",
                            to: "docs/",
                        },
                        {
                            label: "Second Doc",
                            to: "docs/doc2/",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Stack Overflow",
                            href:
                                "https://stackoverflow.com/questions/tagged/docusaurus",
                        },
                        {
                            label: "Discord",
                            href: "https://discordapp.com/invite/docusaurus",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/docusaurus",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/facebook/docusaurus",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    path: "./docs",
                    routeBasePath: "/",
                    homePageId: "description",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/facebook/docusaurus/edit/master/website/",
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/facebook/docusaurus/edit/master/website/blog/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    plugins: ["docusaurus-plugin-sass"],
};
