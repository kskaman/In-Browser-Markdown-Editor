# In-Browser Markdown Editor

This project is a front-end challenge from [FrontendMentors](https://www.frontendmentor.io/). It’s an in-browser Markdown editor built with React and TypeScript that lets users create, edit, and manage Markdown documents with ease. The editor features a live preview powered by ReactMarkdown, ensuring that the formatted output is accurately rendered in real time.

## Project Origin
This project was inspired by a challenge from FrontendMentors. I adopted the idea and design from their challenge and enhanced it with additional features such as file upload/download, PDF export, and robust local storage persistence.

## Features

### Core Functionality
- **CRUD Operations:** Create, read, update, and delete Markdown documents.
- **Live Editing & Preview:** Edit Markdown in an interactive editor and see the formatted output in real time.
- **Document Management:** Easily name, save, and load documents with robust file management.
- **Responsive & Minimalistic UI:** Optimized for both desktop and mobile devices, including dark mode support.
- **Error Handling:** User-friendly feedback for any file operation issues.

### Additional Features
- **Local Storage Persistence:** Automatically saves your current state so that data isn’t lost on refresh.
- **File Upload & Download:**
  - **Upload:** Bring in existing `.md` files for editing.
  - **Download:** Export your documents as raw Markdown (`.md`) or as high-quality, multi-page PDFs (via pdfMake).
- **PDF Export:** Generate well-formatted PDFs that mirror the live preview exactly, with custom formatting rules applied.

## Tech Stack

### Frontend
- **React** – UI Library
- **TypeScript** – Programming Language
- **Tailwind CSS** – Styling
- **ReactMarkdown** – Markdown Rendering
- **Vite** – Build Tool

### Tools & Deployment
- **pdfMake** – PDF Generation
- **Vercel** – Deployment


## License
This project is licensed under the MIT License.

## Contact
For any queries or feedback, please reach out to [Your Name](mailto:your.email@example.com).
