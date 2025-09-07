# Visual Novel Horizon Blog

![Preview Image](https://raw.githubusercontent.com/VN-Horizon/blog/main/src/content/spec/about/images/poster.png)

A static blog built with [Astro](https://astro.build) and [Fuwari](https://github.com/saicaca/fuwari).



## ✏️ Contributing

Want to share your perspectives with more enthusiasts? We welcome your submissions. High-quality submissions will be published on our official account, so please include your pen name with your submission!

Please send your manuscript (any format) and pen name to:
[visual.hrz.27@gmail.com](mailto:visual.hrz.27@gmail.com)

Please specify your category in the subject line.

> (无偿)想向更多同好分享您的观点吗？我们欢迎您进行投稿。优质投稿内容将会在公众号上发布，所以请在稿件中一并附上您的笔名！
>
> 投稿请将
> 文稿(格式不限)+笔名投至电子邮箱：
> visual.hrz.27@gmail.com
>
> 主题请注明 “杂谈稿件” 或 “技术分享稿件”
***


## 🚀 Getting Started

1. Clone this repository:
    ```sh
    git clone https://github.com/VN-Horizon/blog.git
    ```
2. run `pnpm install` to install dependencies.
    - Install [pnpm](https://pnpm.io) `npm install -g pnpm` if you haven't.
3. Edit the config file `src/config.ts` to make customization changes.
4. Run `pnpm new-post <filename>` to create a new post and edit it in `src/content/posts/`.


## 📝 Frontmatter of Posts

```yaml
---
title: My First Blog Post
author: Your Name
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: jp      # Set only if the post's language differs from the site's language in `config.ts`
---
```

## 🧩 Markdown Extended Syntax

In addition to Astro's default support for [GitHub Flavored Markdown](https://github.github.com/gfm/), several extra Markdown features are included:

- Admonitions ([Preview and Usage](https://fuwari.vercel.app/posts/markdown-extended/#admonitions))
- GitHub repository cards ([Preview and Usage](https://fuwari.vercel.app/posts/markdown-extended/#github-repository-cards))
- Enhanced code blocks with Expressive Code ([Preview](https://fuwari.vercel.app/posts/expressive-code/) / [Docs](https://expressive-code.com/))

## ⚡ Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                              |
|:---------------------------|:----------------------------------------------------|
| `pnpm install`             | Installs dependencies                               |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`         |
| `pnpm build`               | Build your production site to `./dist/`             |
| `pnpm preview`             | Preview your build locally, before deploying        |
| `pnpm check`               | Run checks for errors in your code                  |
| `pnpm format`              | Format your code using Biome                        |
| `pnpm new-post <filename>` | Create a new post                                   |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check`    |
| `pnpm astro --help`        | Get help using the Astro CLI                        |


## 📄 License

This blog is licensed under the MIT License.

