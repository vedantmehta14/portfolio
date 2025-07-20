# Vedant Mehta's Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Software Developer and my journey pursuing a Master's in Software Engineering at San Jose State University.

## 🌟 Features

- 🌙 **Dark/Light Theme Toggle** - Seamless theme switching with persistent user preference
- 📱 **Fully Responsive Design** - Optimized for all device sizes (mobile-first approach)
- ⚡ **Fast Performance** - Built with React 18 and optimized for speed
- 🎨 **Modern UI** - Clean design with smooth animations and transitions
- 🔧 **TypeScript** - Full type safety throughout the application
- 🎯 **SEO Optimized** - Meta tags and structured data for better search visibility
- 📄 **Resume Download** - Direct access to downloadable PDF resume
- 🚀 **Easy to Deploy** - Ready for deployment on modern platforms

## 🚀 Live Demo

Visit the live website: [vedantmehta.](https://vedantmehta.dev)me

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons
- **Build Tool**: Create React App
- **State Management**: React Context (Theme)
- **Deployment**: Vercel

## 📋 Portfolio Sections

- **Hero** - Introduction with call-to-action
- **About** - Personal bio and professional summary
- **Education** - Academic background and achievements
- **Experience** - Work experience from internships and projects
- **Projects** - Showcase of development projects with live demos
- **Contact** - Contact information and social links

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/vedantmehta14/portfolio.git
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

The application will open at `http://localhost:3000`

4. **Build for production**

```bash
npm run build
```

## 🎨 Customization Guide

### Personal Information

Update your details in `src/data/personal.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your-email@example.com',
  location: 'Your Location',
  bio: 'Your bio...',
  profileImage: '/images/your-profile.jpeg',
  cvUrl: '/files/Your_Resume.pdf',
};
```

### Experience & Education

- **Experience**: Update `src/data/experience.ts` with your work history
- **Education**: Modify `src/data/education.ts` with your academic background
- **Skills**: Update skill levels in `src/data/skills.ts`

### Projects

Showcase your work in `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: '/images/project-image.jpg',
    techStack: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/username/project',
  },
];
```

### Styling & Themes

- **Colors**: Customize theme colors in `tailwind.config.js`
- **Fonts**: Update font imports in `src/styles/index.css`
- **Theme Logic**: Modify theme behavior in `src/contexts/ThemeContext.tsx`

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Header, Footer, ThemeToggle)
│   ├── sections/        # Main page sections (Hero, About, Experience, etc.)
│   └── ui/              # UI components (Cards, SkillBar, etc.)
├── contexts/            # React contexts (ThemeContext)
├── data/                # Static data files (personal, projects, experience)
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and constants
└── styles/              # Global CSS styles
```

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Vedant Mehta**Software Developer | Master's Student at SJSU

- 📧 Email: [mehtavedant8@gmail.com](mailto:mehtavedant8@gmail.com)
- 🔗 LinkedIn: [linkedin.com/in/vedantmehta14](https://www.linkedin.com/in/vedantmehta14/)
- 🐙 GitHub: [github.com/vedantmehta14](https://github.com/vedantmehta14)
- 💻 LeetCode: [leetcode.com/u/vedantmehta14](https://leetcode.com/u/vedantmehta14/)

## 🌟 Support

If you like this project, please give it a ⭐ on GitHub!

---

**Looking for full-time opportunities starting June 2026 in Software Engineering!**
