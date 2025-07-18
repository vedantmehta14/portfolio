# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌙 Dark mode design
- 📱 Fully responsive (mobile-first)
- ⚡ Fast performance with React 18
- 🎨 Modern UI with smooth animations
- 🔧 TypeScript for type safety
- 🎯 SEO optimized
- 🚀 Easy to customize

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

## Customization

### Personal Information
Update your details in `src/data/personal.ts`:
- Name, title, bio
- Contact information
- Social media links
- Profile image

### Skills
Modify your skills in `src/data/skills.ts`:
- Add/remove skills
- Update proficiency levels

### Experience
Update your work experience in `src/data/experience.ts`:
- Job titles and companies
- Descriptions and achievements
- Skills used

### Projects
Showcase your projects in `src/data/projects.ts`:
- Project details and descriptions
- Technologies used
- Live demo and GitHub links
- Project images

### Styling
- Colors: Update Tailwind config in `tailwind.config.js`
- Fonts: Modify font imports in `src/styles/index.css`
- Animations: Customize animations in CSS or add new ones

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── sections/        # Page sections
│   └── ui/              # UI components
├── data/                # Data files
├── hooks/               # Custom hooks
├── types/               # TypeScript types
├── utils/               # Utility functions
└── styles/              # Global styles
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
3. Run: `npm run deploy`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you like this project, please give it a ⭐ on GitHub!

For questions or support, reach out to [your-email@example.com](mailto:your-email@example.com).