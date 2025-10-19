import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 font-light">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Start Your <span className="text-gold">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can bring your interior vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-light mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1" size={24} />
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-muted-foreground text-sm">
                    Kuwait City, Kuwait
                    <br />
                    2000 SQM Facilities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-1" size={24} />
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <p className="text-muted-foreground text-sm">+965 XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-gold mt-1" size={24} />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-muted-foreground text-sm">info@danaalbahar.com</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-gold/20 rounded-lg p-6 shadow-card">
              <h4 className="font-medium mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span className="text-gold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-gold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-card border-gold/20 focus:border-gold"
                required
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-card border-gold/20 focus:border-gold"
                required
              />
            </div>
            <div>
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-card border-gold/20 focus:border-gold"
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-card border-gold/20 focus:border-gold resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-gold text-black font-medium hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2" size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
