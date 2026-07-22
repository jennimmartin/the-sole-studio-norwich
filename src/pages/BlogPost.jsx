import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogPost } from "../lib/contentful";

import SEO from "../components/SEO";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPost(slug)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog post:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl text-charcoal-500">Loading...</div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Post not found</h1>
          <Link to="/blog" className="text-charcoal-500 hover:text-black">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white py-16 md:py-24">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      <article className="align-element">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-block text-sm text-charcoal-500 hover:text-black transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <div className="text-sm text-charcoal-500 mb-4">
            {formatDate(post.publishDate)} · {post.author}
          </div>
          <h1 className="text-4xl md:text-5xl mb-6">{post.title}</h1>
          {post.excerpt && (
            <p className="text-lg text-charcoal-500 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="aspect-[16/9] overflow-hidden bg-neutral-100">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-semibold prose-headings:mb-4 prose-headings:mt-8
              prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
              prose-p:text-charcoal-500 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-black prose-a:underline hover:prose-a:text-charcoal-500
              prose-ul:text-charcoal-500 prose-ul:mb-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:text-charcoal-500 prose-ol:mb-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:mb-2
              prose-strong:text-black
              prose-blockquote:border-l-black prose-blockquote:italic prose-blockquote:pl-4"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>

        {/* Footer - Back to Blog */}
        <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-neutral-200 text-center">
          <Link
            to="/blog"
            className="inline-block text-sm text-charcoal-500 hover:text-black transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
