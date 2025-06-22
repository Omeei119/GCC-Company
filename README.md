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

---

## Important Instructions for Collaborators

**Do NOT push code directly to the `main` branch.**

If you are a collaborator with push access, please follow these steps for all your changes:

1. **Always create and work on your own branch**

   - Sync your local `main` branch:
     ```bash
     git checkout main
     git pull origin main
     ```

   - Create a new branch for your feature or fix:
     ```bash
     git checkout -b your-feature-branch
     ```

2. **Make your changes on your branch**  
   Stage and commit your work:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push origin your-feature-branch
   ```

3. **Open a Pull Request (PR)**
   - Go to: https://github.com/Omeei119/GCC-Company
   - Click "Compare & pull request" for your branch.
   - Fill in the PR title and description.
   - Assign reviewers if needed.

4. **Get your PR reviewed**
   - Wait for at least one review and approval.
   - **Only after approval, merge your PR into `main`.**

5. **Update your local branches after merge**
   - Sync your `main` to get the latest changes:
     ```bash
     git checkout main
     git pull origin main
     ```
   - Delete your feature branch if it is no longer needed:
     ```bash
     git branch -d your-feature-branch
     git push origin --delete your-feature-branch
     ```

### Summary

- **Never push directly to `main`**
- **Work on a separate branch**
- **Open a Pull Request for all changes**
- **Merge to `main` only after review and approval**
- **Keep your local repository up to date**

---

Happy collaborating!
