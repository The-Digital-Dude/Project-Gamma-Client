import React from "react";
import Link from "next/link";
import Heading from "@/components/ui-elements/Heading/Heading";
import styles from "./blog.module.scss";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "digital-transformation",
    title:
      "The Future of Property Management: Embracing Digital Transformation",
    excerpt:
      "Discover how modern property management is evolving with cutting-edge technology to streamline operations, enhance tenant experiences, and maximize efficiency.",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/img-1.webp",
    category: "Technology",
  },
  {
    id: "safety-compliance-guide",
    title:
      "Safety Compliance Made Simple: A Complete Guide for Property Managers",
    excerpt:
      "Navigate the complex world of safety regulations with our comprehensive guide covering electrical safety, gas safety, and fire prevention best practices.",
    author: "David Thompson",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "/img-2.jpg",
    category: "Safety",
  },
  {
    id: "maximizing-rental-income",
    title: "Maximizing Rental Income: Strategic Tips for Property Optimization",
    excerpt:
      "Learn proven strategies to increase your rental income through smart property improvements, tenant retention techniques, and market positioning.",
    author: "Emma Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/img-3.jpg",
    category: "Investment",
  },
];

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={`${styles.hero} common-section`}>
          <div className={styles.heroContent}>
            <Heading
              title="Insights & Resources"
              subtitle="Stay informed with the latest trends, tips, and insights in property management"
              size="lg"
              heading="h1"
            />
          </div>
        </section>

        {/* Blog Grid */}
        <section className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className={styles.blogCardLink}
            >
              <article className={styles.blogCard}>
                <div className={styles.imageContainer}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.blogImage}
                  />
                  <div className={styles.category}>{post.category}</div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.meta}>
                    <span className={styles.author}>{post.author}</span>
                    <span className={styles.divider}>•</span>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.divider}>•</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>

                  <h2 className={styles.title}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>

                  <div className={styles.readMore}>
                    Read More
                    <svg
                      className={styles.arrow}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M1 8H15M15 8L8 1M15 8L8 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
