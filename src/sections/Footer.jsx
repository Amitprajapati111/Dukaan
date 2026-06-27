import { Heart, ArrowUp } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import confetti from "canvas-confetti";

export default function Footer() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      colors: ["#C5A880", "#DFBA73"]
    });
  };

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    triggerConfetti();
    alert("Thank you for subscribing to Dukaan Luxe newsletters!");
  };

  return (
    <footer className="relative bg-neutral-950 text-white pt-20 pb-28 lg:pb-12 border-t border-neutral-900 overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand details */}
          <div className="flex flex-col space-y-6">
            <a
              href="#home"
              className="font-serif text-xl tracking-[0.2em] font-light text-white flex items-center gap-1.5"
            >
              <span>DUKAAN</span>
              <span className="text-gold-400 font-normal">LUXE</span>
            </a>
            <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed max-w-xs">
              Premium garments manufactured with bespoke tailoring techniques. Empowering retail stores and closets globally.
            </p>
            {/* Socials */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-gold-400 hover:text-gold-400 flex items-center justify-center transition-colors text-neutral-400"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-gold-400 hover:text-gold-400 flex items-center justify-center transition-colors text-neutral-400"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-gold-400 hover:text-gold-400 flex items-center justify-center transition-colors text-neutral-400"
                aria-label="Youtube"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-sm text-gold-400 font-medium">Quick Links</h4>
            <div className="flex flex-col space-y-2.5 font-sans text-xs text-neutral-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#categories" className="hover:text-white transition-colors">Categories</a>
              <a href="#trending" className="hover:text-white transition-colors">Trending</a>
              <a href="#wholesale" className="hover:text-white transition-colors">Wholesale Operations</a>
            </div>
          </div>

          {/* Col 3: Product Departments */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-sm text-gold-400 font-medium">Categories</h4>
            <div className="flex flex-col space-y-2.5 font-sans text-xs text-neutral-400">
              <a href="#categories" className="hover:text-white transition-colors">Men's Apparel</a>
              <a href="#categories" className="hover:text-white transition-colors">Women's Couture</a>
              <a href="#categories" className="hover:text-white transition-colors">Kids Wearables</a>
              <a href="#categories" className="hover:text-white transition-colors">Wholesale Stocks</a>
              <a href="#categories" className="hover:text-white transition-colors">Atelier Accessories</a>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-sm text-gold-400 font-medium">Newsletter</h4>
            <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed mb-2">
              Subscribe to obtain catalog updates and season sale invites.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gold-400 hover:bg-gold-300 text-neutral-950 font-semibold rounded-xl font-sans text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright and signature */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between font-sans text-[10px] text-neutral-500">
          <div className="flex items-center space-x-1.5 mb-4 sm:mb-0">
            <span>© {currentYear} Dukaan Luxe. Crafted with</span>
            <Heart size={10} className="text-gold-400" fill="currentColor" />
            <span>for premium closets. All rights reserved.</span>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-1 hover:text-white transition-colors text-gold-400"
            >
              <span>Back to top</span>
              <ArrowUp size={10} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
