# Contributing to Better Zamboanga

Thank you for your interest in contributing to Better Zamboanga! This civic-tech project thrives on community participation. Whether you're a developer, designer, translator, or a concerned citizen of Zamboanga City, your contributions are welcome.

> **Fork Note:** This project is a fork of [BetterSolano.org](https://github.com/BetterSolano/bettersolano). While we inherit the same contribution philosophy and technical architecture, contributions here are specifically focused on localizing content and data for Zamboanga City.

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm v8 or higher
- Python 3 (for local development server)
- Git

### Setup

```bash
git clone https://github.com/Banyel3/BetterZamboanga.git
cd BetterZamboanga
npm install
npm run dev
```

Open http://localhost:8000 in your browser.

## How to Contribute

### Reporting Bugs

1. Check existing [issues](https://github.com/Banyel3/BetterZamboanga/issues) to avoid duplicates
2. Create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and device information
   - Screenshots if applicable

### Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the feature and its benefit to users
3. Include mockups or examples if possible

### Submitting Code

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make** your changes
4. **Test** on multiple browsers (Chrome, Firefox, Safari, Edge)
5. **Commit** with a descriptive message
   ```bash
   git commit -m "Add: brief description of changes"
   ```
6. **Push** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open** a Pull Request

### Commit Message Format

```
Type: Brief description

Types:
- Add: New feature or content
- Fix: Bug fix
- Update: Changes to existing feature
- Remove: Removed feature or content
- Docs: Documentation changes
- Style: CSS/formatting changes (no logic change)
- Refactor: Code restructuring
```

## Contribution Areas

| Area | Description |
|------|-------------|
| Bug Fixes | Fix reported issues |
| Features | Implement new functionality |
| Content | Update municipal service information for Zamboanga City |
| Data Contributions | Update JSON files in `data/` (officials, services, projects, statistics) |
| Translations | Translate to Filipino, Chavacano, or other local languages |
| Design | Improve UI/UX and accessibility |
| Data Validation | Verify statistics and sources, run `assets/js/services-validator.js` |
| Documentation | Improve guides and comments |
| API Integration | Connect real-time data sources |
| Data Visualization | Enhance charts and graphs |

### Data Contribution Guidelines

When contributing JSON data (`data/officials.json`, `data/services.json`, `data/dpwh-projects.json`, `data/competitive-index.json`, `data/ordinances.json`, `data/resolutions.json`):

1. **Source verification:** Only use data from official government sources (Zamboanga City LGU, PSA, BLGF, DPWH Region IX)
2. **Provenance:** Include source URLs and access dates in commit messages or add provenance metadata files (`data/*.provenance.json`) when available
3. **Validation:** Run `node assets/js/services-validator.js` after editing `data/services.json`
4. **Licensing:** Ensure datasets are public domain or properly attributed; avoid copyrighted materials
5. **Privacy:** Do not include personal contact details beyond official public channels
6. **Format consistency:** Match existing schema structures; test by loading pages locally

**Example commit for data contribution:**
```bash
git commit -m "Update: data/officials.json with Q1 2026 Zamboanga City officials (source: zamboanga.gov.ph, accessed 2026-01-02)"
```

## Code Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Validate HTML before submitting

### CSS
- Follow existing naming conventions
- Use CSS custom properties (variables)
- Ensure responsive design
- Test on mobile devices

### JavaScript
- Keep vanilla JS (no frameworks unless approved)
- Use meaningful variable and function names
- Add comments for complex logic
- Avoid global variables

### Accessibility
- Maintain WCAG 2.1 compliance
- Include alt text for images
- Ensure keyboard navigation works
- Test with screen readers if possible

### Data Accuracy
- Only use data from official government sources (Zamboanga City LGU, PSA, BLGF, DPWH)
- Include source attribution in commit messages or provenance files
- Verify information before submitting
- Do not include unverified or speculative data
- For real-time external API integrations, document endpoints and terms of use

## Pull Request Process

1. Ensure your code follows the style guidelines
2. Update documentation if needed
3. Test thoroughly before submitting
4. Fill out the PR template completely
5. Link related issues
6. Wait for review and address feedback

## Review Criteria

Pull requests are reviewed for:

- Code quality and style consistency
- Functionality and bug-free operation
- Accessibility compliance
- Mobile responsiveness
- Data accuracy (for content changes)
- Security considerations

## Community

- **GitHub Issues:** [Report bugs or suggest features](https://github.com/Banyel3/BetterZamboanga/issues)
- **Community channels:** _To be announced_
- **Code of Conduct:** [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
- **Security Policy:** [SECURITY.md](SECURITY.md)

## Recognition

All contributors are recognized in our repository. Significant contributions may be highlighted on the website.

## Questions?

Feel free to open an issue or reach out on Discord. We're happy to help!

---

Thank you for helping make government information accessible to the people of Zamboanga City.
