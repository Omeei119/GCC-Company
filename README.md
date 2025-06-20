# GCC-Company

## Project Structure (client side)

```
src/
  components/
    CompanyInfo.jsx      # Displays company details
    ContactForm.jsx      # User contact form
    Footer.jsx           # Website footer
    Header.jsx           # Website header/navigation
    Reviews.jsx          # Customer reviews section
  pages/
    About.jsx            # About page
    Contact.jsx          # Contact page
    Home.jsx             # Home/landing page
    Products.jsx         # Products/services page
  App.jsx                # Main application component
  index.css              # Global CSS
  main.jsx               # App entry point
.gitignore               # Files to ignore in git
eslint.config.js         # ESLint configuration
index.html               # HTML template
package.json             # NPM dependencies and scripts
package-lock.json        # Dependency lock file
postcss.config.js        # PostCSS configuration
tailwind.config.js       # Tailwind CSS configuration
vite.config.ts           # Vite build configuration
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Omeei119/GCC-Company.git
   cd GCC-Company
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173` (default Vite port).

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Configuration

- **Tailwind CSS**: Customize styles in `tailwind.config.js`.
- **PostCSS**: Post-processing configuration in `postcss.config.js`.
- **Vite**: Modify build and dev server options in `vite.config.ts`.
- **ESLint**: Linting rules in `eslint.config.js`.

