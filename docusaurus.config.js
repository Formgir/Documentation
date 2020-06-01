module.exports = {
    title: "فرم گیر",
    tagline: "مستندات فرم گیر",
    url: "https://formg.ir",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "formgir",
    projectName: "documentation",
    themeConfig: {
        disableDarkMode: false,
        defaultDarkMode: true,
        navbar: {
            title: "مستندات فرم گیر",
            logo: {
                alt: "Logo",
                src: "img/logo.png",
            },
            links: [
                {
                    href: "#",
                    label: "حساب کاربری",
                    position: "right",
                },
                {
                    href: "https://github.com/Formgir",
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
                    homePageId: "00-description",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/Formgir/Documentation/tree/master/",
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/Formgir/Documentation/tree/master/blog/",
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
