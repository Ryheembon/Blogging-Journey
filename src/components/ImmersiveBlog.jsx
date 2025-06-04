import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Share2, ArrowUp, Clock, Tag, Code, Rocket, Layers } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import AddBlogPost from './AddBlogPost';

const ImmersiveBlog = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedPost, setExpandedPost] = useState(null);
  const [posts, setPosts] = useState(blogPosts);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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

      {/* Blog Posts Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          
          {/* Add Blog Post Form */}
          <AddBlogPost onPostAdded={handleNewPost} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
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
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  
                  {/* Article Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${expandedPost === post.id ? 'max-h-[500px]' : 'max-h-0'}`}>
                    <div className="prose prose-invert max-w-none mt-4 text-gray-300">
                      {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
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
                      <button className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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