export function Media() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Title Bar */}
      <section className="w-full bg-gray-50 py-16 pt-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Media</h1>
        </div>
      </section>
      
      {/* Content Area */}
      <section className="w-full py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700">
            Media mentions and articles will go here.
          </p>
        </div>
      </section>
    </div>
  );
}