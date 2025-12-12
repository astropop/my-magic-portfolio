# Tai Le's Portfolio

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

**7. For using Github action workflow**

```
.github\workflows\deploy-docker-compose.yml
```

Update

- `secrets.ONLINE_HOST` : Your IP's server
- `secrets.ONLINE_USERNAME` : User of your server
- `secrets.ONLINE_SSH_PRIVATE_KEY` : SSH private key is created following [Github's guideline](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
- `secrets.ONLINE_PATH_PROJECT` : Folder where is stored the source code on your server.

My Portfolio was built based on [Magic portfolio](https://github.com/once-ui-system/magic-portfolio) with [Next.js](https://nextjs.org). It requires Node.js v18.17+ and Next.js 15+

## Creators

Modifier:
Tai Le: [LinkedIn](https://www.linkedin.com/in/tailt0/)

Based source code:
Lorant One: [Threads](https://www.threads.net/@lorant.one) / [LinkedIn](https://www.linkedin.com/in/lorant-one/)

## Technologies Used

- Frontend: Next.js
- Backend: Not using
- Database: Not using
- Automation: CI/CD pipeline, Github action workflow
