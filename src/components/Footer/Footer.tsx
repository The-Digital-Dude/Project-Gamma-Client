import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagepadding}>
        <div className={styles.container}>
          <div className={styles.footermenu}>
            <div className={styles.footerlogocontainer}>
              <Link
                href="/"
                className={styles.footerlogolink}
                aria-label="Homepage"
              >
                <div>
                  <img
                    style={{ width: "150px" }}
                    src="/rentalease-logo.png"
                    alt=""
                  />
                </div>
              </Link>
              <div className={styles.footerdescription}>
                RentalEase is Australia's easiest way to manage rental
                compliance checks—fully automated, fully connected.
              </div>
            </div>

            <div className={styles.footermenucell}>
              <div>Other Links</div>
              <Link href="/" className={styles.footerlink}>
                Home
              </Link>
              <Link href="/about" className={styles.footerlink}>
                About
              </Link>
              <Link href="/our-technology" className={styles.footerlink}>
                Our Technology
              </Link>
              <Link href="/services" className={styles.footerlink}>
                Services
              </Link>
              <Link href="/contact" className={styles.footerlink}>
                Contact
              </Link>
            </div>

            <div className={styles.footermenucell}>
              <div>Important Links</div>
              <Link
                href="https://www.energysafe.vic.gov.au/industry-guidance/electrical/electricians-toolkit/residential-tenancy"
                className={styles.footerlink}
              >
                ESV
              </Link>
              <Link
                href="https://www.housing.vic.gov.au/our-maintenance-responsibilities"
                className={styles.footerlink}
              >
                Housing VIC
              </Link>
              <Link
                href="https://www.vba.vic.gov.au/consumers/residential-tenancies-regulations-2021"
                className={styles.footerlink}
              >
                VBA
              </Link>
              <Link
                href="https://www.consumer.vic.gov.au/housing/renting/rental-providers-inspecting-or-entering-a-property/when-a-rental-provider-can-enter-a-property"
                className={styles.footerlink}
              >
                Consumer Vic
              </Link>
              <Link
                href="https://tenantsvic.org.au/explore-topics/during-your-tenancy/safety-requirements/"
                className={styles.footerlink}
              >
                Tenants Vic
              </Link>
            </div>

            <div className={styles.footermenucell}>
              <div>Resources</div>
              <Link href="/blog" className={styles.footerlink}>
                Blog
              </Link>
              <Link href="/guides" className={styles.footerlink}>
                Guides
              </Link>
              <Link href="/documentation" className={styles.footerlink}>
                Documentation
              </Link>
              <Link href="/privacy-policy" className={styles.footerlink}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className={styles.footerlink}>
                Terms of Service
              </Link>
            </div>

            <div className={styles.contactinfo}>
              <div>Contact Us</div>
              <div className={styles.contactitem}>
                <div className={styles.contacticon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span>Melbourne, VIC, Australia</span>
              </div>

              <div className={styles.contactitem}>
                <div className={styles.contacticon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span>1300 RENTLEASE (1300 736 853)</span>
              </div>

              <div className={styles.contactitem}>
                <div className={styles.contacticon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span>hello@RentalEase.com.au</span>
              </div>
            </div>
          </div>

          <div className={styles.footerbottom}>
            <div className={styles.footercopyright}>
              © 2025 RentalEase. Developed By{" "}
              <Link
                href={"https://rokoautomations.com/"}
                className={styles.footerRoko}
              >
                Roko Automations
              </Link>
            </div>

            <div className={styles.footlink__container}>
              <div className={styles.footersocial}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footersociallink}
                  aria-label="Facebook"
                >
                  <div className={styles.iconembed}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footersociallink}
                  aria-label="Instagram"
                >
                  <div className={styles.iconembed}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.084 5.52.199 5.017.376a6.624 6.624 0 0 0-2.357 1.535A6.554 6.554 0 0 0 .125 4.268C-.052 4.771-.167 5.343-.203 6.291-.238 7.238-.251 7.646-.251 11.267s.013 4.029.048 4.976c.036.948.151 1.52.328 2.023a6.624 6.624 0 0 0 1.535 2.357 6.554 6.554 0 0 0 2.357 1.535c.503.177 1.075.292 2.023.328.947.035 1.354.048 4.976.048s4.029-.013 4.976-.048c.948-.036 1.52-.151 2.023-.328a6.624 6.624 0 0 0 2.357-1.535 6.554 6.554 0 0 0 1.535-2.357c.177-.503.292-1.075.328-2.023.035-.947.048-1.354.048-4.976s-.013-4.029-.048-4.976c-.036-.948-.151-1.52-.328-2.023a6.624 6.624 0 0 0-1.535-2.357A6.554 6.554 0 0 0 16.732.376C16.229.199 15.657.084 14.709.048 13.762.013 13.354 0 9.733 0h2.284zm-.081 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6.406-11.845a1.44 1.44 0 1 1 0 2.881 1.44 1.44 0 0 1 0-2.881z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footersociallink}
                  aria-label="Twitter"
                >
                  <div className={styles.iconembed}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footersociallink}
                  aria-label="LinkedIn"
                >
                  <div className={styles.iconembed}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
