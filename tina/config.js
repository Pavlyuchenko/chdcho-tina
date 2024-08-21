import { defineConfig } from "tinacms";

const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,
    clientId: "13445a62-7ba5-4038-aa9e-6bb0cbf9cc03",
    token: "8eb9858d0220c18f50d6e209572ff6581468033c",
    apiURL: `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`, // Set up the apiURL
    build: {
        publicFolder: "public",
        outputFolder: "admin",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "static",
        },
    },
    schema: {
        collections: [
            {
                name: "stranky",
                label: "Stránky",
                path: "content/pages",
                fields: [
                    {
                        type: "string",
                        name: "nadpis",
                        label: "nadpis",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "podnadpis",
                        label: "podnadpis",
                    },
                    {
                        type: "image",
                        name: "heroImage",
                        label: "Hero Image",
                    },
                ],
            },
            {
                name: "post",
                label: "Posts",
                path: "content/posts",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            },
        ],
    },
});
