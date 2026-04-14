<p align="center">
  <img src="docs/icon.png" alt="Portfolio's Icon" width="128" />
</p>

<h1 align="center">Kelvin Santana's Portfolio</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Portfolio's Icon" height="24" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="Portfolio's Icon" height="24" />
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio's Icon" height="24" />
</p>

***

## About
This is my professional portfolio, built to showcase my experience, skills, and projects in a clear and structured way.

## Features
This project was designed with a focus on user experience and clear content presentation. The main features include:

- Clean and consistent UI focused on clarity and readability
- Content organized to present information in a logical and structured flow
- Section-based layout that guides the user through the portfolio
- Smooth animations that support navigation without distracting from the content

## Roadmap
The following improvements and features are planned for the next iterations:

- [ ] Add Projects and Skills sections
- [ ] Add internationalization (i18n) support (PT/EN)
- [ ] Improve responsiveness across devices

## Preview
![Portfolio Home Screenshot](docs/preview.gif)

## Live Demo
🔗 [kelvin-san.vercel.app/](https://kelvin-san.vercel.app/)

## Tech Stack
The project was designed and developed using the following technologies:

- **Figma:** Used to create high-fidelity UI prototypes before development
- **Next.js:** Chosen for its support for SSR and improved SEO, enabling better performance and indexing
- **TypeScript:** Used to ensure type safety and improve code maintainability
- **Vercel:** Used for deployment, providing seamless integration with Next.js and automated CI/CD


## Getting Started

### Prerequisites
- Node.js installed

### Environment Variables
A `.env` file is required for the application to work properly.

Create a `.env` file in the root directory and add the following variable:

```env
NEXT_PUBLIC_VIDEO_URL=your_video_url_here
```

If this variable is not defined, the video section will not be rendered.

### Installation and Development
Run the following commands:

```bash
npm install # Install project's dependencies
npm run dev # Start development environment
```

Then open your browser and access: [http://localhost:3000](http://localhost:3000)

## Project Structure
The project follows a simple and scalable structure based on page sections.

Components are organized by feature (each section of the page), allowing better separation of concerns and easier maintenance.

```
public/
src/
  app/
    components/         <- Reusable and section-based UI components
      1home/
      2about-me/
      3career/
      4projects/
      5skills/
      6contact/
      ...
    hooks/              <- Custom hooks for UI behavior and interactions
      ...
    ...
.env                    <- Environment variables
```

## Deployment

This project is deployed using Vercel.

Any push to the main branch automatically triggers a new deployment.

Environment variables are configured directly in the Vercel dashboard.

## License

[MIT License](LICENSE)