/// <reference types="vite/client" />

export const BRAND_NAME = import.meta.env.VITE_BRAND_NAME || "Shoe Reminder";
export const BRAND_TAGLINE = import.meta.env.VITE_BRAND_TAGLINE || "Simple reminders for rotating your running shoes.";
export const BRAND_DESCRIPTION = import.meta.env.VITE_BRAND_DESCRIPTION || "Schedule smart reminders to replace your running shoes. Generate calendar events with flexible durations, QR codes, and universal calendar support.";
export const BRAND_FAVICON_PATH = import.meta.env.VITE_BRAND_FAVICON_PATH || "/favicon.svg";
export const BRAND_URL = import.meta.env.VITE_BRAND_URL || "https://shoereminder.github.io";

// Event Configuration
export const EVENT_TITLE = import.meta.env.VITE_EVENT_TITLE || "Get New Shoes";
export const EVENT_DESCRIPTION = import.meta.env.VITE_EVENT_DESCRIPTION
    ? import.meta.env.VITE_EVENT_DESCRIPTION.replace(/\\n/g, '\n')
    : "Time to replace your running shoes!\n\nStore Name\nStore Phone\nStore Hours";
export const EVENT_LOCATION = import.meta.env.VITE_EVENT_LOCATION || "123 Main St, Anytown, USA";
