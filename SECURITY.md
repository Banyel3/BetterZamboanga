# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 1.1.x   | Yes       |
| < 1.1   | No        |

## Reporting a Vulnerability

We take security seriously at Better Zamboanga. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Do NOT open a public GitHub issue for security vulnerabilities.**

Instead, please email: **<SECURITY_CONTACT_TBD>** or use [GitHub's private security advisory feature](https://github.com/Banyel3/BetterZamboanga/security/advisories/new).

Include in your report:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### Response Timeline

| Action             | Timeframe             |
| ------------------ | --------------------- |
| Acknowledgment     | Within 48 hours       |
| Initial Assessment | Within 7 days         |
| Resolution Target  | Within 30 days        |
| Public Disclosure  | After fix is deployed |

## Security Measures

### Current Implementations

**Server Security:**

- HTTPS enforced via .htaccess
- HTTP Strict Transport Security (HSTS)
- Content Security Policy (CSP) headers
- X-Frame-Options to prevent clickjacking
- X-Content-Type-Options to prevent MIME sniffing
- Referrer-Policy for privacy

**Application Security:**

- No user authentication or data collection
- No database or server-side processing
- Static site with client-side rendering only
- External API calls limited to weather, exchange rates, and map tiles
- No cookies or local storage for sensitive data
- All data sourced from public government portals (Zamboanga City LGU, PSA, BLGF, DPWH)

**Data Security:**

- All data sourced from public government portals
- No personal identifiable information (PII) stored
- No user input forms that store data

### Third-Party Services

| Service          | Purpose          | Data Shared               |
| ---------------- | ---------------- | ------------------------- |
| Google Analytics | Usage statistics | Anonymous page views      |
| Open-Meteo API   | Weather data     | Location (Zamboanga City) |
| ExchangeRate API | Currency rates   | None                      |
| OpenStreetMap    | Map tiles        | None                      |

## Best Practices for Contributors

When contributing code:

1. **Never commit secrets** - API keys, passwords, or credentials (including in `build.sh`, CI configs, or `.env` files)
2. **Validate inputs** - Sanitize any user-facing inputs
3. **Use HTTPS** - All external resources must use HTTPS
4. **Review dependencies** - Check for known vulnerabilities (`npm audit`)
5. **Follow CSP** - Ensure new scripts comply with Content Security Policy
6. **Data privacy** - Do not commit personal contact details or private data in JSON files
7. **External integrations** - Document any external API dependencies (weather, map, payment services) and their terms

## Scope

This security policy covers:

- The Better Zamboanga website (when deployed)
- The GitHub repository ([Banyel3/BetterZamboanga](https://github.com/Banyel3/BetterZamboanga))
- Associated build tools and scripts (`build.sh`, `scripts/version.sh`)

Out of scope:

- Third-party services (Google Analytics, weather/map APIs, payment portals)
- User's local environment
- Social media accounts

## Contact

For security concerns: **<SECURITY_CONTACT_TBD>** or [GitHub Security Advisories](https://github.com/Banyel3/BetterZamboanga/security/advisories/new)

For general inquiries: Open a GitHub issue or see [CONTRIBUTING.md](CONTRIBUTING.md)

---

Thank you for helping keep Better Zamboanga secure for the community.
