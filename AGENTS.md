# Project Rules for AI Coding Agents

## Package Manager
**ALWAYS use `bun` as the package manager**, not npm or yarn.

- Install dependencies: `bun install`
- Add packages: `bun add <package>` or `bun add -d <package>` for dev dependencies
- Run scripts: `bun run <script>` or `bun <script>`

## Testing
**Use Vitest** for all testing (unit, integration, component tests).

- Run tests: `bun run test run` or `bun vitest run`
- Test configuration is in `vitest.config.ts`
- Test setup is in `src/test/setup.ts`
- Follow industry best practices:
  - Use `describe` blocks for grouping related tests
  - Use descriptive test names that explain what is being tested
  - Keep tests focused and isolated
  - Use Testing Library queries and best practices for component tests

## Development Commands
- **Dev server**: `bun dev` (runs Vite dev server)
- **Build**: `bun build` (compiles TypeScript and builds with Vite)
- **Lint**: `bun lint` (runs ESLint)
- **Preview**: `bun preview` (preview production build locally)

## Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite (using rolldown-vite variant)
- **Styling**: Tailwind CSS v4
- **UI Components**: ShadCN (Radix UI primitives)
- **Routing**: React Router v7
- **Validation**: Zod
- **Icons**: Lucide React

## Code Quality Standards
- **TypeScript**: Use strict typing, avoid `any` types
- **ESLint**: Fix all linting errors before committing
- **No AI Code Slop**: Avoid unnecessary comments, verbose error messages, or generic placeholder code
- Follow React 19 best practices and modern patterns

## Testing Guidelines
- Component tests should use `@testing-library/react`
- Use `jsdom` environment for DOM testing
- Mock external dependencies appropriately
- Maintain high test coverage for core functionality
- Test user interactions and edge cases

## File Organization
- Source code: `src/`
- Tests: Co-locate tests with source files or in `src/test/`
- Components: `src/components/`
- Public assets: `public/`
- Configuration files at project root
