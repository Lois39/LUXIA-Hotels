import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";

const blogPosts = [
  {
    image: room1,
    date: "March 15, 2024",
    author: "Hotel Team",
    title: "Spa treatments at the luxury summer",
    excerpt: "Discover our world-class spa treatments designed to rejuvenate your body and soul during the summer season."
  },
  {
    image: room2,
    date: "March 12, 2024", 
    author: "Sarah Johnson",
    title: "Best breakfast with your family",
    excerpt: "Start your day with our exquisite breakfast menu, featuring fresh local ingredients and international cuisine."
  },
  {
    image: room3,
    date: "March 10, 2024",
    author: "Michael Chen",
    title: "New restaurant dishes for you",
    excerpt: "Our executive chef has crafted new seasonal dishes that will tantalize your taste buds with unique flavors."
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-brown mb-4">
            Latest Blog & News
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest news, offers, and insider tips
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-luxury-brown group-hover:text-luxury-gold transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Button variant="outline-luxury" size="sm">
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;