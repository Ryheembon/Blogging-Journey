import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Share2, ArrowUp, Clock, Tag, Code, Rocket, Layers, Search, Filter } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import AddBlogPost from './AddBlogPost';
import Comments from './Comments';
import SocialShare from './SocialShare';
import CodeBlock from './CodeBlock';
import TableOfContents from './TableOfContents';
import ThemeToggle from './ThemeToggle';
import Newsletter from './Newsletter';

const ImmersiveBlog = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedPost, setExpandedPost] = useState(null);
  const [posts, setPosts] = useState(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
      
      // Calculate reading progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadingProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const handleNewPost = (newPost) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  // Filter and search posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'newest') return b.id - a.id;
    if (sortBy === 'oldest') return a.id - b.id;
    if (sortBy === 'likes') return b.likes - a.likes;
    return 0;
  });

  // Get unique categories
  const categories = ['all', ...new Set(posts.map(post => post.category))];

  const renderContent = (content) => {
    // Split content into paragraphs and code blocks
    const parts = content.split(/(```[\s\S]*?```)/);
    
    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        // Extract language and code from code block
        const [language, ...codeLines] = part.slice(3, -3).split('\n');
        const code = codeLines.join('\n');
        return <CodeBlock key={index} code={code} language={language} />;
      }
      
      // Regular paragraph
      return (
        <p key={index} className="mb-4 text-gray-300">
          {part}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 + scrollY * 0.05}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div 
          className="text-center transform transition-all duration-1000"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Digital Stories
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Where technology meets creativity in immersive narratives
          </p>
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center bg-gray-800/60 rounded-xl p-8 mb-12 shadow-lg max-w-2xl mx-auto -mt-24">
        <img
          src={`${import.meta.env.BASE_URL}Profile.jpg`}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-purple-400 shadow-md mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h2 className="text-2xl font-bold text-purple-300 mb-2">Hi, I'm [Ryheem Bonaparte]!</h2>
          <p className="text-gray-200 text-lg mb-4">
            I'm passionate about technology, coding, and sharing my journey as I learn JavaScript, React, Python, and more. Welcome to my blog where I document my progress, share tips, and connect with fellow learners!
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/ryheem-bonaparte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-200 underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/b3yond_the_hor1zon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-200 underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="likes">Most Liked</option>
                </select>
              </div>
            </div>
          </div>

          {/* Add Blog Post Form */}
          <AddBlogPost onPostAdded={handleNewPost} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedPosts.map((post) => (
              <article 
                key={post.id}
                className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="flex items-center text-sm text-purple-400 font-medium">
                      <Tag className="w-4 h-4 mr-1" />
                      {post.category}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                      <span className="ml-1 text-xs text-gray-600">(estimated)</span>
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  
                  {/* Article Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedPost === post.id 
                        ? 'max-h-[2000px]' // Increased max height
                        : 'max-h-0'
                    }`}
                  >
                    <div className="prose prose-invert max-w-none mt-4 text-gray-300">
                      {renderContent(post.content)}
                    </div>

                    {/* Table of Contents */}
                    {expandedPost === post.id && (
                      <div className="mt-8 mb-8">
                        <TableOfContents content={post.content} />
                      </div>
                    )}

                    {/* Social Share */}
                    <div className="mt-6 mb-8">
                      <SocialShare 
                        url={`https://ryheembon.github.io/Blogging-Journey/post/${post.id}`}
                        title={post.title}
                      />
                    </div>

                    {/* Comments Section */}
                    {expandedPost === post.id && (
                      <div className="mt-8 border-t border-gray-700/50 pt-8">
                        <Comments postId={post.id} />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <button 
                      onClick={() => togglePost(post.id)}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {expandedPost === post.id ? 'Show Less' : 'Read More'}
                    </button>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-purple-400 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16">
            <Newsletter />
          </div>
        </div>
      </section>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-purple-600/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-colors z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ImmersiveBlog; 