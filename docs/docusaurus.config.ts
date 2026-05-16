import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
    title: "Philote-MDO",
    tagline:
        "An open standard for distributed multidisciplinary design optimization",
    favicon: "img/favicon.ico",

    url: "https://mdo-standards.github.io",
    baseUrl: "/Philote-MDO/",

    organizationName: "MDO-Standards",
    projectName: "Philote-MDO",

    onBrokenLinks: "throw",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
            type: "text/css",
            integrity:
                "sha384-nB0miv6/jRmo5RLHO8BIp/8hwC1slNFDuv3VUgI4A7O/lEKmpRgiuNOQI2bRpFB",
            crossorigin: "anonymous",
        },
    ],

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                    editUrl:
                        "https://github.com/MDO-Standards/Philote-MDO/tree/develop/docs/",
                    lastVersion: "0.8.0",
                    versions: {
                        current: {
                            label: "Next",
                        },
                    },
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: "dark",
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: "Philote-MDO",
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "docsSidebar",
                    position: "left",
                    label: "Docs",
                },
                {
                    type: "docsVersionDropdown",
                    position: "right",
                },
                {
                    href: "https://github.com/MDO-Standards/Philote-MDO",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Documentation",
                    items: [
                        {
                            label: "Introduction",
                            to: "/docs/getting-started/intro",
                        },
                        {
                            label: "Data Representation",
                            to: "/docs/standard/data",
                        },
                        {
                            label: "Discipline Service",
                            to: "/docs/standard/discipline",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/MDO-Standards/Philote-MDO",
                        },
                        {
                            label: "Changelog",
                            to: "/docs/resources/release-notes",
                        },
                        {
                            label: "Philote-Python",
                            href: "https://mdo-standards.github.io/Philote-Python/",
                        },
                    ],
                },
            ],
            copyright: `Copyright \u00A9 2022-${new Date().getFullYear()} Christopher A. Lupp. Built with Docusaurus.<br/><small>This work has been cleared for public release, distribution unlimited, case number: AFRL-2023-1321. The views expressed are those of the author and do not necessarily reflect the official policy or position of the Department of the Air Force, the Department of Defense, or the U.S. government.</small>`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ["protobuf", "python", "bash"],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
