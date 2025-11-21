# Noot-Noot Weekend

**What if the linux penguin was the noot-noot penguin?**

A weekend hackathon site for building Linux applications with subtle noot-noot penguin references. This is a Next.js website that showcases the Noot-Noot Weekend challenge.

## About

Noot-Noot Weekend is a weekend hackathon where participants design, code, and ship offline-compatible Linux applications. The challenge is to create lightweight apps that can run on a Raspberry Pi 5, all while incorporating subtle noot-noot penguin references.

## Features

- **Interactive Experience**: Users must agree to "experience noot noot" before accessing the full site
- **Dynamic Content**: Images and text swap every 5 seconds with accompanying sound effects
- **Background Music**: Seasonal music plays on loop after user consent
- **Custom Cursor**: Doot cursor image throughout the site
- **Low Opacity Text**: Text appears at reduced opacity until hovered, creating an interactive reading experience
- **Mobile Friendly**: Responsive design that works on all devices

## Challenge Details

- **Duration**: Weekend hackathon (Nov 21-Nov 23)
- **Requirement**: Build an offline-compatible Linux application
- **Constraint**: Must be lightweight enough to run on a Raspberry Pi 5
- **Theme**: Include subtle noot-noot penguin reference(s)
- **Framework Options**: GTK, Electron, Godot, Qt, or anything you'd like

## Getting Started

### Prerequisites

- Node.js installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
sleigh/
├── pages/
│   ├── _app.js          # App wrapper with global styles
│   ├── _document.js      # Custom document with favicon and meta tags
│   └── index.js          # Main page component
├── public/
│   ├── dootCursor.png    # Custom cursor image
│   ├── imageOne.png      # First swap image
│   ├── imageTwo.png      # Second swap image
│   ├── nootnoot.mp3      # Sound effect for swaps
│   └── seasonSong.mp3    # Background music
└── styles/
    └── globals.css       # Global styles and cursor
```

## Technologies Used

- **Next.js** - React framework
- **React** - UI library
- **CSS** - Styling with custom cursor and opacity effects

## Links

- [Join #noot-noot on Slack](https://hackclub.slack.com/archives/C09V8D7CEP2)
- [Ship your project](https://forms.hackclub.com/t/kGBsn7Gz3mus)

## Notes

- This is a weekend-only event - if you miss it, you'll never be part of the Noot-Noot weekend hackathon ship site
- All apps will be showcased in a video running on Raspberry Pi 5
- Participants who complete the challenge may receive vintage postcards

---

*in life we are always learning*

~Thomas
