import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 rounded bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 px-4 rounded hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>

          <section className="bg-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Address</h3>
                <p className="text-gray-300">
                  123 Innovation Street
                  <br />
                  Tech City, TC 12345
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-300">
                  contact@{siteConfig.name.toLowerCase()}.com
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
