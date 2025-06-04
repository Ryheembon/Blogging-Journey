import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const matches = [...content.matchAll(headingRegex)];
    const extractedHeadings = matches.map((match, index) => {
      const level = match[1].length;
      const text = match[2];
      const id = `heading-${index}`;
      return { id, text, level };
    });
    setHeadings(extractedHeadings);

    // Add IDs to headings in the content
    const contentWithIds = content.replace(headingRegex, (match, hashes, text) => {
      const index = extractedHeadings.findIndex(h => h.text === text);
      return `${hashes} <span id="heading-${index}">${text}</span>`;
    });

    // Update content with IDs
    const contentElement = document.querySelector('.prose');
    if (contentElement) {
      contentElement.innerHTML = contentWithIds;
    }
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-center space-x-2 mb-4 text-gray-400">
        <List className="w-5 h-5" />
        <h3 className="font-medium">Table of Contents</h3>
      </div>
      <nav className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <button
            key={id}
            onClick={() => scrollToHeading(id)}
            className={`block w-full text-left px-2 py-1 rounded-lg transition-colors ${
              activeId === id
                ? 'bg-purple-500/20 text-purple-400'
                : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-300'
            }`}
            style={{ paddingLeft: `${(level - 1) * 1 + 0.5}rem` }}
          >
            {text}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents; 