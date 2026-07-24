# oguzozturk.me

Personal portfolio of Oguz Ozturk — Senior iOS Developer based in Istanbul.
Built with Next.js (Pages Router) and Tailwind CSS. Project content lives in
Markdown files, so adding or editing work does not require touching React code.

Live: [oguzozturk.me](https://oguzozturk.me)

## Getting started

```sh
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```sh
npm run build      # production build
npm start          # serve the production build
```

## Project structure

```
pages/
  index.js         Home: hero, status, project list, skills
  aboutMe.js       About page with career timeline
  [slug].js        Project detail page, generated from Markdown
components/        Reusable UI (NavBar, Footer, AppstoreListing, ...)
projects/*.md      Project content, one file per project
public/images/     One folder per project: logo.webp + thumb-N.webp
style/             Global styles and Tailwind layers
```

## Adding a project

1. Create `projects/<slug>.md`.
2. Add images to `public/images/<slug>/`: `logo.webp` plus `thumb-1.webp`…`thumb-N.webp`.
3. Set `imageFolder` and `imageCount` in the frontmatter to match.

The page is generated automatically at `/<slug>`; no routing changes needed.

### Frontmatter reference

| Field         | Required | Notes                                               |
| ------------- | -------- | --------------------------------------------------- |
| `title`       | yes      | Shown on the card and the detail page               |
| `category`    | yes      | `1` = Client project, `2` = Case study              |
| `order`       | yes      | Sort order within its category (lower comes first)  |
| `description` | yes      | One-line summary on the card                        |
| `imageFolder` | yes      | Folder name under `public/images/`                  |
| `imageCount`  | yes      | Number of `thumb-N.webp` files                      |
| `props`       | no       | Tech tags listed on the detail page                 |
| `subtitle`    | no       | Company name, shown in blue on the card             |
| `popularity`  | no       | e.g. `#11 in Travel`                                |
| `score`       | no       | App Store rating; omit or use `0` to hide the stars |
| `rating`      | no       | e.g. `427K Ratings`                                 |
| `live`        | no       | App Store link; renders the download badge          |
| `repo`        | no       | Git repository link                                 |
| `paragraph`   | no       | Intro paragraph on the detail page                  |
| `role`        | no       | Metadata only — not rendered                        |
| `time`        | no       | Metadata only — not rendered                        |

Everything below the frontmatter is Markdown and renders as the body of the
detail page.

## Deployment

Deployed on Vercel, built from the `main` branch. Day-to-day work happens on
`development`.
