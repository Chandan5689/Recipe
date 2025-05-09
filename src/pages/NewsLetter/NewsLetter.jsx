import React from "react";

function NewsLetter() {
  return (
    <section className="bg-emerald-100 py-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Get Weekly Recipe Inspiration
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive delicious recipes, cooking
          tips, and exclusive content directly in your inbox every week.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow py-3 px-4 rounded border-none shadow-sm focus:ring-2 focus:ring-emerald-300 focus:outline-none text-sm bg-white"
            required
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded whitespace-nowrap transition-colors cursor-pointer font-medium"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from our company.
        </p>
      </div>
    </section>
  );
}

export default NewsLetter;
