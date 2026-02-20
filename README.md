<div align="center">

# ✨ PromptUI

**The Ultimate AI-Generated UI Design Showcase & Gallery**

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Gemini](https://img.shields.io/badge/Gemini_3.1_Pro-Sparkle-orange?style=for-the-badge&logo=googlebard)](https://deepmind.google/technologies/gemini/)

<p align="center">
  PromptUI is a curated gallery and live-preview environment demonstrating the power of AI-assisted frontend development. 
  By combining cutting-edge LLMs (like Gemini 3.1 Pro) with pure CSS and React, we explore the boundaries of what's possible in web design.
</p>

[**Explore Gallery**](#) • [**Live Previews**](#) • [**Prompt Library**](#)

</div>

---

## 🚀 Vision

Mundane web design is a thing of the past. **PromptUI** was built to prove that natural language prompts can generate world-class, production-ready, and highly aesthetic user interfaces. 

From hypercar luxury platforms and cinematic IPO announcements to cyberpunk dark web dashboards and calm organic directories, PromptUI is a playground for futuristic, immersive, and bold web experiences.

## 🌟 Key Features

- **Interactive Gallery**: A masterfully crafted showcase gallery displaying dozens of AI-generated web components and full-page layouts.
- **Live Preview Engine**: Switch between static code and dynamic live rendering environments to see the components in action.
- **Prompt Engineering as Code**: Every showcase includes the exact prompt used to generate the design, serving as an educational resource for AI-driven development.
- **No Dependencies, Just Pure CSS**: Showcasing the raw power of standard CSS grids, flexboxes, variables, and modern web APIs without heavy UI libraries.
- **Clean Architecture Implementation**: A structured Next.js App Router codebase separating repositories, presentation, and domain logic.

## 🖼️ Featured Showcases

Here are just a few of the disruptive interfaces available in the gallery:

| **Cinematic Product Launch** | **Billion-Dollar IPO** | **Bold Startup Manifesto** |
| :---: | :---: | :---: |
| _Oversized typography, deep gradients, and Apple-tier hardware launch aesthetics._ | _Jet black, metallic gold accents, and authoritative financial empire storytelling._ | _Brutalist layout, acid yellow accents, and kinetic typography._ |

| **Futuristic OS Web Experience** | **Hypercar Luxury Platform** | **Cosmic Web Directory** |
| :---: | :---: | :---: |
| _Immersive dark cosmic backgrounds with floating glassmorphism UI panels._ | _Graphite layers, metallic silver, deep red accents, and billionaire energy._ | _Neon nebulas, floating cards, and starlight particle simulations._ |

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** Custom Vanilla CSS / CSS Modules
- **AI Models:** Gemini 3.1 Pro
- **Architecture:** Clean Architecture (Domain, Infrastructure, Presentation)

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/promptui-nextjs.git
   cd promptui-nextjs
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Run the development server:**
   ```bash
   yarn dev
   ```

4. **Open the application:**
   Navigate to `http://localhost:3000` in your web browser to explore the PromptUI gallery.

## 📂 Project Structure

```text
promptui-nextjs/
├── app/                  # Next.js App Router endpoints (Pages & Layouts)
│   ├── (gallery)/        # Main showcase gallery navigation
│   └── (live)/           # Full-screen live preview renderer
├── public/               # Static assets, thumbnails, and images
└── src/
    ├── application/      # Use cases and application logic
    ├── domain/           # Core business entities and interfaces
    ├── infrastructure/   # Data fetching, static repositories (Showcase Data)
    └── presentation/     # React components, UI elements, and Demos
```

## 🧠 The Philosophy: AI-Assisted Frontend

PromptUI isn't just a component library; it's a statement. By writing highly specific, mood-driven, and structurally definitive prompts, we allow AI to handle the heavy lifting of CSS scaffolding and component creation. 

Developers can then step in to refine the architecture, wire up state, and polish micro-interactions, turning weeks of design work into a single afternoon of curation.

## 🤝 Contributing

We welcome contributions! If you have engineered a beautiful, complex UI using an AI prompt, feel free to open a Pull Request to add it to the repository. 

1. Create your component in `src/presentation/components/demos/`.
2. Register the metadata and prompt in `src/infrastructure/repositories/static/StaticShowcaseItemRepository.ts`.
3. Add the live preview mapping in `page.tsx` and the respective repository.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
  <i>"Designing the future, one prompt at a time."</i>
</div>
