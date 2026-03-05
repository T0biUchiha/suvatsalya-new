export function Footer() {
  return (
    <>
      {/* Main Footer Section */}
      <footer className="w-full bg-brand-cream py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-bold text-brand-blue mb-6">Contact</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold text-gray-800">Suvatsalya</p>
                <p>A-111, Sector-70</p>
                <p>Gautam Buddha Nagar, Noida</p>
                <p>Pincode -201301</p>
                
                <p className="mt-4">+91-8400015666</p>
                <p className="text-sm">All days 8:00 AM - 8:00 PM</p>

                <a href="mailto:info@suvatsalya.in" className="block text-brand-teal hover:text-brand-teal-dark">
                  info@suvatsalya.in
                </a>
                <div className="mt-6 space-y-2">
                  <a href="/policies" className="block text-gray-600 hover:text-brand-teal">Website Policies</a>
                  <a href="/terms" className="block text-gray-600 hover:text-brand-teal">Terms of Use</a>
                </div>
              </div>
            </div>

            {/* Useful Links Column */}
            <div>
              <h3 className="text-lg font-bold text-brand-blue mb-6">Useful Links</h3>
              <div className="space-y-3">
                <a href="/about" className="block text-gray-600 hover:text-brand-teal">About Us</a>
                <a href="/what-we-treat" className="block text-gray-600 hover:text-brand-teal">What We Treat</a>
                <a href="/therapies" className="block text-gray-600 hover:text-brand-teal">Therapies We Provide</a>
                <a href="/internships" className="block text-gray-600 hover:text-brand-teal">Careers</a>
                <a href="/testimonials" className="block text-gray-600 hover:text-brand-teal">Parent Testimonials</a>
                <a href="/blog" className="block text-gray-600 hover:text-brand-teal">Blog</a>
                <a href="/contact" className="block text-gray-600 hover:text-brand-teal">Contact Us</a>
              </div>
            </div>

            {/* News & Studies Column */}
            <div>
              <h3 className="text-lg font-bold text-brand-blue mb-6">News and Studies</h3>
              <div className="space-y-3">
                <a href="/testimonials" className="block text-gray-600 hover:text-brand-teal">Parent Stories</a>
                <a href="/blog" className="block text-gray-600 hover:text-brand-teal">Our Blog and Articles</a>
                <a href="/what-we-treat/autism" className="block text-gray-600 hover:text-brand-teal">Understanding Autism</a>
                <a href="/what-we-treat/adhd" className="block text-gray-600 hover:text-brand-teal">Understanding ADHD</a>
                <a href="/what-we-treat/high-risk-newborn" className="block text-gray-600 hover:text-brand-teal">High-Risk Newborns</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="w-full bg-white border-t border-gray-200 py-6">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; Suvatsalya Child Growth and Development Centre {new Date().getFullYear()}
            </p>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <a href="/about" className="text-gray-600 hover:text-brand-teal">About</a>
              <a href="/what-we-treat" className="text-gray-600 hover:text-brand-teal">What We Treat</a>
              <a href="/therapies" className="text-gray-600 hover:text-brand-teal">Therapies</a>
              <a href="/internships" className="text-gray-600 hover:text-brand-teal">Careers</a>
              <a href="/testimonials" className="text-gray-600 hover:text-brand-teal">Testimonials</a>
              <a href="/blog" className="text-gray-600 hover:text-brand-teal">Blog</a>
              <a href="/contact" className="text-gray-600 hover:text-brand-teal">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
