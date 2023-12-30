<div align="center">
  <br />
    <a href="https://youtu.be/pUNSHPyVryU?feature=shared" target="_blank">
      <img src="https://github.com/adrianhajdin/project_next13_car_showcase/assets/151519281/2453c186-0ae9-448f-b3c4-077bf910680e" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
     <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A Car Showcase Website</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. 

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/pUNSHPyVryU?feature=shared" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

Developed with Next.js and leveraging its server-side rendering capabilities, the Car Showcase website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Home Page**: Showcases a visually appealing display of cars fetched from a third-party API, providing a captivating introduction to the diverse range of vehicles available.

👉 **Exploration and Filtering**: Explore a wide variety of cars from around the world, utilizing a search and filter system based on criteria such as model, manufacturer, year, fuel type, and make.

👉 **Transition to Server-Side Rendering**: A seamless transition from client-side rendering to server-side rendering, enhancing performance and providing a smoother browsing experience.

👉 **Pagination**: For easy navigation through a large dataset of cars, allowing users to explore multiple pages effortlessly.

👉 **Metadata Optimization and SEO**: Optimize metadata for car listing, enhancing search engine optimization (SEO) and ensuring better visibility on search engine results pages.

👉 **TypeScript Types**: Utilize TypeScript to provide robust typing for enhanced code quality and better development

👉 **Responsive Website Design**: The website is designed to be visually pleasing and responsive, ensuring an optimal user experience across various devices.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/project_next13_car_showcase.git
cd project_next13_car_showcase
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_RAPID_API_KEY=
NEXT_PUBLIC_IMAGIN_API_KEY=hrjavascript-mastery
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the corresponding websites from [Rapid API](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmI1TlE1NHFGZ1JLdHU3dnAxSTU5a2R5UUM4QXxBQ3Jtc0tsUDY0aW8xMFhUZVdxMUNzSUlKUExRTG5UaDZoR3hWVFprN2tJV0k2dnk4MXo2NVFMVkk0NWhGS19Nd0g5cGRfN2JjcTdaSlJJRHJKYzlfT3lSS1M4TDVNVTV5Wl91c1lIR2VPZUYzbHJ2Tll2QkJ0aw&q=https%3A%2F%2Frapidapi.com%2Fapininjas%2Fapi%2Fcars-by-api-ninjas%3Futm_source%3Dyoutube.com%2FJavaScriptMastery%26utm_medium%3Dreferral%26utm_campaign%3DDevRel&v=pUNSHPyVryU) to [Imagin Cars](https://www.imagin.studio/solutions/api)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>constants.ts</code></summary>

```typescript
export const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}

/* START: General styles */
.max-width {
  @apply max-w-[1440px] mx-auto;
}

.padding-x {
  @apply sm:px-16 px-6;
}

.padding-y {
  @apply py-4;
}

.flex-center {
  @apply flex items-center justify-center;
}

.flex-between {
  @apply flex justify-between items-center;
}

.custom-btn {
  @apply flex flex-row relative justify-center items-center py-3 px-6 outline-none;
}
/* END: General styles */

/* START: Hero styles */
.hero {
  @apply flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto;
}

.hero__title {
  @apply 2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold;
}

.hero__subtitle {
  @apply text-[27px] text-black-100 font-light mt-5;
}

.hero__image-container {
  @apply xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen;
}

.hero__image {
  @apply relative xl:w-full w-[90%] xl:h-full h-[590px] z-0;
}

.hero__image-overlay {
  @apply absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden;
}
/* END: Hero styles */

/* START: Home styles */

.home__text-container {
  @apply flex flex-col items-start justify-start gap-y-2.5 text-black-100;
}

.home__filters {
  @apply mt-12 w-full flex-between items-center flex-wrap gap-5;
}

.home__filter-container {
  @apply flex justify-start flex-wrap items-center gap-2;
}

.home__cars-wrapper {
  @apply grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14;
}

.home__error-container {
  @apply mt-16 flex justify-center items-center flex-col gap-2;
}
/* END: Home styles */

/* START: Car Card styles */
.car-card {
  @apply flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl;
}

.car-card__content {
  @apply w-full flex justify-between items-start gap-2;
}

.car-card__content-title {
  @apply text-[22px] leading-[26px] font-bold capitalize;
}

.car-card__price {
  @apply flex mt-6 text-[32px] leading-[38px] font-extrabold;
}

.car-card__price-dollar {
  @apply self-start text-[14px] leading-[17px] font-semibold;
}

.car-card__price-day {
  @apply self-end text-[14px] leading-[17px] font-medium;
}

.car-card__image {
  @apply relative w-full h-40 my-3 object-contain;
}

.car-card__icon-container {
  @apply flex group-hover:invisible w-full justify-between text-grey;
}

.car-card__icon {
  @apply flex flex-col justify-center items-center gap-2;
}

.car-card__icon-text {
  @apply text-[14px] leading-[17px];
}

.car-card__btn-container {
  @apply hidden group-hover:flex absolute bottom-0 w-full z-10;
}
/* END: Car Card styles */

/* START: Car Details styles */
.car-details__dialog-panel {
  @apply relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5;
}

.car-details__close-btn {
  @apply absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full;
}

.car-details__main-image {
  @apply relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg;
}
/* END: Car Details styles */

/* START: Custom Filter styles */
.custom-filter__btn {
  @apply relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border;
}

.custom-filter__options {
  @apply absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
}
/* END: Custom Filter styles */

/* START: Footer styles */
.footer {
  @apply flex flex-col text-black-100  mt-5 border-t border-gray-100;
}

.footer__links-container {
  @apply flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10;
}

.footer__rights {
  @apply flex flex-col justify-start items-start gap-6;
}

.footer__links {
  @apply flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20;
}

.footer__link {
  @apply flex flex-col gap-6 text-base min-w-[170px];
}

.footer__copyrights {
  @apply flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10;
}

.footer__copyrights-link {
  @apply flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10;
}
/* END: Footer styles */

/* START: searchbar styles */
.searchbar {
  @apply flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl;
}

.searchbar__item {
  @apply flex-1 max-sm:w-full flex justify-start items-center relative;
}

.searchbar__input {
  @apply w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm;
}
/* END: searchbar styles */

/* START: search manufacturer styles */
.search-manufacturer {
  @apply flex-1 max-sm:w-full flex justify-start items-center;
}

.search-manufacturer__input {
  @apply w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm;
}

.search-manufacturer__options {
  @apply absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
}

.search-manufacturer__option {
  @apply cursor-default select-none py-2 pl-10 pr-4;
}
/* END: search manufacturer styles */
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};
```

</details>

## <a name="links">🔗 Links</a>

Assets used in the project are [here](https://drive.google.com/file/d/1Ague8aTHA6JSrzy3kscEZmrJQdtDxqwy/view)

## <a name="more">🚀 More</a>

**Advance your skills with Next.js 14 Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsmastery.pro/next14" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/557837ce-f612-4530-ab24-189e75133c71" alt="Project Banner">
</a>

<br />
<br />

**Accelerate your professional journey with the Expert Training program**

And if you're hungry for more than just a course and want to understand how we learn and tackle tech challenges, hop into our personalized masterclass. We cover best practices, different web skills, and offer mentorship to boost your confidence. Let's learn and grow together!

<a href="https://www.jsmastery.pro/masterclass" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/fed352ad-f27b-400d-9b8f-c7fe628acb84" alt="Project Banner">
</a>

#
