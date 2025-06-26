# Doctor Software - Hospital Management System

A modern, responsive React.js application for hospital management software.

## Features

- **Clean, Modern UI** - Built with React and Tailwind CSS
- **Responsive Design** - Works on all devices
- **Production Ready** - Optimized for deployment
- **SEO Friendly** - Proper meta tags and structure

## Components

- **Header** - Navigation and branding
- **Home** - Hero section with call-to-action
- **Pricing** - Three-tier pricing plans
- **Contact** - Contact form and benefits

## Tech Stack

- React 18
- Tailwind CSS (via CDN)
- Create React App
- Git for version control

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd doctor-software
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
3. Deploy!

### Other Platforms

The `build` folder contains all files needed for deployment on any static hosting platform.

## Project Structure

```
doctor-software/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── Pricing.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Customization

- Update colors in `public/index.html` (Tailwind config)
- Modify components in `src/components/`
- Update content and branding throughout the app

## License

This project is proprietary software for Doctor Software. "// trigger deploy" 
