import { defineConfig } from 'sanity';
import { structureTool as deskTool } from 'sanity/structure';

// Securely read from environment variables for deployment
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'VibeLabs Backend',
  projectId, // Avoid hardcoding sensitive/deployment-specific values
  dataset,
  basePath: '/studio', // This is the magic link you will use to edit the site
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'project',
        title: 'Project',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'image', title: 'Cover Image', type: 'image' }
        ]
      }
    ],
  },
})
