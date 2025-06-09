// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: "URL Shortener Project",
    excerpt: "A full-stack URL shortening service built with Go and React, featuring a modern UI and RESTful API implementation.",
    category: "Full Stack",
    readTime: "8 min read",
    likes: 0,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    content: `I've developed a URL Shortener application that demonstrates my full-stack development skills using Go and React! 🚀

Project Overview:
• Full-stack URL shortening service
• Modern, responsive user interface
• RESTful API implementation
• Secure URL generation and redirection

Technical Stack:
• Backend: Go (Golang)
• Frontend: React
• API: RESTful architecture
• Styling: HTML/CSS

Key Features:
• URL shortening and redirection
• Custom URL aliases
• Analytics tracking
• Responsive design
• Secure URL generation

Learning Points:
• Go backend development
• React frontend implementation
• REST API design
• Database integration
• Security best practices

The project showcases my ability to:
• Build scalable backend services
• Create modern, responsive UIs
• Implement RESTful APIs
• Handle data persistence
• Ensure application security

#GoLang #React #FullStack #WebDevelopment #RESTAPI #JavaScript #HTML #CSS #SoftwareEngineering #TechInProgress`
  },
  {
    id: 2,
    title: "My Journey Through IBM's Container Course",
    excerpt: "A comprehensive journey through Docker, Kubernetes, and OpenShift - from building containers to managing complex deployments.",
    category: "DevOps",
    readTime: "12 min read",
    likes: 89,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000",
    content: `I recently completed IBM's Introduction to Containers course, and it was an incredible journey into the world of containerization! 🚀

Course Overview:
• Docker fundamentals and container basics
• Kubernetes orchestration and management
• OpenShift platform and deployment strategies
• Real-world application deployment

Hands-on Projects:
1. Multi-tier Guestbook Application
   • Built with Go and HTML/CSS
   • Containerized using Docker
   • Deployed on Kubernetes
   • Scaled on OpenShift

Key Skills Acquired:
• Dockerfile creation and optimization
• Kubernetes deployment management
• OpenShift platform operations
• Container orchestration
• Load balancing and scaling
• Rollout and rollback strategies

Technical Highlights:
• Mastered kubectl and oc CLI tools
• Implemented Horizontal Pod Autoscaling (HPA)
• Configured port forwarding
• Managed deployment scaling
• Handled container networking

Best Practices Learned:
• Container security considerations
• Production-ready deployment strategies
• Monitoring and logging
• Resource optimization
• High availability setup

The course wasn't just theoretical - it provided hands-on experience with real-world scenarios, making the learning process both practical and engaging. The combination of Docker, Kubernetes, and OpenShift gave me a comprehensive understanding of modern containerization technologies.

#Containers #Docker #Kubernetes #OpenShift #DevOps #IBM #CloudNative #GoLang #SoftwareEngineering #TechInProgress`
  },
  {
    id: 3,
    title: "Getting Started with Kubernetes",
    excerpt: "Learn the fundamentals of container orchestration with Kubernetes, from basic concepts to deploying your first application.",
    category: "DevOps",
    readTime: "8 min read",
    likes: 42,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000",
    content: `Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.

Key Concepts:
• Pods: The smallest deployable units in Kubernetes
• Deployments: Manage the desired state of your applications
• Services: Enable network access to your applications
• Namespaces: Organize and isolate resources

Getting Started:
1. Install kubectl (Kubernetes command-line tool)
2. Set up a local cluster with Minikube
3. Deploy your first application
4. Scale and manage your containers

Best Practices:
• Always use version control for your Kubernetes manifests
• Implement health checks for your containers
• Use resource limits to prevent resource exhaustion
• Keep your container images up to date`
  },
  {
    id: 4,
    title: "Python for Data Science",
    excerpt: "Master Python programming for data analysis, visualization, and machine learning with practical examples and best practices.",
    category: "Programming",
    readTime: "10 min read",
    likes: 56,
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1000",
    content: `Python is a versatile programming language that's perfect for data science. Its simple syntax and powerful libraries make it ideal for beginners.

Essential Libraries:
• NumPy: For numerical computing
• Pandas: For data manipulation and analysis
• Matplotlib: For data visualization
• Scikit-learn: For machine learning

Getting Started:
1. Install Python and pip
2. Set up a virtual environment
3. Install essential data science packages
4. Start with basic data analysis

Basic Data Analysis Workflow:
1. Import and clean your data
2. Explore and visualize the data
3. Perform statistical analysis
4. Build and evaluate models

Tips for Success:
• Use Jupyter Notebooks for interactive development
• Document your code and analysis
• Practice with real-world datasets
• Join Python data science communities`
  },
  {
    id: 5,
    title: "Fundamentals of DevOps",
    excerpt: "Learn the core concepts and practices of DevOps, including continuous integration, continuous delivery, and infrastructure as code.",
    category: "DevOps",
    readTime: "15 min read",
    likes: 42,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000",
    content: `DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery.

Core DevOps Practices:
• Continuous Integration (CI): Automatically build and test code changes
• Continuous Delivery (CD): Automate the release process
• Infrastructure as Code (IaC): Manage infrastructure using code
• Monitoring and Logging: Track application performance

Getting Started with DevOps:
1. Set up version control (Git)
2. Implement CI/CD pipelines
3. Use containerization (Docker)
4. Adopt infrastructure automation

Key DevOps Tools:
• Jenkins: For CI/CD automation
• Docker: For containerization
• Kubernetes: For container orchestration
• Terraform: For infrastructure as code

Best Practices:
• Automate everything possible
• Implement comprehensive testing
• Use version control for all code
• Monitor and measure everything
• Foster collaboration between teams`
  },
  
];

// Template for adding new blog posts
export const newBlogTemplate = {
  id: null, // Will be auto-generated
  title: "",
  excerpt: "",
  category: "",
  readTime: "",
  likes: 0,
  image: "",
  content: ""
};

// Calculate reading time based on content length
export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

// Function to add a new blog post
export const addNewBlogPost = (newPost) => {
  const newId = blogPosts.length + 1;
  
  // Calculate reading time
  const readTime = calculateReadingTime(newPost.content);
  
  // Create the new blog post object
  const blogPost = {
    ...newBlogTemplate,
    ...newPost,
    id: newId,
    readTime
  };
  
  // Add to the beginning of the array
  blogPosts.unshift(blogPost);
  
  return blogPost;
}; 