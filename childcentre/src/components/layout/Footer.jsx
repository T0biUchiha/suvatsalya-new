export function Footer() {
  return (
    <>
      {/* Main Footer Section */}
      <footer className="w-full bg-gray-50 py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-medium text-gray-800">Suvatsalya</p>
                <p>A-111, Sector-70</p>
                <p>Gautam Buddha Nagar, Noida</p>
                <p>Pincode -201301</p>
                
                <p className="mt-4">+91-8400015666</p>

                <a href="mailto:info@suvatsalya.in" className="block text-teal-600 hover:text-teal-700">
                  info@suvatsalya.in
                </a>
                {/* --- UPDATED LINKS HERE --- */}
                <div className="mt-6 space-y-2">
                  <a href="/policies" className="block text-gray-600 hover:text-teal-600">Website Policies</a>
                  <a href="/terms" className="block text-gray-600 hover:text-teal-600">Terms of Use</a>
                </div>
              </div>
            </div>

            {/* Useful Links Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Useful Links</h3>
              <div className="space-y-3">
                <a href="/about" className="block text-gray-600 hover:text-teal-600">About Us</a>
                <a href="/what-we-treat" className="block text-gray-600 hover:text-teal-600">What We Treat</a>
                <a href="/therapies" className="block text-gray-600 hover:text-teal-600">Therapies We Provide</a>
                <a href="/internships" className="block text-gray-600 hover:text-teal-600">Careers & Internships</a>
                <a href="/testimonials" className="block text-gray-600 hover:text-teal-600">Parent Testimonials</a>
                <a href="/blog" className="block text-gray-600 hover:text-teal-600">Blog</a>
                <a href="/contact" className="block text-gray-600 hover:text-teal-600">Contact Us</a>
              </div>
            </div>

            {/* News & Studies Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">News & Studies</h3>
              <div className="space-y-3">
                <a href="/testimonials" className="block text-gray-600 hover:text-teal-600">Parent Stories</a>
                <a href="/blog" className="block text-gray-600 hover:text-teal-600">Our Blog & Articles</a>
                <a href="/what-we-treat/autism" className="block text-gray-600 hover:text-teal-600">Understanding Autism</a>
                <a href="/what-we-treat/adhd" className="block text-gray-600 hover:text-teal-600">Understanding ADHD</a>
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
              © Suvatsalya Child Development Centre 2025
            </p>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <a href="/about" className="text-gray-600 hover:text-teal-600">About</a>
              <a href="/what-we-treat" className="text-gray-600 hover:text-teal-600">What We Treat</a>
              <a href="/therapies" className="text-gray-600 hover:text-teal-600">Therapies</a>
              <a href="/internships" className="text-gray-600 hover:text-teal-600">Internships</a>
              <a href="/testimonials" className="text-gray-600 hover:text-teal-600">Testimonials</a>
              <a href="/blog" className="text-gray-600 hover:text-teal-600">Blog</a>
              <a href="/contact" className="text-gray-600 hover:text-teal-600">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}