/**
 * Homepage copy, public projects, and optional fields.
 *
 * 改主页文案、项目简介，或补上学历 / 职务时，只需要编辑这个文件。
 * 留空的字段不会显示。不要填写没有公开来源的经历，也不要写入未公开的仓库或稿件。
 *
 * Edit homepage copy and project blurbs here.
 * Empty fields stay hidden. Do not add facts, social links, or repositories
 * that are not already public.
 */
import type { Locale } from "../lib/locale";

export type Localized = { zh: string; en: string };

export function tx(locale: Locale, value: Localized | undefined): string {
  return value?.[locale].trim() ?? "";
}

export const profile = {
  name: "Jesse Chan",
  /** 如果有想展示的中文名，填在这里。留空则不显示。 */
  nameZh: "",
  githubUser: "chenwudao",
  githubUrl: "https://github.com/chenwudao",
  siteRepo: "https://github.com/chenwudao/chenwudao.github.io",
  email: "Jessewudao@outlook.com",
  site: "https://chenwudao.github.io",
  avatar: "/avatar.jpg",
  location: { zh: "广州", en: "Guangzhou" } satisfies Localized,
  affiliation: {
    zh: "华南理工大学",
    en: "South China University of Technology",
  } satisfies Localized,
  /** GitHub profile is marked hireable. */
  hireable: true,
  /** Quoted from the public GitHub bio. Do not paraphrase this into a paper list. */
  bioQuote: "VLA,WM,LLM come to chat!",
  intro: {
    zh: "我是 Jesse Chan，GitHub 上是 @chenwudao，人在广州，单位是华南理工大学。这个网站放公开项目和笔记。",
    en: "I’m Jesse Chan (@chenwudao), in Guangzhou, affiliated with South China University of Technology. This site collects public projects and notes.",
  } satisfies Localized,
  interests: [
    {
      abbr: "VLA",
      title: { zh: "视觉-语言-动作", en: "Vision-language-action" },
      text: {
        zh: "公开简介里列出的方向之一。",
        en: "One of the topics listed on the public profile.",
      },
    },
    {
      abbr: "WM",
      title: { zh: "世界模型", en: "World models" },
      text: {
        zh: "公开简介里的 World Models。",
        en: "World models, as written on the public profile.",
      },
    },
    {
      abbr: "LLM",
      title: { zh: "大型语言模型", en: "Large language models" },
      text: {
        zh: "公开简介里的 LLMs。",
        en: "Large language models, as written on the public profile.",
      },
    },
  ],
} as const;

/**
 * 下面这些字段有内容才会出现在「单位」一节。
 * 不知道就保持空字符串，不要编造学位、年级、GPA、职务或奖项。
 */
export const optionalProfile = {
  degree: { zh: "", en: "" } satisfies Localized,
  department: { zh: "", en: "" } satisfies Localized,
  years: "",
  role: { zh: "", en: "" } satisfies Localized,
  seeking: { zh: "", en: "" } satisfies Localized,
  cvUrl: "",
  scholar: "",
  linkedin: "",
  website: "",
};

export interface Project {
  name: string;
  repo: string;
  url: string;
  blurb: Localized;
  tags: string[];
  caution?: Localized;
  /** Site path without a locale prefix, for example /blog/scut-metauniverse/ */
  note?: string;
}

export const projects: Project[] = [
  {
    name: "Weave",
    repo: "chenwudao/Weave",
    url: "https://github.com/chenwudao/Weave",
    tags: ["JavaScript", "ResearchOS"],
    blurb: {
      zh: "ResearchOS 演示，仓库里也叫 LabWeave。它把 DeepSeek Harness 的本地 Web 工作区改成科研项目区：界面、本地 skills API 和 DSH 桥接在一起，项目、资料和实验记录保存在本机。",
      en: "A ResearchOS demo, also called LabWeave in the repository. It turns DeepSeek Harness’s local web workspace into a research desk: a UI, a local skills API, and a DSH bridge. Projects, materials, and experiment notes stay on the machine.",
    },
  },
  {
    name: "Battery Digital Twin",
    repo: "chenwudao/Battery-Digital-Twin",
    url: "https://github.com/chenwudao/Battery-Digital-Twin",
    tags: ["Python", "MQTT", "Streamlit"],
    blurb: {
      zh: "课程项目：48 V / 13S 电池组数字孪生。运维侧只能看到电压、电流和表面温度；孪生用 MQTT、SQLite、1RC 模型和 EKF/RLS 估计状态，并做异常检测和 what-if。Plant 模拟器与 Twin 使用不同的模型。带 Streamlit 面板。",
      en: "A course project: a digital twin of a 48 V / 13S battery pack. Operators see voltage, current, and surface temperature. The twin uses MQTT, SQLite, a 1RC model, and EKF/RLS for state estimation, anomaly detection, and what-if cases. The plant simulator and the twin use different models. Includes a Streamlit dashboard.",
    },
  },
  {
    name: "NEFT",
    repo: "chenwudao/NEFT-System",
    url: "https://github.com/chenwudao/NEFT-System",
    tags: ["Python", "FastAPI", "WebSocket"],
    blurb: {
      zh: "新能源物流车队的协同调度仿真。用 FastAPI 和 WebSocket 把车辆、配送任务和充电站放在同一套系统里，并比较多种调度策略，带实时可视化。",
      en: "A scheduling simulation for a new-energy logistics fleet. FastAPI and WebSocket coordinate vehicles, delivery tasks, and charging stations, with several dispatch strategies and a live view.",
    },
  },
  {
    name: "Electrotactility",
    repo: "chenwudao/Electrotactility",
    url: "https://github.com/chenwudao/Electrotactility",
    tags: ["Python", "Machine learning"],
    blurb: {
      zh: "电触觉感知阈值的分类和回归复现代码，用作相关论文研究的开源实现。输入是现成的特征表：32 名参与者、每人四根手指，共 128 条记录。仓库写明这不是一次新的独立验证。",
      en: "Open code for related paper research: classification and regression of electrotactile perception thresholds, recomputed from supplied feature tables (32 participants, four fingers each, 128 records). The repository states this is not a new independent validation.",
    },
  },
  {
    name: "Auto-Glass",
    repo: "chenwudao/Auto-Glass-Model",
    url: "https://github.com/chenwudao/Auto-Glass-Model",
    tags: ["Python", "Computer vision"],
    blurb: {
      zh: "眼部健康监测与预测。用机器学习和计算机视觉分析、预测不同年龄段的眼轴长度等眼部指标。仓库里的示例使用模拟数据。",
      en: "Eye-health monitoring and prediction. Machine learning and computer vision analyze and predict axial length and other eye measures across age groups. The examples shipped in the repository use simulated data.",
    },
    caution: {
      zh: "仓库说明：已申请专利，莫用于商业用途。",
      en: "The repository says a patent has been applied for, and the work must not be used commercially.",
    },
  },
  {
    name: "SCUT MetaUniverse",
    repo: "chenwudao/MetaUniverse-for-SCUT-GZIC",
    url: "https://github.com/chenwudao/MetaUniverse-for-SCUT-GZIC",
    tags: ["Unreal Engine 5", "C++"],
    note: "/blog/scut-metauniverse/",
    blurb: {
      zh: "华南理工大学广州国际校区（仓库名里的 SCUT-GZIC）的大学小组作业：用 Unreal Engine 5 做校园元宇宙交互，包含角色、动画和输入，支持奔跑与跳跃。公开描述还写了 Luma AI 和快速地图建模。",
      en: "A university group project for SCUT-GZIC, the Guangzhou International Campus: a campus metaverse in Unreal Engine 5, with character, animation, and input, including run and jump. The public description also cites Luma AI and rapid map modeling.",
    },
  },
];

export const otherProjects: Project[] = [
  {
    name: "FTP-Server",
    repo: "chenwudao/FTP-Server",
    url: "https://github.com/chenwudao/FTP-Server",
    tags: ["C++", "ACE"],
    blurb: {
      zh: "基于 ACE Reactor 的 FTP 服务器，支持 RFC 959 的一组基本命令。",
      en: "An FTP server on the ACE Reactor, with a basic set of RFC 959 commands.",
    },
  },
  {
    name: "kaggriculture-toolkit",
    repo: "chenwudao/kaggriculture-toolkit",
    url: "https://github.com/chenwudao/kaggriculture-toolkit",
    tags: ["Python", "Kaggle"],
    blurb: {
      zh: "Kaggle Kaggriculture 比赛的本地研究仓库：对战测试台、meta 笔记，以及按 Apache-2.0 原样保留的公开 agent。",
      en: "Local notes for the Kaggle Kaggriculture contest: an arena, meta write-ups, and public agents kept under their Apache-2.0 terms.",
    },
  },
  {
    name: "Agent-Jailbreak",
    repo: "chenwudao/Agent-Jailbreak",
    url: "https://github.com/chenwudao/Agent-Jailbreak",
    tags: ["Kaggle"],
    blurb: {
      zh: "Kaggle 竞赛 “AI Agent Security: Multi-Step Tool Attacks” 的公开团队仓库。",
      en: "Public team repository for the Kaggle competition “AI Agent Security: Multi-Step Tool Attacks.”",
    },
  },
  {
    name: "SCUT-Machine-Learning",
    repo: "chenwudao/SCUT-Machine-Learning",
    url: "https://github.com/chenwudao/SCUT-Machine-Learning",
    tags: ["Jupyter"],
    blurb: {
      zh: "机器学习算法的实现和参考 PDF。仓库简介写的是「华工未院资料和项目分享」。",
      en: "Implementations of machine-learning algorithms, with reference PDFs. The repository description reads “华工未院资料和项目分享.”",
    },
  },
];

export const nav = [
  { href: "/#intro", label: { zh: "简介", en: "About" } },
  { href: "/#research", label: { zh: "方向", en: "Research" } },
  { href: "/#projects", label: { zh: "项目", en: "Projects" } },
  { href: "/blog/", label: { zh: "博客", en: "Blog" } },
  { href: "/#contact", label: { zh: "联系", en: "Contact" } },
] as const;

export const ui = {
  skip: { zh: "跳到正文", en: "Skip to content" },
  language: { zh: "语言", en: "Language" },
  nav: { zh: "页面", en: "Pages" },
  home: { zh: "首页", en: "Home" },
  open: { zh: "开放工作机会", en: "Open to work" },
  avatarAlt: {
    zh: "Jesse Chan 的 GitHub 头像，是一幅插画，不是证件照",
    en: "Jesse Chan’s GitHub avatar, an illustration rather than a photograph",
  },
  avatarCaption: { zh: "GitHub 头像", en: "GitHub avatar" },
  researchTitle: { zh: "研究方向", en: "Research interests" },
  researchLead: {
    zh: "以下名称来自公开的 GitHub 简介，没有另写论文列表。",
    en: "These names come from the public GitHub bio. There is no separate publication list here.",
  },
  affiliationTitle: { zh: "单位与所在地", en: "Affiliation" },
  affiliationLabel: { zh: "单位", en: "Affiliation" },
  locationLabel: { zh: "所在地", en: "Location" },
  degreeLabel: { zh: "学位", en: "Degree" },
  departmentLabel: { zh: "院系", en: "Department" },
  yearsLabel: { zh: "时间", en: "Years" },
  roleLabel: { zh: "身份", en: "Role" },
  seekingLabel: { zh: "在找", en: "Looking for" },
  statusLabel: { zh: "状态", en: "Status" },
  cv: { zh: "简历", en: "CV" },
  projectsTitle: { zh: "公开项目", en: "Public projects" },
  projectsLead: {
    zh: "选自公开仓库。简介依据各仓库的 README 和描述，没有另加结果。",
    en: "Selected public repositories. Blurbs follow each README and description, with no added results.",
  },
  repository: { zh: "仓库", en: "Repository" },
  newTab: { zh: "在新标签页打开", en: "Opens in a new tab" },
  tutorial: { zh: "搭建教程", en: "Setup tutorial" },
  alsoTitle: { zh: "其他公开仓库", en: "Other public repositories" },
  notesTitle: { zh: "笔记", en: "Notes" },
  notesLead: {
    zh: "原来的博客会继续放在这里，并接着更新。",
    en: "The existing blog lives here and will keep being updated.",
  },
  notesMore: { zh: "全部笔记", en: "All notes" },
  read: { zh: "阅读", en: "Read" },
  contactTitle: { zh: "联系", en: "Contact" },
  contactLead: {
    zh: "邮件和 GitHub 都可以。",
    en: "Email or GitHub both work.",
  },
  blogTitle: { zh: "博客", en: "Blog" },
  blogLead: {
    zh: "主要记录项目和技术笔记。原来的文章都迁到了这里。",
    en: "A blog mainly about projects and technical notes. Existing posts were moved here.",
  },
  posted: { zh: "发布于", en: "Posted" },
  updated: { zh: "更新于", en: "Updated" },
  writtenIn: {
    zh: "正文为中文。",
    en: "This note was written in Chinese. The original text is unchanged below.",
  },
  migrated: {
    zh: "本文迁自旧博客，标题、日期和正文保持原样。",
    en: "Migrated from the previous blog. The title, date, and body are unchanged.",
  },
  formerPath: { zh: "旧地址", en: "Former path" },
  relatedRepo: { zh: "相关仓库", en: "Related repository" },
  contents: { zh: "目录", en: "Contents" },
  backToBlog: { zh: "返回博客", en: "Back to the blog" },
  emptyBlog: { zh: "还没有文章。", en: "No posts yet." },
  notFoundTitle: { zh: "没有这一页", en: "Page not found" },
  notFoundBody: {
    zh: "这个地址没有对应的页面。可以回到首页或博客。",
    en: "Nothing is published at this address. You can return home or to the blog.",
  },
  source: { zh: "网站源码", en: "Site source" },
  website: { zh: "个人网站", en: "Website" },
  rss: { zh: "订阅", en: "RSS" },
  footer: {
    zh: "只写了公开资料里能核对的内容。",
    en: "Only facts that public profiles and repositories support.",
  },
} as const;
