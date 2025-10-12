# My Portfolio

My Portfolio is a simple, clean, beginner-friendly portfolio template. It supports an MDX-based content system for projects and blog posts, an about / CV page and a gallery.

View the demo [here](https://tai.vnpsc.com).

![Magic Portfolio](fe/public/images/gallery/project-06.png)

## Getting started

**1. Clone the repository**
```
git clone https://github.com/astropop/my-magic-portfolio.git
```

**2. Install dependencies**
```
npm install
```

**3. Run dev server**
```
npm run dev
```

**4. Edit config**
```
fe/src/resources/once-ui.config.js
```

**5. Edit content**
```
fe/src/resources/content.js
```

**6. Create blog posts / projects**
```
Add a new .mdx file to src/app/blog/posts or src/app/work/projects
```

**6. For using Github action workflow**
```
.github\workflows\deploy-docker-compose.yml
```
Update
- `secrets.ONLINE_HOST` : Your IP's server
- `secrets.ONLINE_USERNAME` : User of your server
- `secrets.ONLINE_SSH_PRIVATE_KEY` : SSH private key is created following [Github's guideline](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
- `secrets.ONLINE_PATH_PROJECT` : Folder where is stored the source code on your server.

My Portfolio was built based on [Magic portfolio](https://github.com/once-ui-system/magic-portfolio) for [Next.js](https://nextjs.org). It requires Node.js v18.17+ and Next.js 15+


## Features

### SEO
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

### Design
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

### Content
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

## Technologies Used

- Frontend: React.js, Next.js, Mdx
- Backend: Not using
- Database: Not using
- Routing: App Router Next.JS
- Styling: Module CSS
- Container: Docker
- Automation: CI/CD pipeline, Github action workflow

