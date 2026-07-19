# Portfolio — Personal Site

A personal portfolio website for a Java/Spring Boot backend engineer, built with **Angular 19** and TypeScript. Features a dedicated case-study page for **SwasthVault**.

## Quick Start

```bash
cd ~/Desktop/portfolio
npm install     # if needed
ng serve        # http://localhost:4200
```

## Project Structure

```
src/
├── app/
│   ├── components/        # Reusable UI (header, footer, hero, project-card, skills, timeline)
│   ├── pages/             # Route-level components (home, projects, swasthvault-detail, experience, contact)
│   ├── models/            # TypeScript interfaces (Project, Experience)
│   ├── services/          # DataService — central data access
│   ├── data/              # Static data arrays (projects.ts, experience.ts)
│   ├── app.routes.ts      # Route configuration
│   └── app.config.ts      # App-level providers
├── styles.css             # Global CSS variables and resets
└── index.html             # Page shell
```

## Editing Content

All placeholder content is marked with `[PLACEHOLDER: ...]` so it's easy to find:

```bash
grep -r "PLACEHOLDER" src/
```

### Spots to fill in

| File | What to update |
|------|----------------|
| `src/app/data/projects.ts` | Project names, descriptions, tech stacks, GitHub/live URLs |
| `src/app/data/experience.ts` | Companies, roles, dates, achievements |
| `src/app/components/hero/hero.component.html` | Your name and tagline |
| `src/app/components/footer/footer.component.ts` | Email, LinkedIn, GitHub links |
| `src/app/pages/contact/contact.component.ts` | Email address (in `mailto:` and visible link) |
| `src/app/pages/swasthvault-detail/swasthvault-detail.component.ts` | Your role, GitHub URL, live demo URL, outcomes |
| `src/index.html` | Page title, meta description |

### Adding a new project

Edit `src/app/data/projects.ts` and add a new `Project` object:

```typescript
{
  slug: 'my-project',
  name: 'My Project',
  tagline: 'One-line description',
  description: 'Longer description...',
  techStack: ['Java', 'Spring Boot'],
  role: 'Backend Developer',
  featured: true,
  githubUrl: 'https://github.com/...',
  liveUrl: undefined,
}
```

The new project will appear automatically on the Home and Projects pages.

### Adding experience

Edit `src/app/data/experience.ts` and add to the `EXPERIENCES` array.

## Customizing Style

All design tokens live in `src/styles.css` under `:root`:

```css
--bg, --bg-soft       /* backgrounds */
--text, --text-muted  /* text colors */
--accent, --secondary /* brand colors (navy palette) */
--highlight           /* accent color (red) */
```

Change any of these to re-theme the site instantly.

## Building for Production

```bash
ng build
```

Output goes to `dist/portfolio/browser/`. The build is fully static — host it anywhere.

## Hosting Options

The site is a static SPA, so any static host works:

### Vercel (easiest)

```bash
npm install -g vercel
cd ~/Desktop/portfolio
ng build
vercel deploy --prod dist/portfolio/browser
```

### Netlify

```bash
ng build
# Drag-and-drop dist/portfolio/browser into the Netlify dashboard
```

Or use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist/portfolio/browser
```

### Azure Static Web Apps (matches SwasthVault's Azure stack)

```bash
npm install -g @azure/static-web-apps-cli
ng build
swa deploy dist/portfolio/browser --env production
```

### GitHub Pages

In `angular.json`, change the build output base and add a `404.html` redirect:

```bash
ng build --base-href=/REPO_NAME/
# Copy dist/portfolio/browser/index.html to dist/portfolio/browser/404.html
# Push to gh-pages branch
```

For SPA routing on GitHub Pages, copy `index.html` to `404.html` so deep links like `/projects/swasthvault` work on hard refresh.

## Adding a Resume PDF

Drop your PDF at:

```
src/assets/resume.pdf
```

Then add a "Download Resume" button wherever you want:

```html
<a href="assets/resume.pdf" download class="btn btn-outline">Download Resume</a>
```

## Next Steps

- [ ] Fill in all `[PLACEHOLDER: ...]` markers
- [ ] Add real project descriptions and tech stacks
- [ ] Drop resume PDF into `src/assets/`
- [ ] Add a `favicon.ico` (replace `public/favicon.ico`)
- [ ] Test on mobile (DevTools responsive mode)
- [ ] Run `ng build` and confirm no errors
- [ ] Deploy to your preferred host
- [ ] Set up a custom domain (optional)

## Tech Stack

- **Angular 19** (standalone components, signals-ready)
- **TypeScript** strict mode
- **CSS** with custom properties (no preprocessor, no framework)
- **No external dependencies** beyond Angular itself — fully offline-capable

## License

Personal portfolio. Use as a template if useful.