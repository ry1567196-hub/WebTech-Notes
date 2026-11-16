# WebTech Academy (CS35302 – Web Technology, B.Tech CSE Sem 5)
Vanilla HTML/CSS/JS. No backend, no API key, no build step.

## Run in VS Code
1. Open the `webtech-academy` folder in VS Code (File → Open Folder).
2. Install the **Live Server** extension, right-click `index.html` → *Open with Live Server*. (Double-clicking `index.html` also works.)

## Structure
- `index.html` – shell (header, sidebar, main, search overlay)
- `css/styles.css` – design tokens, light/dark themes, layout, responsive and print rules
- `js/course-data.js` – the syllabus (65 topics) and all notes, flashcards, quizzes, demos
- `js/app.js` – theme, sidebar, hash router, dashboard, search, flashcards, quiz, progress, playground

## Add content for a topic
In `course-data.js`, replace a topic string with an object (see "HTTP Protocol"): `title, intro, obj, notes (HTML), short, cards, quiz, demo`.

## Manual test checklist
Sidebar expand/collapse · open topic, refresh (stays) · prev/next · search (`/`, Esc) · flip/shuffle/known cards · finish a quiz · bookmark + complete, refresh · dark mode · run playground · Print preview · resize to phone width.

## Status
Written topics (65 of 65 – all topics written): see js/content-unit1.js and js/content-unit2.js and js/content-unit3.js and js/content-unit4.js and js/content-unit5.js. Add more in js/content-unit*.js (keyed by topic title). Other topics show the syllabus entry only.
