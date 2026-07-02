export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'content', type: 'array', title: 'Content', of: [{ type: 'block' }] },
    { name: 'excerpt', type: 'string', title: 'Excerpt' },
    { name: 'mainImage', type: 'image', title: 'Main Image', options: { hotspot: true } },
    { name: 'category', type: 'string', title: 'Category' },
    { name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] },
    { name: 'author', type: 'string', title: 'Author' },
    { name: 'publishedAt', type: 'datetime', title: 'Published At' },
    { name: 'readTime', type: 'string', title: 'Read Time' },
    { name: 'seoTitle', type: 'string', title: 'SEO Title' },
    { name: 'metaDescription', type: 'text', title: 'Meta Description' },
    { name: 'canonicalUrl', type: 'string', title: 'Canonical URL' },
    { name: 'noindex', type: 'boolean', title: 'No Index (SEO)' },
    {
      name: 'faq',
      type: 'array',
      title: 'FAQ Schema',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'text', title: 'Answer' }
          ]
        }
      ]
    }
  ]
};
