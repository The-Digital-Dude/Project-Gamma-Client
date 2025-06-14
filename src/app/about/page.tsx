import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <div className="space-y-8">
          <section className="bg-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At {siteConfig.name}, we are dedicated to transforming ideas into
              reality through innovative solutions and cutting-edge technology.
              Our mission is to empower businesses and individuals with the
              tools they need to succeed in the digital age.
            </p>
          </section>

          <section className="bg-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded with a vision to revolutionize the industry, we've grown
              from a small team of passionate individuals to a full-service
              technology company. Our journey has been marked by continuous
              innovation and a commitment to excellence.
            </p>
          </section>

          <section className="bg-white/5 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Innovation and Creativity</li>
              <li>Customer-Centric Approach</li>
              <li>Technical Excellence</li>
              <li>Continuous Learning</li>
              <li>Integrity and Transparency</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
