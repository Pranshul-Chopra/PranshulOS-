/**
 * Centralized Configuration Pool for PranshulOS Landing Page
 *
 * Update this single file whenever releasing a new version or updating external URLs.
 * All download buttons, navigation links, version badges, and feedback triggers
 * across the entire website automatically reference these variables.
 */

export const SITE_CONFIG = {
  // Current Release Info
  version: "v3.0.0",
  versionLabel: "v3.0.0 Sovereign Ecosystem",
  releaseDate: "October 2026",
  platform: "Windows 10 / 11 64-bit",

  // Desktop Setup Executable Download URL
  downloadUrl:
    "https://github.com/Pranshul-Chopra/PranshulOS-/releases/download/v3.0.0/PranshulOS-Setup-3.0.0.exe",

  // Mobile Companion App Download URLs
  mobileVersion: "v3.0.0",
  mobilePlatform: "Android 8.0+ (ARM64 / x86_64)",
  mobileApkDownloadUrl:
    "https://github.com/Pranshul-Chopra/PranshulOS-/releases/download/v3.0.0/PranshulOS-Mobile-3.0.0.apk",
  mobileAabDownloadUrl:
    "https://github.com/Pranshul-Chopra/PranshulOS-/releases/download/v3.0.0/PranshulOS-Mobile-3.0.0.aab",

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
