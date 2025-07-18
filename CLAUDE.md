# Claude Context - Myungeun Lee Portfolio

## Project Overview
This is a professional portfolio website for Myungeun Lee, showcasing work in GenAI, Data Science, and Software Engineering.

- **Live Site**: https://mylee04.github.io/portfolio
- **GitHub Repo**: https://github.com/mylee04/portfolio
- **Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, GitHub Pages

## Key Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint (if available)
```

### Git Workflow
```bash
git add -A           # Stage all changes
git commit -m "..."  # Commit with message
git push origin main # Push to GitHub (triggers deployment)
```

## Project Structure

```
my-website/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx           # Main navigation
│   │   └── ThemeSwitcher.tsx    # Dark/light mode toggle
│   ├── lib/
│   │   └── data.ts              # All portfolio data (projects, publications, etc.)
│   ├── projects/page.tsx        # Projects listing
│   ├── publications/page.tsx    # Publications listing
│   ├── presentations/page.tsx   # Presentations listing
│   ├── about/page.tsx           # About me page
│   ├── contact/page.tsx         # Contact form
│   └── page.tsx                 # Home page
├── public/
│   └── images/                  # All images (profile photos, company logos, etc.)
└── package.json
```

## Important Files

### Data Management
- **`app/lib/data.ts`**: Contains all portfolio content (projects, publications, presentations, experience, education)
- **Content categories**: experiences, projects, presentations, publications, techStack, personalInfo, education, militaryService

### Key Components
- **Navbar**: Fixed navigation with responsive design
- **ThemeSwitcher**: Dark/light mode toggle with system preference detection
- **Layout**: Global wrapper with navbar spacing (pt-16)

### Images
- **Profile photos**: `nyc_family_photo.jpg` (home), `myphoto.jpg` (about)
- **Company logos**: `deloitte.png`, `atos.jpg`, `gwu.png`, `bmstu.png`
- **Project images**: Various technical diagrams and screenshots

## Content Guidelines

### Adding New Projects
1. Edit `app/lib/data.ts` 
2. Add to `projects` array with required fields:
   - `id`, `title`, `company`, `period`, `description`, `impact`, `techStack`, `image`, `status`
3. Projects auto-sort by date (newest first)

### Company Policy Notes
- **Deloitte projects**: Avoid specific project names (use generic titles)
- **Risk-sensing work**: Integrated into existing "AI-Driven Content Analysis" and "Enterprise Data Pipeline" projects

### Image Requirements
- **Web-compatible formats**: JPG, PNG, WebP (NO HEIC files)
- **Responsive sizing**: Images should work across all screen sizes
- **Optimization**: Next.js Image component handles optimization

## Deployment

### GitHub Pages
- **Branch**: `main`
- **Build trigger**: Any push to main branch
- **Base path**: `/portfolio` (production environment)
- **Deployment time**: ~2-3 minutes after push

### Environment Variables
- `NODE_ENV`: Determines base path for images and links
- Production: `basePath = "/portfolio"`
- Development: `basePath = ""`

## Recent Fixes Applied
1. **Photo format**: Converted HEIC to JPG for browser compatibility
2. **Navbar overlap**: Added global pt-16 padding in layout to prevent title cutoff
3. **Responsive text**: Implemented responsive font sizes for all page titles
4. **Data enhancement**: Updated Deloitte projects with technical details from risk-sensing work

## UI/UX Notes
- **Responsive design**: Mobile-first approach with Tailwind breakpoints
- **Color scheme**: Dark/light mode with smooth transitions
- **Typography**: Geist font family with mono font for headings
- **Navigation**: Fixed navbar with hover effects and active states

## Development Best Practices
- **Code changes**: Always test locally before pushing
- **Content updates**: All data centralized in `data.ts`
- **Image management**: Store in `/public/images/` with descriptive names
- **Commit messages**: Use conventional commits with clear descriptions

## Using Gemini CLI for Large Codebase Analysis

When analyzing large codebases or multiple files that might exceed context limits, use the Gemini CLI with its massive context window. Use `gemini -p` to leverage Google Gemini's large context capacity.

### File and Directory Inclusion Syntax

Use the `@` syntax to include files and directories in your Gemini prompts. The paths should be relative to WHERE you run the gemini command:

#### Examples:

**Single file analysis:**
```bash
gemini -p "@src/main.py Explain this file's purpose and structure"
```

**Multiple files:**
```bash
gemini -p "@package.json @src/index.js Analyze the dependencies used in the code"
```

**Entire directory:**
```bash
gemini -p "@src/ Summarize the architecture of this codebase"
```

**Multiple directories:**
```bash
gemini -p "@src/ @tests/ Analyze test coverage for the source code"
```

**Current directory and subdirectories:**
```bash
gemini -p "@./ Give me an overview of this entire project"
```

**Or use --all_files flag:**
```bash
gemini --all_files -p "Analyze the project structure and dependencies"
```

### Implementation Verification Examples

**Check if a feature is implemented:**
```bash
gemini -p "@src/ @lib/ Has dark mode been implemented in this codebase? Show me the relevant files and functions"
```

**Verify authentication implementation:**
```bash
gemini -p "@src/ @middleware/ Is JWT authentication implemented? List all auth-related endpoints and middleware"
```

**Check for specific patterns:**
```bash
gemini -p "@src/ Are there any React hooks that handle WebSocket connections? List them with file paths"
```

**Verify error handling:**
```bash
gemini -p "@src/ @api/ Is proper error handling implemented for all API endpoints? Show examples of try-catch blocks"
```

**Check for rate limiting:**
```bash
gemini -p "@backend/ @middleware/ Is rate limiting implemented for the API? Show the implementation details"
```

**Verify caching strategy:**
```bash
gemini -p "@src/ @lib/ @services/ Is Redis caching implemented? List all cache-related functions and their usage"
```

**Check for specific security measures:**
```bash
gemini -p "@src/ @api/ Are SQL injection protections implemented? Show how user inputs are sanitized"
```

**Verify test coverage for features:**
```bash
gemini -p "@src/payment/ @tests/ Is the payment processing module fully tested? List all test cases"
```

### When to Use Gemini CLI

Use `gemini -p` when:
- Analyzing entire codebases or large directories
- Comparing multiple large files
- Need to understand project-wide patterns or architecture
- Current context window is insufficient for the task
- Working with files totaling more than 100KB
- Verifying if specific features, patterns, or security measures are implemented
- Checking for the presence of certain coding patterns across the entire codebase

### Important Notes

- Paths in @ syntax are relative to your current working directory when invoking gemini
- The CLI will include file contents directly in the context
- No need for --yolo flag for read-only analysis
- Gemini's context window can handle entire codebases that would overflow Claude's context
- When checking implementations, be specific about what you're looking for to get accurate results