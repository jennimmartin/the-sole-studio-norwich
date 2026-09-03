import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

// Contentful's rich text editor distinguishes between a genuine new
// paragraph (Enter) and a "soft" line break within the same paragraph
// (Shift+Enter) — the second looks identical while typing, but by default
// gets silently dropped when converted to HTML. These options make both
// cases render correctly: paragraphs are explicitly wrapped in <p> tags,
// and any soft line break that survives as a \n character becomes a
// visible <br/>.
//
// Note: these options MERGE with the renderer's own built-in defaults —
// they don't replace them. Headings, bold/italic, links, and lists are
// still handled automatically by the library without us specifying them;
// we're only overriding the one thing (paragraphs/line breaks) that
// needed different behavior than the default.
const richTextOptions = {
  renderNode: {
    paragraph: (node, next) => `<p>${next(node.content)}</p>`,
  },
  // Contentful's editor can represent a soft line break as a plain \n,
  // or as the Unicode line/paragraph separator characters (\u2028, \u2029)
  // that its underlying text-editing framework sometimes uses instead —
  // catching all three rather than just \n.
  renderText: (text) => text.replace(/\n|\u2028|\u2029/g, "<br/>"),
};

// Fetch all active treatments
export const getTreatments = async () => {
  try {
    const response = await client.getEntries({
      content_type: "treatment",
      "fields.isActive": true,
      order: "fields.displayOrder",
    });

    return response.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      duration: item.fields.duration,
      price: item.fields.price,
      description: item.fields.description
        ? documentToHtmlString(item.fields.description, richTextOptions)
        : "",
      benefits: item.fields.benefits || [],
      targetAudience: item.fields.targetAudience,
      category: item.fields.category,
      displayOrder: item.fields.displayOrder || 0,
    }));
  } catch (error) {
    console.error("Error fetching treatments:", error);
    return [];
  }
};

// Fetch all published blog posts
export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.isPublished": true,
      order: "-fields.publishDate",
    });

    return response.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      body: item.fields.body
        ? documentToHtmlString(item.fields.body, richTextOptions)
        : "",
      featuredImage: item.fields.featuredImage?.fields.file.url,
      publishDate: item.fields.publishDate,
      author: item.fields.author || "Suzanne Martin",
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

// Fetch single blog post by slug
export const getBlogPost = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      "fields.isPublished": true,
      limit: 1,
    });

    if (response.items.length === 0) return null;

    const item = response.items[0];
    return {
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      body: item.fields.body
        ? documentToHtmlString(item.fields.body, richTextOptions)
        : "",
      featuredImage: item.fields.featuredImage?.fields.file.url,
      publishDate: item.fields.publishDate,
      author: item.fields.author || "Suzanne Martin",
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};

// Fetch all FAQs
export const getFaqs = async () => {
  try {
    const response = await client.getEntries({
      content_type: "faq",
      order: "fields.displayOrder",
    });

    return response.items.map((item) => ({
      id: item.sys.id,
      question: item.fields.question,
      answer: item.fields.answer
        ? documentToHtmlString(item.fields.answer, richTextOptions)
        : "",
      category: item.fields.category?.[0] || "",
      displayOrder: item.fields.displayOrder || 0,
    }));
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};
