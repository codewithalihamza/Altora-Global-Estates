const blogPosts = [
    {
        title: "The Rise of Sustainable Luxury Real Estate",
        excerpt: "Discover how eco-friendly features are becoming a must-have in high-end properties and what this means for the future of luxury real estate.",
        date: "March 15, 2024",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop",
        category: "Trends"
    },
    {
        title: "Investment Opportunities in Emerging Markets",
        excerpt: "An in-depth analysis of promising real estate markets worldwide and why they should be on your investment radar.",
        date: "March 10, 2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop",
        category: "Investment"
    },
    {
        title: "Guide to Foreign Property Ownership",
        excerpt: "Everything you need to know about purchasing property abroad, from legal considerations to financial planning.",
        date: "March 5, 2024",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop",
        category: "Guide"
    },
    {
        title: "Luxury Home Design Trends for 2024",
        excerpt: "Explore the latest architectural and interior design trends shaping luxury homes around the world.",
        date: "March 1, 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop",
        category: "Design"
    },
];

const BlogPage = () => {
    return (
        <div className="container py-12">
            <h1 className="text-4xl font-serif text-altora-navy text-center mb-4">
                Insights & Updates
            </h1>
            <p className="text-center text-altora-gray-dark mb-12 max-w-2xl mx-auto">
                Stay informed with the latest trends, insights, and news from the world of luxury real estate and global migration.
            </p>

            {/* Featured Post */}
            <div className="mb-12">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                    <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <span className="inline-block px-3 py-1 bg-altora-gold text-white text-sm rounded mb-4">
                            {blogPosts[0].category}
                        </span>
                        <h2 className="text-3xl font-serif text-white mb-2">{blogPosts[0].title}</h2>
                        <p className="text-white/80 mb-4">{blogPosts[0].excerpt}</p>
                        <div className="flex items-center text-white/60">
                            <span>{blogPosts[0].date}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative h-48">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <span className="inline-block px-3 py-1 bg-altora-gold/10 text-altora-gold text-sm rounded mb-4">
                                {post.category}
                            </span>
                            <h3 className="text-xl font-serif text-altora-navy mb-2">{post.title}</h3>
                            <p className="text-altora-gray-dark mb-4 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center text-altora-gray-dark/60 text-sm">
                                <span>{post.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage; 