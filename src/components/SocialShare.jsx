import React from 'react';
import { Twitter, Facebook, Linkedin, Link2, Share2 } from 'lucide-react';

const SocialShare = ({ url, title }) => {
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-400 flex items-center">
        <Share2 className="w-4 h-4 mr-2" />
        Share:
      </span>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors"
        title="Share on Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition-colors"
        title="Share on Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-700 transition-colors"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <button
        onClick={copyToClipboard}
        className="text-gray-400 hover:text-purple-400 transition-colors"
        title="Copy link"
      >
        <Link2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SocialShare; 