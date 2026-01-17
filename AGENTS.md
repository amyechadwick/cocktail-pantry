# Repository Guidelines

Impotrant: I am a non-technical product owner. Please make sure to clealry explain any steps I need to carry out after the code
completetion is done. Explain any concepts I would need to now.

## Technologies to use

### Frontend
- React.js with typescript
- Next.js
- Tailwind
- Shadcn if its a dashboard like application

### Backend
- Python
- FastAPI

## Project Structure & Module Organization
This repository is currently a blank workspace with no committed source files. When adding code, keep a conventional layout so tools and contributors can find things quickly. Suggested defaults:

- `src/` for application code
- `tests/` for automated tests
- `assets/` for static files (images, fixtures)
- `scripts/` for maintenance or build helpers

Update this section once the actual structure is in place.

## Build, Test, and Development Commands
No build or test commands are configured yet. When you add tooling, document the exact commands here. Examples:

- `npm run dev` — run the local dev server
- `npm test` — execute the test suite
- `make build` — compile production assets

## Coding Style & Naming Conventions
No style rules are enforced yet. When introducing a language or framework, define and document:

- Indentation (e.g., 2 or 4 spaces)
- File naming (e.g., `kebab-case.ts`, `snake_case.py`)
- Formatting/linting tools (e.g., `prettier`, `eslint`, `ruff`)

## Testing Guidelines
No test framework is configured. When tests are added, specify:

- Framework (e.g., Jest, Pytest)
- Naming patterns (e.g., `*.spec.ts`, `test_*.py`)
- How to run all tests and targeted tests

## Commit & Pull Request Guidelines
This repository is not yet a Git repo, so there is no commit history to infer conventions from. When initialized, include:

- Commit message format (e.g., `feat: add search`)
- PR requirements (summary, linked issue, screenshots for UI)

## Configuration & Security
If the project introduces environment variables or secrets, document:

- Required `.env` keys
- Local setup steps
- Secret handling (never commit secrets; use `.gitignore`)
