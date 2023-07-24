# Next.js, Chakra UI, microCMS Blog

This project is a sample blog application built with Next.js and Chakra UI. It utilizes microCMS as the content management system for managing blog content. The combination of server-side rendering (SSR) and client-side rendering (CSR) in Next.js ensures excellent SEO performance and fast-loading web pages.

## Features

- Server-side rendering (SSR) and client-side rendering (CSR) combination
- Responsive design and accessibility with Chakra UI components
- Blog content management using microCMS

## Demo
My personal blog named [Zubora Code](https://zubora-code.net/) is using the source code from this repository.

## Blog
I will provide detailed explanations about the source code of this repository in the following blog.


English: https://zubora-code.net/en/nextjs_micorcms_blog

Japanese: https://zubora-code.net/ja/nextjs_micorcms_blog

## Installation and Usage

1. Clone the repository

```bash
git clone git@github.com:tkugimot/nextjs-microcms-blog-handson.git
```

2. Navigate to the project directory
```bash
cd nextjs-microcms-blog-handson
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Set up microCMS API key
To fetch blog content, you'll need to set up a microCMS API key. Follow these steps to set the API key as an environment variable:

5. Create a .env.local file in the project root.
Set the API key in the following format:

```bash
MICRO_CMS_API_KEY=your_micro_cms_api_key
MICROCMS_SERVICE_DOMAIN=your_micro_cms_service
BASE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

Off course, BASE_URL has to be your domain instead of localhost on production.


6. Start the development server

```bash
npm run dev
# or
yarn dev
```

7. Access the application in your browser

```bash
http://localhost:3000
```

## License
This project is licensed under the MIT License.
