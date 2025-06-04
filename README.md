# Immersive Blog Page

A modern, interactive blog page built with React and Tailwind CSS. This project features a beautiful dark theme with glassmorphism effects, smooth animations, and an engaging user interface.

## Features

- 🎨 Modern dark theme with glassmorphism effects
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 📝 Interactive blog post cards
- 🔍 Expandable post content
- ⬆️ Scroll-to-top button
- 💖 Like and share functionality
- 📝 Add new blog posts through UI
- 🎯 Parallax scrolling effects

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd blog_page2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
blog_page2/
├── src/
│   ├── components/
│   │   ├── ImmersiveBlog.jsx    # Main blog component
│   │   └── AddBlogPost.jsx      # Blog post creation form
│   ├── data/
│   │   └── blogPosts.js         # Blog posts data
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Adding New Blog Posts

You can add new blog posts in two ways:

1. Through the UI:
   - Click the "Add New Blog Post" button
   - Fill in the required fields
   - Click "Publish Post"

2. Programmatically:
   - Add a new post object to the `blogPosts` array in `src/data/blogPosts.js`

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License
