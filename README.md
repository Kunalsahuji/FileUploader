<p align="center">
  <a href="https://uploadcare.com?ref=github-react-example-readme">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="https://ucarecdn.com/1b4714cd-53be-447b-bbde-e061f1e5a22f/logo-safespace-transparent.svg">
      <source media="(prefers-color-scheme: dark)" srcset="https://ucarecdn.com/3b610a0a-780c-4750-a8b4-3bf4a8c90389/logo-transparent-inverted.svg">
      <img width="250" alt="Uploadcare logo" src="https://ucarecdn.com/1b4714cd-53be-447b-bbde-e061f1e5a22f/logo-safespace-transparent.svg">
    </picture>
  </a>
</p>
<p align="center">
  <a href="https://uploadcare.com?ref=github-react-example-readme">Website</a> • 
  <a href="https://uploadcare.com/docs/start/quickstart?ref=github-react-example-readme">Quick Start</a> • 
  <a href="https://uploadcare.com/docs?ref=github-react-example-readme">Docs</a> • 
  <a href="https://uploadcare.com/blog?ref=github-react-example-readme">Blog</a> • 
  <a href="https://discord.gg/mKWRgRsVz8?ref=github-react-example-readme">Discord</a> •
  <a href="https://twitter.com/Uploadcare?ref=github-react-example-readme">Twitter</a>
</p>


# React File Uploader with Uploadcare Blocks

[![Edit react-uploader](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/uploadcare/blocks-examples/tree/main/examples/react-uploader-adapter/)

This project demonstrates the implementation of a **file uploader in a React + TypeScript application** using **Uploadcare Blocks**.

---

## 👨‍💻 About This Implementation

This repository is a **custom implementation and extension** of the official Uploadcare React uploader example, built and configured by **Kunal Sahu** as part of hands-on learning and real-world integration practice.

The project focuses on:
- Strict TypeScript configuration
- Modern React (Vite + ESNext)
- Safe handling of Uploadcare file events
- Clean UI previews using Uploadcare CDN transformations

---

## 🛠 Tech Stack

- **React 18**
- **TypeScript (strict mode)**
- **Vite**
- **Uploadcare React Uploader**
- **CSS Modules**

---

## 🚀 Run this project locally

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd <project-folder>

# Install dependencies
npm install

# Start development server
npm run dev
```

------------------------------------------------------------------------

## 👨‍💻 About This Implementation

This repository is a **custom implementation and extension** of the
official Uploadcare React uploader example, built and configured by
**Kunal Sahu** as part of hands-on learning and real-world integration
practice.

The project focuses on: - Strict TypeScript configuration - Modern React
(Vite + ESNext) - Safe handling of Uploadcare file events - Clean UI
previews using Uploadcare CDN transformations

------------------------------------------------------------------------

## 🛠 Tech Stack

-   **React 18**
-   **TypeScript (strict mode)**
-   **Vite**
-   **Uploadcare React Uploader**
-   **CSS Modules**

------------------------------------------------------------------------

## 🚀 Run this project locally

``` bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd <project-folder>

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Installation

Install Uploadcare React Uploader:

``` bash
npm install @uploadcare/react-uploader
```

📖 Read more about installation in the official documentation.

------------------------------------------------------------------------

## ⚙️ Configuration

Please refer to the official Uploadcare File Uploader documentation:

👉 https://uploadcare.com/docs/file-uploader/

------------------------------------------------------------------------

## 🧩 Integration Notes

Uploadcare Blocks are Web Components, not native React components.

To keep the React architecture clean:

-   Uploadcare Blocks are encapsulated inside dedicated components
-   React interacts with them only via typed events and props
-   No direct DOM manipulation outside components

------------------------------------------------------------------------
## 🛠 Features
add FileUploader component and integrate with form views

- Implemented FileUploader component for photo uploads using Uploadcare.
- Created Layout component for consistent navigation structure.
- Developed FormView to handle blog post submissions with photo uploads.
- Added MinimalView and RegularView for different upload experiences.
- Introduced styling for components using SCSS and CSS modules.
- Established theme toggling functionality between light and dark modes.
- Included mock data for initial testing of the form submission.
- Configured TypeScript settings and Vite for project setup.

## 🎨 Styling

You can style Uploadcare blocks using:

-   CSS variables
-   Class overrides
-   Full custom styles passed directly to uploader blocks

📖 https://uploadcare.com/docs/file-uploader/styling/

------------------------------------------------------------------------

## 👤 Author

**Kunal Sahu**\
Full Stack Developer (MERN-Stack Developer)

### 🔗 Connect with Me

📦 GitHub: [github.com/Kunalsahuji](https://github.com/Kunalsahuji)\
🔗 LinkedIn:
[linkedin.com/in/kunal-sahu-7688ba1b0](https://www.linkedin.com/in/kunal-sahu-7688ba1b0)\
📌 Notion: [Watch my
content](https://www.notion.so/1dff7c6ce1bb803787fbddd34e422ab4?v=1e0f7c6ce1bb8052b14c000cb57448ee&pvs=4)\
📧 Email: <ksahu0103@gmail.com>

------------------------------------------------------------------------

## 🤝 Contribution & Credits

-   Original uploader blocks by Uploadcare
-   This implementation is for learning and demonstration purposes
-   Contributions and suggestions are welcome

⭐ If you find this useful, feel free to star the repository!
