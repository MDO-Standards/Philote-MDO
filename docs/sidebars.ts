import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
    docsSidebar: [
        {
            type: "category",
            label: "Getting Started",
            items: ["getting-started/intro"],
        },
        {
            type: "category",
            label: "Background",
            items: [
                "background/history",
                "background/technologies",
            ],
        },
        {
            type: "category",
            label: "The Standard",
            items: [
                "standard/data",
                "standard/discipline",
                "standard/explicit",
                "standard/implicit",
            ],
        },
        {
            type: "category",
            label: "Resources",
            items: [
                "resources/languages",
                "resources/licensing",
                "resources/release-notes",
            ],
        },
    ],
};

export default sidebars;
