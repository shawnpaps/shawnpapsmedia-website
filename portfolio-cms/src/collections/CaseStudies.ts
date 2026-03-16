import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',

  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'status', 'publishedAt'],
  },

  fields: [
    // ── Core ──────────────────────────────────────────────────────────────────
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier, e.g. "my-case-study"',
      },
    },
    {
      name: 'client',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'A short description shown in listings and previews.',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    // ── Meta sidebar ──────────────────────────────────────────────────────────
    {
      name: 'role',
      type: 'text',
      admin: {
        description: 'Your role on this project, e.g. "Design & Development"',
        position: 'sidebar',
      },
    },
    {
      name: 'timeline',
      type: 'text',
      admin: {
        description: 'e.g. "6 weeks" or "Jan – Mar 2025"',
        position: 'sidebar',
      },
    },
    {
      name: 'liveUrl',
      type: 'text',
      admin: {
        description: 'Live site URL (optional)',
        position: 'sidebar',
      },
    },
    {
      name: 'repoUrl',
      type: 'text',
      admin: {
        description: 'GitHub / repo URL (optional)',
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'array',
      admin: { position: 'sidebar' },
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'category',
      type: 'select',
      admin: {
        position: 'sidebar',
      },
      options: [
        { label: 'Web App', value: 'web-app' },
        { label: 'Design System', value: 'design-system' },
        { label: 'E-Commerce', value: 'e-commerce' },
        { label: 'Branding', value: 'branding' },
        { label: 'Marketing Site', value: 'marketing-site' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'MMM d, yyyy',
        },
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },

    // ── Services used ─────────────────────────────────────────────────────────
    {
      name: 'services',
      label: 'Services Provided',
      type: 'array',
      admin: {
        description: 'List each service delivered on this project.',
      },
      fields: [
        {
          name: 'service',
          type: 'text',
          required: true,
        },
      ],
    },

    // ── Brief / Problem ───────────────────────────────────────────────────────
    {
      name: 'challenge',
      label: 'The Challenge',
      type: 'textarea',
      admin: {
        description: 'What problem was being solved? What was broken or missing?',
      },
    },

    // ── Approach ──────────────────────────────────────────────────────────────
    {
      name: 'approach',
      label: 'The Approach',
      type: 'richText',
      admin: {
        description: 'How did you think about and solve the problem?',
      },
    },

    // ── Outcomes ──────────────────────────────────────────────────────────────
    {
      name: 'outcomes',
      label: 'Outcomes',
      type: 'array',
      admin: {
        description: 'Key results, metrics, or qualitative wins.',
      },
      fields: [
        {
          name: 'stat',
          label: 'Stat / Number',
          type: 'text',
          admin: { description: 'e.g. "3×" or "40%"' },
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          admin: { description: 'e.g. "faster page loads" or "increase in conversions"' },
        },
      ],
    },

    // ── Quote / Testimonial ───────────────────────────────────────────────────
    {
      name: 'testimonial',
      label: 'Client Testimonial',
      type: 'group',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
        },
        {
          name: 'attribution',
          type: 'text',
          admin: { description: 'e.g. "Jane Smith, CEO of Acme"' },
        },
      ],
    },

    // ── Gallery ───────────────────────────────────────────────────────────────
    {
      name: 'gallery',
      label: 'Project Gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },

    // ── Rich body content (optional long-form) ────────────────────────────────
    {
      name: 'content',
      label: 'Additional Content',
      type: 'richText',
      admin: {
        description: 'Optional long-form body content (rendered below the gallery).',
      },
    },
  ],
}
