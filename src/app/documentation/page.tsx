import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    title: "Energy Safe Victoria (ESV)",
    description:
      "Official guidance on electrical and gas safety checks, and compliance for Victorian rental properties.",
    logo: "/esv-logo_0.png",
    url: "https://www.energysafe.vic.gov.au/industry-guidance/electrical/electricians-toolkit/residential-tenancy",
  },
  {
    title: "Housing VIC",
    description:
      "Information on maintenance responsibilities for public and community housing in Victoria.",
    logo: "/housing vic.png",
    url: "https://www.housing.vic.gov.au/our-maintenance-responsibilities",
  },
  {
    title: "Victorian Building Authority (VBA)",
    description:
      "Consumer guidance on the Residential Tenancies Regulations 2021 and building safety standards.",
    logo: "/bpc.png",
    url: "https://www.vba.vic.gov.au/consumers/residential-tenancies-regulations-2021",
  },
  {
    title: "Consumer Affairs Victoria",
    description:
      "Rules for rental providers and tenants, including property entry and inspection rights.",
    logo: "/consumemt.png",
    url: "https://www.consumer.vic.gov.au/housing/renting/rental-providers-inspecting-or-entering-a-property/when-a-rental-provider-can-enter-a-property",
  },
  {
    title: "Tenants Victoria",
    description:
      "Tenant-focused safety requirements and rights during your tenancy in Victoria.",
    logo: "/tenants.png",
    url: "https://tenantsvic.org.au/explore-topics/during-your-tenancy/safety-requirements/",
  },
];

export default function DocumentationPage() {
  return (
    <main
      style={{ padding: "2rem 0", background: "#f9f9f9", minHeight: "100vh" }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 1rem",
          marginTop: 64,
        }}
      >
        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: 800,
            marginBottom: 8,
            color: "#1a237e",
          }}
        >
          Victorian Rental Safety & Tenancy Documentation
        </h1>
        <p style={{ color: "#555", marginBottom: 32, fontSize: 17 }}>
          Explore key resources and official guidance for rental safety,
          compliance, and tenancy rights in Victoria. Each card links to an
          authoritative source.
        </p>
        <div className="resource-grid">
          {resources.map((res) => (
            <a
              key={res.title}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <Image
                src={res.logo}
                alt={res.title + " logo"}
                width={64}
                height={64}
                style={{ marginBottom: 16, objectFit: "contain" }}
              />
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                {res.title}
              </h2>
              <p style={{ color: "#444", textAlign: "center", fontSize: 15 }}>
                {res.description}
              </p>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .resource-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          padding: 24px;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.2s, background 0.2s;
          min-height: 260px;
          cursor: pointer;
        }
        .resource-card:hover {
          background: #e3eafc;
          box-shadow: 0 4px 16px rgba(26,35,126,0.13);
        }
      `}</style>
    </main>
  );
}
