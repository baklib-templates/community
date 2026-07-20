# Baklib Community (Question) Theme

A modern Q&A and discussion theme whose layouts are easy to map to familiar products: **Discourse**-style forum chrome (sidebar navigation, timeline), **Reddit**-style linear feeds, and **Stack Overflow**–style structured threads. Use it for knowledge bases, FAQs, technical support, and community discussions.

**Docs (ZH):** See [README.zh-CN.md](README.zh-CN.md) for the Chinese readme.

**Tutorial:** [https://github.com/baklib-templates/community](https://github.com/baklib-templates/community)  

**Demo:** [https://demo-question.uibak.com/](https://demo-question.uibak.com/)

**Theme id:** `community` (`theme_name` in `config/settings_schema.json`). Renaming from a previous id may affect existing site bindings—confirm migration with your Baklib environment before deploying.

---

## Recent updates

**2026-07-16**

- **My community (`/s/me`):** After sign-in, the header opens My community (your posts with review badges, related threads, replies received). Account profile remains a secondary link to the org profile page.
- **Organization user auto-publish:** Organization users (`department_ids` present—same heuristic as the daily post limit) always publish **posts and replies** immediately, regardless of post/reply review settings.
- **Review visibility:** Authors see an under-review banner on their own unpublished posts; My community lists review badges; the new-post form points users to My community for status.

**2026-06-26**

- **Comment moderation (independent from posts):** In theme settings you can choose publish-first or review-first for **replies**, separately from **posts**. Enabled by default: replies appear immediately after submission; when disabled, staff must approve replies before they show on the site.

---

## Features

### Layout presets

- **Reddit-style** (`index.liquid` + `page.liquid`): Classic vertical list and thread layout.
- **Discourse-style** (`index.forum.liquid` + `page.two.liquid`): Three-column feel with left nav, main column, and optional timeline.

### Capabilities

- Publishing with title, body, tags, and collections
- Unlimited nested replies (both layout presets)
- Tags and collections on list and detail views
- Timeline widget on Discourse-style topic pages
- Related topics
- Feedback / reactions on posts
- Site search (header menu entry)
- **My community** (`/s/me`): your posts (with review status), related threads, and replies received
- Optional moderation: publish-first vs review-first, separately for posts and replies; organization users always publish posts and replies immediately
- Responsive UI and dark mode
- Turbo / Turbo Stream for partial updates

---

## Screenshots

Index
Forum index
Feeds
Topic
Comments

---

## Repository layout

```text
├── README.md
├── README.zh-CN.md
├── config/settings_schema.json
├── layout/
├── locales/
│   ├── zh-CN.json
│   ├── zh-CN.schema.json
│   ├── en.json
│   ├── en.schema.json
│   ├── de.json
│   ├── de.schema.json
│   ├── fr.json
│   ├── fr.schema.json
│   ├── ja.json
│   └── ja.schema.json
├── snippets/
├── statics/
│   ├── about.liquid
│   ├── edit.liquid
│   ├── feed.liquid
│   ├── new.liquid
│   ├── replies.liquid
│   ├── tag.liquid
│   ├── tags.liquid
│   └── terms.liquid
├── templates/
├── assets/
├── seeds/
├── package.json
├── tailwind.config.js
└── yarn.lock
```

---

## Templates & static routes


| Resource                            | Role                                  |
| ----------------------------------- | ------------------------------------- |
| `statics/about.liquid`              | About / onboarding copy at `/s/about` |
| `index.liquid`                      | Home — list layout                    |
| `index.forum.liquid`                | Home — forum layout                   |
| `page.liquid`                       | Topic — Reddit-style                  |
| `page.two.liquid`                   | Topic — Discourse-style               |
| `templates/tag.liquid`              | Tag landing                           |
| `templates/search.liquid`           | Search results                        |
| `statics/tag.liquid`, `tags.liquid` | Filter/browse by collection & feature |


Notable snippets: `_page.liquid`, `_reply.liquid`, `_reply_discourse.liquid`, `_post_timeline.liquid`, `_related_topics.liquid`, `_sidebar_discourse_nav.liquid`.

---

## Stack

- Liquid templates  
- Tailwind CSS + Stimulus + Turbo

---

## Getting started

1. Install the theme in Baklib and create a site.
2. Configure appearance: logo, default avatar, **post/reply moderation**, feedback emoji, copyright, header/footer HTML.
3. Define **collection tags** and **feature tags** under theme settings if you use those facets.
4. Set **home** and **topic** templates to either Reddit-style or Discourse-style variants.
5. Optional: open `/s/about` (link it from **Settings → header menu**, e.g. `About[/s/about`) for operator-facing copy.

User-visible strings are centralized under `locales/` (`zh-CN`, `en`, `de`, `fr`, `ja`). Editor labels for this theme use `t:settings_schema.community*` and `t:settings_schema.community_templates*` keys in the `*.schema.json` files. Theme seeds default to English (`seeds/`).

---

## Highlights checklist

- Dual home/topic layouts  
- Nested replies  
- Tags & collections  
- Timeline (Discourse-style topics)  
- Related topics  
- Responsive + dark mode  
- Turbo Stream updates

