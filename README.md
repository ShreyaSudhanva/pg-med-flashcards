# AIIMS PG + NEET PG Flashcards

Static flashcard application for AIIMS PG / INI-CET and NEET PG revision.

## Features

- 19-subject MBBS curriculum index in standard PG entrance order
- Search by subject, topic, tag, disease, or exam focus
- Due, studied, and starred card filters with local browser progress
- Keyboard controls: Space to flip, Left/Right arrows to navigate
- Embedded flowchart-style diagrams for selected high-yield concepts
- Ask AI tab that answers questions with the OpenAI Responses API
- AI answers are automatically saved as custom flashcards under the best matching subject
- No backend or build step required

## Local Use

Open `index.html` in a browser.

## Ask AI Setup

The Ask AI tab needs an OpenAI API key. The app is static, so the key is entered in the browser and stored only in that browser's `localStorage`. Do not use this on shared devices.

Default model: `gpt-4.1-mini`. You can change the model in the Ask AI tab.

## GitHub Pages

This project can be hosted directly from the repository root using GitHub Pages:

1. Push the repository to GitHub.
2. Open repository Settings.
3. Go to Pages.
4. Select deployment from the `main` branch and `/root`.

## Content Sources

The app is structured around the official exam framing:

- [NBEMS NEET-PG 2025 Information Bulletin](https://nbe.edu.in/IB/IB%20NEET-PG%202025.pdf): syllabus comprises subject/knowledge areas as per Graduate Medical Education Regulations issued by NMC / erstwhile MCI.
- [NBEMS NEET-PG page](https://natboard.edu.in/viewnbeexam?exam=neetpg)
- [AIIMS INI-CET prospectus materials](https://docs.aiimsexams.ac.in/sites/2_INI-CET%20PROSPECTUS%20PART%20B%20%20JAN%202025%20-AIIMS.pdf): PG entrance preparation is based on MBBS/BDS curriculum areas.
- [AIIMS MD/MS/MDS/MHA syllabus document](https://aiims.edu/aiims/academic/aiims-syllabus/Syllabus%20-%20md%20ms%20mds%20mha.pdf) for postgraduate academic context.

This is an educational revision aid. Confirm clinical decisions and exam updates against current official notices, textbooks, and institutional protocols.
