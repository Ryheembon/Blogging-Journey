// Blog posts data
export const blogPosts = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: "Python for Data Science",
    excerpt: "Master Python programming for data analysis, visualization, and machine learning with practical examples and best practices.",
    category: "Programming",
    readTime: "10 min read",
    likes: 56,
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaecb?q=80&w=1000",
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
  }
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