<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/shreyashkadam/rentpal">
    <img src="readme-images/logo.png" alt="Logo" width="288" height="80">
  </a>

<h3 align="center">Rentpal</h3>

  <p align="center">
    
Introducing an innovative web application that allows users to rent anything they need with ease. The platform is built with the latest technologies, including Next.js 13 App Router, React, Tailwind, Prisma, MongoDB, NextAuth, and cloudinary for image uploading, ensuring a seamless and user-friendly experience.
<br/>

With advanced search and filter options, users can easily find the perfect item to rent for any occasion. The reliable and secure booking system ensures a hassle-free rental process. Plus, with the cloudinary integration, it's easy to upload and manage images, so users can see exactly what they're renting.
<br/>

This web application is perfect for those looking to rent a tool for a DIY project, a costume for a special event, or a car for a weekend getaway. The convenience and affordability of renting through this platform cannot be beat.
<br />
<br />
<a href="https://rentpal.vercel.app//">View Demo</a>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#special-thanks">Special Thanks</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

<ul>
  <li><a href="https://nextjs.org/">Next.js 13</a></li>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  <li><a href="https://nodejs.org/en/">Node</a></li>
  <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
  <li><a href="https://www.prisma.io/">Prisma</a></li>
  <li><a href="https://next-auth.js.org/">NextAuth.js</a></li>
</ul>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

1. Make sure you have latest version of npm installed
   - npm
     ```sh
     npm install npm@latest -g
     ```
2. Make sure you have your accounts set up on MongoDB, GCP and Cloudinary

### Installation

1. Cloning the repository

  ```shell
  git clone https://github.com/shreyashkadam/rentpal.git
  ```

2. Install packages

  ```shell
  npm i
  ```

3. Setup .env file

  ```js
  DATABASE_URL=
  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=
  GITHUB_ID=
  GITHUB_SECRET=
  NEXTAUTH_SECRET=
  ```

4. Setup Prisma

  ```shell
  npx prisma db push

  ```

5. Start the app

  ```shell
  npm run dev
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Features

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking system
- Customer booking cancellation
- Owner booking cancellation
- Creation and deletion of items
- Pricing calculation
- Favorites system
- Shareable URL filters


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Special Thanks
Special Thanks to <a href="https://www.youtube.com/@codewithantonio">Code with Antonio</a> for his outstanding <a href="https://www.youtube.com/watch?v=c_-b_isI4vg">tutorial video</a> on making a airbnb clone. This project has been referenced and greatly inspired by his work in the mentioned tutorial

## Contact

Shreyash Kadam - [@linkedin-handle](https://linkedin.com/in/shreyash-kadam) - shreyash.kadam10@gmail.com

Project Link: [https://github.com/shreyashkadam/rentpal](https://github.com/shreyashkadam/rentpal)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/shreyashkadam/rentpal.svg?style=for-the-badge
[contributors-url]: https://github.com/shreyashkadam/rentpal/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shreyashkadam/rentpal.svg?style=for-the-badge
[forks-url]: https://github.com/shreyashkadam/rentpal/network/members
[stars-shield]: https://img.shields.io/github/stars/shreyashkadam/rentpal.svg?style=for-the-badge
[stars-url]: https://github.com/shreyashkadam/rentpal/stargazers
[issues-shield]: https://img.shields.io/github/issues/shreyashkadam/rentpal.svg?style=for-the-badge
[issues-url]: https://github.com/shreyashkadam/rentpal/issues
[license-shield]: https://img.shields.io/github/license/shreyashkadam/rentpal.svg?style=for-the-badge
[license-url]: https://github.com/shreyashkadam/rentpal/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/shreyash-kadam
[product-screenshot]: readme-images/screenshot3.png
