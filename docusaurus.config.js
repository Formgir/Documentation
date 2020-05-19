module.exports = {
    title: "فرم گیر",
    tagline: "مستندات فرم گیر",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "formgir",
    projectName: "documentation",
    themeConfig: {
        disableDarkMode: true,
        defaultDarkMode: true,
        navbar: {
            title: "فرم گیر",
            logo: {
                alt: "Logo",
                src: "img/logo.png",
            },
            links: [
                {
                    href: "https://github.com/facebook/docusaurus",
                    label: "حساب کاربری",
                    position: "right",
                },
                {
                    href: "https://github.com/facebook/docusaurus",
                    label: "گیت هاب",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            logo: {
                alt: "Arash Hatami",
                src: "img/logo-footer.png",
            },
            copyright: `.:: Designed For Better World ::.`,
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
                    customCss: require.resolve("./src/css/custom.scss"),
                },
                sitemap: {
                    cacheTime: 600 * 1000,
                    changefreq: "weekly",
                    priority: 0.5,
                },
            },
        ],
    ],
    plugins: ["docusaurus-plugin-sass"],
};
