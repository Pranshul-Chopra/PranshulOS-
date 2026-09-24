# 🚀 PranshulOS Release & Update Workflow

This guide details the step-by-step process for updating the PranshulOS Landing Page for each new software release.

---

## 📍 1. Single Pointing Variable (The Common Pool)

All download links, version badges, setup files, and feedback targets across the entire website point to a single central configuration file:

📁 **[`config/site.ts`](file:///c:/Users/Pranshul%20Chopra/OneDrive/Desktop/Project/PranshulOS-/config/site.ts)**

```typescript
export const SITE_CONFIG = {
  // 1. Bump the release version
  version: "v2.4.5",
  versionLabel: "v2.4.5 stable",
  releaseDate: "September 2026",
  platform: "Windows 10 / 11 64-bit",

  // 2. Pointing Variable: Update this single URL for new release artifacts!
  downloadUrl:
    "https://github.com/Pranshul-Chopra/PranshulOS-/releases/download/v2.4.5/PranshulOS-Setup-2.4.5.exe",

  // 3. User Feedback Google Form URL
  feedbackUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe8jN6FEH7zdEMFxweuku_0mdwlKUcYE1RTB00NjPMOPY0Xew/viewform?usp=publish-editor",

  // 4. GitHub and Social Links
  githubRepoUrl: "https://github.com/Pranshul-Chopra/PranshulOS-",
  githubReleasesUrl: "https://github.com/Pranshul-Chopra/PranshulOS-/releases",
  linkedinUrl: "https://www.linkedin.com/in/pranshul-chopra-870020286/",
  email: "pranshulchopra@gmail.com",
};
```

> **Note:** Changing `downloadUrl` in `config/site.ts` immediately updates:
> - The Topbar **"Download"** button
> - The Mobile Navigation Drawer **"Download PranshulOS"** button
> - The Hero Section **"Download Now"** button
> - The Current State **"Download Setup"** button
> - The Final CTA **"Download PranshulOS (.exe)"** button
> - The Footer download link

---

## 📝 2. Updating the Release Journey (Evolution Timeline)

Whenever shipping a new minor or major release, document the architectural rationale in:

📁 **[`data/releases.ts`](file:///c:/Users/Pranshul%20Chopra/OneDrive/Desktop/Project/PranshulOS-/data/releases.ts)**

1. Set the previous current release's status to `"shipped"`.
2. Prepend the new release object with status `"current"`:

```typescript
{
  version: "v2.5.0",
  badge: "CURRENT STABLE",
  title: "Your Release Headline",
  tagline: "Short 1-sentence punchy summary of what changed.",
  date: "October 2026",
  decisionRationale: "Why did you build this? What problem was solved?",
  changes: [
    "Feature item 1",
    "Feature item 2",
    "Performance improvement 3",
  ],
  status: "current",
},
```

---

## 🎥 3. Updating Media & Video Recordings

Place screen recordings or new high-res UI captures into the `public/` directory:

| Asset Name | Target Resolution | Recommended Duration |
| :--- | :--- | :--- |
| `public/hero-preview.mp4` | 1080p / 1440p (Dark mode) | 5–8 seconds, looping |
| `public/demo-plan-mode.mp4` | 1080p (Chibi chat & apply) | 4–6 seconds |
| `public/demo-blueprints.mp4` | 1080p (Node graph canvas) | 4–6 seconds |
| `public/demo-docs.mp4` | 1080p (Split view markdown) | 3–5 seconds |
| `public/demo-agenda.mp4` | 1080p (Time-blocked agenda) | 3–5 seconds |
| `public/demo-themes.mp4` | 1080p (Theme studio presets) | 3–5 seconds |

*All components are equipped with automatic fallback logic:* If a video file is not yet present, the system automatically renders the corresponding static screenshot (`.jpg`/`.png`) with zero layout shift.

---

## 🧪 4. Local Build & Verification

Before publishing, run the local verification check:

```bash
# 1. Run local development server
npm run dev

# 2. Compile production build
npm run build

#3. Test on local host
http://localhost:3000
 
```


Confirm that the output reports:
```text
✓ Compiled successfully
✓ Generating static pages (4/4)
```

---

## 🚢 5. Deploying to Vercel

```bash
# 1. Stage changes
git add .

# 2. Commit release update
git commit -m "chore(release): bump version to v2.4.5 and update download url"

# 3. Push to main branch
git push origin main
```

Vercel will automatically trigger an incremental build and deploy the update live to your production URL within seconds.
