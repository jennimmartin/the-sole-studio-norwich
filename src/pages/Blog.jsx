import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../lib/contentful";

import PageTitle from "../components/PageTitle";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog posts:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl text-charcoal-500">Loading posts...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="align-element">
      <PageTitle title="Blog" />
      {/* Header */}
      <div className="space-y-12 mb-12">
        <p className="text-center text-base md:text-lg text-charcoal-500 mb-12 mx-auto">
          Insights on foot care, wellness, and looking after yourself.
        </p>
      </div>

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-charcoal-500">
            No posts yet. Check back soon.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Link to={`/blog/${post.slug}`} className="group h-full">
      <article className="bg-white border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Image (or graceful placeholder if a post has none yet) */}
        <div className="aspect-[4/3] bg-neutral-100 overflow-hidden flex-shrink-0">
          {post.featuredImage ? (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-300 text-sm uppercase tracking-wide">
              The Sole Studio Norwich
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          {/* Date & Author */}
          <div className="text-sm text-charcoal-500 mb-3">
            {formatDate(post.publishDate)} · {post.author}
          </div>
          {/* Title */}
          <h2 className="text-xl md:text-2xl mb-3 group-hover:text-charcoal-500 transition-colors">
            {post.title}
          </h2>
          {/* Excerpt */}
          <p className="text-charcoal-500 leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          {/* Read More — pinned to the bottom so it lines up across a row */}
          <div className="text-sm group-hover:translate-x-2 transition-transform inline-block mt-auto">
            Read more →
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Blog;
