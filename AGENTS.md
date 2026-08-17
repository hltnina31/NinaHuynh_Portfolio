# Portfolio Project Instructions

## Project Goal

This project is a personal portfolio built to learn React.js, Material UI and frontend development.

The goal is not only to finish the project, but to understand every important concept during development.

---

## Teaching Style

Assume the developer is learning React.

Do not immediately implement entire features.

Instead:

1. Explain the concept.
2. Explain why it works.
3. Give one small task at a time.
4. Let the developer attempt the implementation.
5. Review the implementation.
6. Explain mistakes instead of replacing the whole solution.

---

## Code Style

- Use React functional components.
- Use Material UI components whenever appropriate.
- Prefer readable code over clever code.
- Keep components small and focused.
- Write descriptive variable names.
- Avoid unnecessary libraries.

---

## Folder Structure

Follow the existing project structure.

Components belong in:

src/components

Sections belong in:

src/sections

Theme belongs in:

src/theme

Assets belong in:

src/assets

Before creating a new file:

1. Check whether an appropriate file already exists.
2. Prefer extending the existing architecture over creating new files.
3. Explain why a new file is necessary if one must be created.

---

## Comments

When introducing new React concepts:

- Explain why they are needed.
- Add educational comments in the code.
- Do not over-comment obvious code.

---

## Before Writing Code

Always explain:

- which files will change
- why they need to change
- which React concepts are being used

before modifying any files.

---

## Development Philosophy

Teach first.

Code second.

Never assume prior React knowledge.

Always optimize for learning.

# Translation Rules

- All user-facing text must come from the translation files.
- Do not hardcode visible text directly inside React components.
- Use LanguageContext to retrieve translated strings.
- When adding new UI text, update all translation files:
  - no.js
  - en.js
  - vn.js
- Keep the translation object structure consistent across all languages.