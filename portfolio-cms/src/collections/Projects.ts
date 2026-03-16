import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',

  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'status', 'startedAt'],
  },

  fields: [
    // ── Core ──────────────────────────────────────────────────────────────────
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier, e.g. "tourpass"',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      admin: {
        description: 'One-line description shown in the project list.',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      admin: {
        description: 'A short paragraph shown at the top of the project detail page.',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Hero image for the project detail page.',
      },
    },

    // ── Status & dates ────────────────────────────────────────────────────────
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'in-development',
      options: [
        { label: 'In Development', value: 'in-development' },
        { label: 'In Design', value: 'in-design' },
        { label: 'Launched', value: 'launched' },
        { label: 'On Hold', value: 'on-hold' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'visibility',
      type: 'select',
      required: true,
      defaultValue: 'public',
      options: [
        { label: 'Public', value: 'public' },
        { label: 'Hidden', value: 'hidden' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Hidden projects are excluded from the listing.',
      },
    },
    {
      name: 'startedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMM yyyy',
        },
        position: 'sidebar',
        description: 'When you started this project.',
      },
    },
    {
      name: 'launchedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMM yyyy',
        },
        position: 'sidebar',
        description: 'Launch date (optional — fill in when shipped).',
      },
    },

    // ── Links ─────────────────────────────────────────────────────────────────
    {
      name: 'liveUrl',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'Live site or app URL.',
      },
    },
    {
      name: 'repoUrl',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'GitHub / repo URL (optional).',
      },
    },

    // ── Tech stack ────────────────────────────────────────────────────────────
    {
      name: 'stack',
      label: 'Tech Stack',
      type: 'array',
      admin: {
        description: 'Technologies, frameworks, and tools used.',
      },
      fields: [
        {
          name: 'technology',
          type: 'text',
          required: true,
        },
      ],
    },

    // ── Tags ──────────────────────────────────────────────────────────────────
    {
      name: 'tags',
      type: 'array',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },

    // ── Detail content ────────────────────────────────────────────────────────
    {
      name: 'problem',
      label: 'The Problem',
      type: 'textarea',
      admin: {
        description: 'What problem is this project solving?',
      },
    },
    {
      name: 'approach',
      label: 'The Approach',
      type: 'richText',
      admin: {
        description: 'How are you thinking about and building this?',
      },
    },
    {
      name: 'content',
      label: 'Additional Content',
      type: 'richText',
      admin: {
        description: 'Any extra long-form content for the detail page.',
      },
    },

    // ── Gallery ───────────────────────────────────────────────────────────────
    {
      name: 'gallery',
      label: 'Screenshots / Gallery',
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

    // ── Sort order ────────────────────────────────────────────────────────────
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first in the list.',
      },
    },
  ],
}
