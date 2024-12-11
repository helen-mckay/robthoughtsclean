import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "about",
        label: "About",
        path: "src/content/about",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: true,
            toolbarOverride: ["heading", "bold", "italic", "quote", "ol", "ul", "link"]
          }
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          }
        }
      },
      {
        name: "brand",
        label: "Brand",
        path: "src/content/brand",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true  
          },
          {
            type: "image",
            name: "avatar",
            label: "Avatar",
            required: true
          },
          {
            type: "string",
            name: "intro",
            label: "Intro",
            required: true
          }
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          }
        }
      },
      {
        name: "thoughts",
        label: "Thoughts",
        path: "src/content/thoughts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true
          },
          {
            type: "datetime",
            name: "datePosted",
            label: "Date Posted",
            required: true,
            ui: {
              timeFormat: "HH:mm"
            }
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: true
          },
          {
            type: "string",
            name: "topics",
            label: "Topics",
            list: true,
            ui: {
              component: 'tags'
            }
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: false
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: true,
            toolbarOverride: ["heading", "bold", "italic", "quote", "ol", "ul", "link"]
          }
        ]
      },
    ],
  },
});
