import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagepadding}>
        <div className={styles.container}>
          <div className={styles.footermenu}>
            <Link
              href="/"
              className={styles.footerlogolink}
              aria-label="Homepage"
            >
              <div className={styles.iconembed}>
                <svg
                  width="59"
                  height="51"
                  viewBox="0 0 59 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 25.4002C0 26.5139 0.293079 27.6276 0.859699 28.585L11.137 46.3847C12.1921 48.2018 13.7943 49.6867 15.7872 50.351C19.7145 51.6601 23.7785 49.9798 25.7128 46.6192L28.1942 42.3207L18.4054 25.4002L28.7413 7.48329L31.2227 3.1848C31.9652 1.89525 32.9617 0.840161 34.134 0H33.0594H18.1905C15.3964 0 12.8173 1.48494 11.4301 3.90772L0.859699 22.2154C0.293079 23.1728 0 24.2865 0 25.4002Z"
                    fill="currentColor"
                  />
                  <path
                    d="M58.6151 25.4001C58.6151 24.2864 58.322 23.1727 57.7554 22.2153L47.3413 4.18118C45.407 0.840078 41.343 -0.840243 37.4157 0.449306C35.4228 1.11362 33.8206 2.59855 32.7655 4.41565L30.4209 8.46014L40.2097 25.4001L29.8738 43.317L27.3924 47.6155C26.6499 48.8856 25.6535 49.9602 24.4811 50.8003H25.5558H40.4247C43.2187 50.8003 45.7978 49.3154 47.185 46.8926L57.7554 28.5849C58.322 27.6275 58.6151 26.5138 58.6151 25.4001Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>

            <div className={styles.footermenucell}>
              <div>Products</div>
              <Link href="/services" className={styles.footerlink}>
                Services
              </Link>
              <Link href="/pricing" className={styles.footerlink}>
                Pricing
              </Link>
              <Link href="/about" className={styles.footerlink}>
                About Us
              </Link>
              <Link href="/contact" className={styles.footerlink}>
                Contact
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
            </div>

            <div className={styles.footermenucell}>
              <div>Company</div>
              <Link href="/about" className={styles.footerlink}>
                About
              </Link>
              <Link href="/careers" className={styles.footerlink}>
                Careers
              </Link>
              <Link href="/privacy" className={styles.footerlink}>
                Privacy
              </Link>
              <Link href="/terms" className={styles.footerlink}>
                Terms
              </Link>
            </div>

            <div className={styles.footermenucell}>
              <div>Legal</div>
              <Link href="/privacy-policy" className={styles.footerlink}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className={styles.footerlink}>
                Terms of Service
              </Link>
              <Link href="/security" className={styles.footerlink}>
                Security
              </Link>
            </div>
          </div>

          <div className={styles.footerbottom}>
            <div className={styles.footercopyright}>
              © 2024 Project Gamma. All rights reserved.
            </div>
            <div className={styles.footersocial}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footersociallink}
                aria-label="GitHub"
              >
                <div className={styles.iconembed}>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 .417c-2.374 0-4.67.842-6.478 2.372a9.931 9.931 0 0 0-3.39 5.98 9.898 9.898 0 0 0 1.315 6.738 9.992 9.992 0 0 0 5.39 4.287c.497.092.684-.216.684-.477 0-.262-.01-1.021-.013-1.851-2.782.6-3.37-1.174-3.37-1.174-.453-1.153-1.11-1.456-1.11-1.456-.907-.615.069-.604.069-.604 1.005.071 1.533 1.026 1.533 1.026.891 1.52 2.34 1.08 2.91.823.089-.644.349-1.082.635-1.33-2.222-.25-4.557-1.103-4.557-4.913a3.839 3.839 0 0 1 1.03-2.67c-.102-.25-.445-1.26.098-2.634 0 0 .84-.266 2.75 1.02a9.544 9.544 0 0 1 5.008 0c1.91-1.286 2.747-1.02 2.747-1.02.545 1.37.202 2.381.1 2.635a3.83 3.83 0 0 1 1.031 2.672c0 3.818-2.34 4.66-4.565 4.905.357.31.677.914.677 1.842 0 1.33-.012 2.4-.012 2.729 0 .265.18.574.688.477a9.991 9.991 0 0 0 5.39-4.288 9.897 9.897 0 0 0 1.314-6.74 9.93 9.93 0 0 0-3.391-5.979 10.036 10.036 0 0 0-6.48-2.37H10Z"
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
                    width="21"
                    height="20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.792 18.125c7.545 0 11.673-6.253 11.673-11.673 0-.176-.004-.356-.012-.532A8.332 8.332 0 0 0 20.5 3.796a8.09 8.09 0 0 1-2.355.645 4.125 4.125 0 0 0 1.804-2.27 8.247 8.247 0 0 1-2.605.996A4.108 4.108 0 0 0 10.35 6.91a11.654 11.654 0 0 1-8.456-4.284A4.108 4.108 0 0 0 3.164 8.1a4.108 4.108 0 0 1-1.86-.512v.051a4.102 4.102 0 0 0 3.293 4.024 4.078 4.078 0 0 1-1.851.07 4.111 4.111 0 0 0 3.831 2.851A8.23 8.23 0 0 1 .5 16.282a11.64 11.64 0 0 0 6.292 1.843Z"
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
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
