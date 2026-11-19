# Jesse Chan

个人主页和博客的源码。线上地址仍然是 [https://chenwudao.github.io](https://chenwudao.github.io)。

原来的 Hexo 静态导出已经换成 Astro 工程。首页是个人介绍；旧博文在 `/blog`，会继续更新。

Source for the personal site and blog. The public URL stays [https://chenwudao.github.io](https://chenwudao.github.io).

## 本地开发

需要 Node.js 22。

```bash
npm ci
npm run dev
```

浏览器打开 <http://localhost:4321>。中文在 `/`，英文在 `/en/`。右上角的「中文 / English」会记住选择。

构建并在本地查看成品：

```bash
npm run build
npm run preview
```

## 改内容

主页文案、项目简介，以及还没公开、因此先留空的学历或职务，都在一个文件里：

[`src/data/site.ts`](src/data/site.ts)

留空的字段不会出现在页面上。不要写入没有公开来源的经历，也不要写入未公开的仓库或稿件。

博客是 Markdown，放在 [`src/content/blog/`](src/content/blog/)。新增一篇时沿用现有文章的 frontmatter：`title`、`description`、`pubDate`、`lang`。文件名会成为地址，例如 `src/content/blog/my-note.md` 对应 `/blog/my-note/`。

旧文《SCUT MetaUniverse(元宇宙虚拟交互平台搭建简易教学)》在 `src/content/blog/scut-metauniverse.md`。标题、日期和正文是从原来的 Hexo 页面迁过来的。

头像文件是 [`public/avatar.jpg`](public/avatar.jpg)，来自公开的 GitHub 头像。

## 部署

推送到 `main` 之后，[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 会执行 `npm ci` 和 `npm run build`，再用 GitHub Actions 发布到 GitHub Pages。

仓库根目录的 `index.html` 只是切换完成前的说明页，不会进入构建结果。构建产物在 `dist/`，由 Actions 上传，不要把它提交进 Git。

### 合并后必须改的 Pages 设置

现在的 `main` 是以前直接提交的整站 HTML，Pages 很可能仍是 **Deploy from a branch**，分支 `main`，目录 `/ (root)`。

合并这次改动之后，请到仓库 **Settings → Pages**：

1. **Build and deployment / Source** 改为 **GitHub Actions**。
2. 等名为 “Deploy to GitHub Pages” 的工作流成功。

在改成 GitHub Actions 之前，访问网站会看到根目录那页切换说明，而不是新主页。旧的 Hexo 页面也不会再从 `main` 直接提供。

不需要改自定义域名。用户站点的地址仍然是 `https://chenwudao.github.io`。

## Local development

Node.js 22.

```bash
npm ci
npm run dev
```

Chinese is at `/`. English is at `/en/`. The language control stores the choice in `localStorage`.

```bash
npm run build
npm run preview
```

Edit homepage copy in `src/data/site.ts`. Add posts as Markdown in `src/content/blog/`. Empty optional fields stay hidden. Do not add unpublished repositories or claims that are not already public.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml` (`npm ci`, `npm run build`, GitHub Pages).

After this change is merged, open **Settings → Pages** and set **Source** to **GitHub Actions**. Until that switch, the live site shows the short notice in the repository-root `index.html`, not the new homepage. The URL stays `https://chenwudao.github.io`.
