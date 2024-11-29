export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We bring the finest fashion from China directly to your doorstep,
              ensuring quality and style at competitive prices.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-sm hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="text-sm hover:text-white">Sale</a></li>
              <li><a href="#" className="text-sm hover:text-white">Our Story</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-sm hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="text-sm hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to get special offers, free giveaways, and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}