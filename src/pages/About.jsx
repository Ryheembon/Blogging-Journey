import React from 'react';

const About = () => (
  <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-16">
    <section className="bg-gray-800/70 rounded-xl p-8 shadow-lg max-w-2xl w-full flex flex-col items-center">
      <img
        src="/Profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover border-4 border-purple-400 shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold text-purple-300 mb-2">About Me</h1>
      <p className="text-gray-200 text-lg text-center mb-4">
        Hi, I'm [Your Name]! I'm a passionate developer and lifelong learner. I love building web apps, exploring new technologies, and sharing my journey with others. My main interests are JavaScript, React, Python, and creative coding. Thanks for visiting my blog!
      </p>
      <div className="flex space-x-4 mt-4">
        {/* Example social links */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-200 underline">GitHub</a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-200 underline">Twitter</a>
      </div>
    </section>
  </main>
);

export default About; 