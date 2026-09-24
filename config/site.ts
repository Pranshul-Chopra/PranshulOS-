/**
 * Centralized Configuration Pool for PranshulOS Landing Page
 *
 * Update this single file whenever releasing a new version or updating external URLs.
 * All download buttons, navigation links, version badges, and feedback triggers
 * across the entire website automatically reference these variables.
 */

export const SITE_CONFIG = {
  // Current Release Info
  version: "v2.4.5",
  versionLabel: "v2.4.5 stable",
  releaseDate: "September 2026",
  platform: "Windows 10 / 11 64-bit",

  // Pointing Variable: Primary Setup Executable Download URL
  // Update this single URL for new GitHub release artifacts!
  downloadUrl:
    "https://github.com/Pranshul-Chopra/PranshulOS-/releases/download/v2.4.5/PranshulOS-Setup-2.4.5.exe",

  // Primary User Feedback Form URL
  feedbackUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe8jN6FEH7zdEMFxweuku_0mdwlKUcYE1RTB00NjPMOPY0Xew/viewform?usp=publish-editor",

  // Repository & Social URLs
  githubRepoUrl: "https://github.com/Pranshul-Chopra/PranshulOS-",
  githubReleasesUrl: "https://github.com/Pranshul-Chopra/PranshulOS-/releases",
  linkedinUrl: "https://www.linkedin.com/in/pranshul-chopra-269789371/",
  email: "pranshulchopra@gmail.com",

  // Metadata & Site Details
  siteUrl: "https://pranshulos.vercel.app",
  creator: "Pranshul Chopra",
} as const;

export type SiteConfig = typeof SITE_CONFIG;
