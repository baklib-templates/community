# Baklib Community Question 模板

现代化的问答社区模板，支持 Reddit 和 Discourse 两种风格。提供完整的帖子发布、多层级回复、标签分类、集合管理、时间线展示等功能，适用于知识库、FAQ、技术支持、社区讨论等场景。

**教程**： https://help.baklib.cn/themes/community/question

**Demo**： https://demo-question.uibak.com/

---

## ✨ 核心特性

### 双模板风格

- **Reddit 风格** (`page.liquid`)：传统垂直布局，适合简洁的问答展示
- **Discourse 风格** (`page.two.liquid`)：现代三栏布局，包含左侧导航、主内容区和右侧时间线

### 主要功能

* **帖子发布与管理**：用户可以发布问题，提供标题、正文、标签和集合分类
* **多层级回复系统**：支持无限层级的嵌套回复，两种风格可选
  - Reddit 风格：作者/日期在上方，内容在下方
  - Discourse 风格：头像在左侧，作者+时间同一行，时间右对齐
* **标签与集合**：支持多标签分类和集合管理，在列表页和详情页展示
* **时间线展示**：Discourse 风格中提供右侧时间线，显示主帖和回复的时间节点
* **相关主题推荐**：自动推荐相关话题，提升内容发现
* **点赞/反馈系统**：支持对帖子进行点赞反馈
* **搜索功能**：强大的站内搜索，快速找到相关内容
* **用户个人资料**：显示用户活动、发帖数、评论数等信息
* **审核机制**：支持先发后审或先审后发两种模式
* **响应式设计**：完美适配桌面端和移动端

### 社区问答网站功能

社区问答网站是一个平台，用户可以在特定主题或一系列主题上提问和回答问题。这些网站促进协作、知识共享和社区建设。它们通常包含以下功能：

* **提问**：用户可以提交问题，提供详细信息和上下文。这通常包括标题、正文文本以及可能用于分类的标签和集合。

* **回答**：其他用户可以回答已提出的问题。支持多层级嵌套回复，最佳答案通常会被提问者点赞或标记为已采纳。

* **用户个人资料**：用户通常拥有个人资料，显示他们的活动、声誉（基于点赞、已采纳的答案等）以及其他相关信息。

* **投票/点赞**：用户可以对答案进行投票，表明其有用性或准确性。高票答案通常会更突出地显示。

* **评论**：用户可以评论问题和答案，以提供进一步的澄清、反馈或其他信息。支持无限层级嵌套。

* **分类/标签**：问题和答案通常被分类或标记，以便更容易找到相关内容。支持多标签和集合分类，提高了可搜索性和组织性。

* **搜索功能**：健全的搜索功能允许用户快速找到与他们的查询相关的现有问题和答案。

* **审核**：为维护质量和防止滥用，社区问答网站通常有版主来监督内容、执行规则和处理用户问题。

## 📸 Screenshots

![Baklib CMS based index theme](./assets/images/theme/index.webp)
![Baklib CMS based page theme](./assets/images/theme/index-forum.webp)
![Baklib CMS based page theme](./assets/images/theme/feeds.webp)
![Baklib CMS based page theme](./assets/images/theme/question.webp)
![Baklib CMS based page theme](./assets/images/theme/comment.webp)

## 🚀 Project Structure

```
├── README.md
├── config
│   └── settings_schema.json
├── layout
│   ├── error.liquid
│   └── theme.liquid
├── locales
│   ├── zh-CN.json
│   └── en.json
├── package-lock.json
├── package.json
├── snippets
│   ├── _footer.liquid
│   ├── _header.liquid
│   ├── _hero.liquid
│   ├── _news_letter.liquid
│   ├── _order_tabs.liquid
│   ├── _page_form.liquid
│   ├── _page.liquid
│   ├── _paginate.liquid
│   ├── _post_timeline.liquid
│   ├── _related_topics.liquid
│   ├── _reply_answer_form.liquid
│   ├── _reply_discourse.liquid
│   ├── _reply_page_form_discourse.liquid
│   ├── _reply_page_form.liquid
│   ├── _reply.liquid
│   ├── _search_form.liquid
│   ├── _sidebar_discourse_nav.liquid
│   ├── _sidebar_newest.liquid
│   ├── _sidebar_popular.liquid
│   ├── _sidebar_recommend.liquid
│   ├── _sidebar_tags.liquid
│   └── _tag.liquid
├── statics
│   ├── about.liquid
│   ├── edit.liquid
│   ├── feed.liquid
│   ├── new.liquid
│   ├── replies.liquid
│   └── terms.liquid
├── tailwind.config.js
├── templates
│   ├── create_answer_reply_success_discourse_turbo_stream.liquid
│   ├── create_answer_reply_success_turbo_stream.liquid
│   ├── create_post_error_turbo_stream.liquid
│   ├── create_reply_success_discourse_turbo_stream.liquid
│   ├── create_reply_success_turbo_stream.liquid
│   ├── destroy_reply_success_turbo_stream.liquid
│   ├── index.forum.liquid
│   ├── index.liquid
│   ├── page.liquid
│   ├── page.two.liquid
│   ├── search.liquid
│   ├── tag.liquid
│   └── toast_error_turbo_stream.liquid
└── yarn.lock
```

## 🎨 模板说明

### 页面模板

- **`statics/about.liquid`**：模板介绍与操作教程页，访问路径 `/s/about`，可通过导航菜单「关于本站」进入
- **`index.liquid`**：首页列表，展示所有帖子
- **`index.forum.liquid`**：论坛风格首页，带侧边栏
- **`page.liquid`**：Reddit 风格帖子详情页
- **`page.two.liquid`**：Discourse 风格帖子详情页（三栏布局）
- **`tag.liquid`**：标签页面
- **`search.liquid`**：搜索结果页

### 核心组件

- **`_page.liquid`**：帖子列表项组件，显示标题、作者、标签、集合等
- **`_reply.liquid`**：Reddit 风格回复组件
- **`_reply_discourse.liquid`**：Discourse 风格回复组件
- **`_post_timeline.liquid`**：帖子时间线组件
- **`_related_topics.liquid`**：相关主题推荐组件
- **`_sidebar_discourse_nav.liquid`**：Discourse 风格左侧导航

## 🔧 技术栈

- **前端框架**：TailwindCSS + Stimulus + Turbo
- **模板引擎**：Liquid
- **构建工具**：Yarn / npm

## 📝 使用说明

1. 在 Baklib 后台选择此模板
2. 配置站点设置（LOGO、默认头像、审核模式等）
3. 设置集合标签（用于帖子分类）
4. 选择帖子模板风格（Reddit 或 Discourse）
5. 开始发布内容
6. 可通过导航菜单「关于本站」（`/s/about`）访问模板介绍和操作教程

## 🌟 特色功能

- ✅ 双风格模板切换
- ✅ 无限层级嵌套回复
- ✅ 标签和集合分类
- ✅ 时间线展示
- ✅ 相关主题推荐
- ✅ 响应式设计
- ✅ 暗色模式支持
- ✅ Turbo Stream 实时更新
