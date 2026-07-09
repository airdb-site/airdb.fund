export type HomeContent = {
  nav: Array<{ name: string; url: string }>;
  languageLabel: string;
  heroTitle: string;
  heroBody: string;
  primaryAction: string;
  secondaryAction: string;
  focusTitle: string;
  focusItems: string[];
  impactTitle: string;
  impactYear: string;
  stats: Array<{ value: string; label: string }>;
  capabilityTitle: string;
  capabilities: Array<{ key: string; title: string; copy: string }>;
  stories: Array<{ eyebrow: string; title: string; copy: string; cta: string; image: string; tone?: "light" | "dark" }>;
  footerIntro: string;
  filingLabel: string;
  footerColumns: Array<{ title: string; items: string[] }>;
  subscribeTitle: string;
  subscribeCopy: string;
  subscribePlaceholder: string;
  subscribeButton: string;
};

export const HOME_CONTENT: Record<string, HomeContent> = {
  zh: {
    nav: [
      { name: "关于基金会", url: "/zh/about/intro/" },
      { name: "项目方向", url: "/zh/about/intro/" },
      { name: "基金会动态", url: "/zh/news/" },
      { name: "信息公开", url: "/transparency/" },
      { name: "参与我们", url: "/join/" },
    ],
    languageLabel: "中文 / EN",
    heroTitle: "把每一分善意\n花在看得见的地方",
    heroBody: "airdb 基金会从自有基金起步，专注人道主义救援、寻亲回家、教育支持与开源科技。项目公开、成本公开，一点点把事情做实、做大，欢迎了解、参与和监督。",
    primaryAction: "了解我们的项目",
    secondaryAction: "查看信息公开",
    focusTitle: "我们专注",
    focusItems: ["人道主义救援", "寻亲回家", "教育支持 · 大学优先", "开源科技 · AI 优先"],
    impactTitle: "我们的现状",
    impactYear: "2026 · 第一阶段",
    stats: [
      { value: "4", label: "核心项目方向" },
      { value: "100%", label: "项目与成本公开" },
      { value: "季度", label: "账目披露频率" },
      { value: "自有", label: "基金起步阶段" },
    ],
    capabilityTitle: "我们怎么做事",
    capabilities: [
      { key: "governance", title: "人道主义救援", copy: "面向突发灾害与困境人群的紧急援助，从小规模做起，每笔支出可查。" },
      { key: "network", title: "寻亲回家", copy: "与宝贝回家等公益寻亲平台协作，为失散家庭提供信息与经费支持。" },
      { key: "training", title: "教育支持", copy: "资助中学生、高中生与大学生完成学业，前期以大学阶段为主。" },
      { key: "product", title: "开源科技", copy: "像 Linux 基金会那样，资助 AI 等领域的开源项目与开发者。" },
      { key: "data", title: "公开账本", copy: "收支逐笔公开，按季度披露，附凭证与去向。" },
      { key: "cloud", title: "稳步开放", copy: "先用自有基金跑通流程，再开放项目，邀请更多人参与。" },
    ],
    stories: [
      {
        eyebrow: "项目方向",
        title: "让走失的家人，找到回家的路",
        copy: "我们支持失散家庭的寻人与团聚：整理线索、扩散信息、提供必要经费，与宝贝回家等公益平台协作，把每一次团聚的可能性放大。",
        cta: "了解寻亲回家",
        image: "/images/brand/story-relief.jpg",
        tone: "light",
      },
      {
        eyebrow: "项目方向",
        title: "让家庭困难的学生，安心读完大学",
        copy: "教育支持是我们前期投入最多的方向：为在校大学生提供助学金与生活补助，逐步扩展到中学与高中阶段，账目全部公开。",
        cta: "了解教育支持",
        image: "/images/brand/story-river.jpg",
        tone: "dark",
      },
    ],
    footerIntro: "airdb 基金会是一支从自有基金起步的公益基金，专注人道主义救援、寻亲回家、教育支持与开源科技，以公开透明为第一原则。",
    filingLabel: "",
    footerColumns: [
      { title: "关于我们", items: ["基金会简介", "发展路线", "基金会动态"] },
      { title: "项目方向", items: ["人道主义救援", "寻亲回家", "教育支持", "开源科技"] },
      { title: "信息公开", items: ["披露制度", "公开账目", "项目档案"] },
      { title: "参与我们", items: ["成为志愿者", "公益协作", "监督我们"] },
    ],
    subscribeTitle: "订阅我们的更新",
    subscribeCopy: "项目进展与季度账目发布时通知你。",
    subscribePlaceholder: "输入邮箱地址",
    subscribeButton: "订阅",
  },
  cc: {
    nav: [
      { name: "About", url: "/cc/about/" },
      { name: "Programs", url: "/cc/about/" },
      { name: "Updates", url: "/cc/post/" },
      { name: "Transparency", url: "/transparency/" },
      { name: "Join Us", url: "/join/" },
    ],
    languageLabel: "中文 / EN",
    heroTitle: "Every act of kindness,\nspent where you can see it",
    heroBody: "The Airdb Foundation starts with its own fund and focuses on four things: humanitarian relief, family reunification, education support, and open-source technology. Open projects, open books — growing step by step.",
    primaryAction: "Explore our programs",
    secondaryAction: "See our transparency page",
    focusTitle: "What we focus on",
    focusItems: ["Humanitarian relief", "Family reunification", "Education support", "Open-source technology"],
    impactTitle: "Where we are",
    impactYear: "2026 · Phase one",
    stats: [
      { value: "4", label: "core programs" },
      { value: "100%", label: "costs disclosed" },
      { value: "Quarterly", label: "ledger updates" },
      { value: "Own fund", label: "starting phase" },
    ],
    capabilityTitle: "How we work",
    capabilities: [
      { key: "governance", title: "Humanitarian relief", copy: "Emergency aid for people hit by disaster or hardship — small in scale, fully accounted for." },
      { key: "network", title: "Family reunification", copy: "Supporting families searching for missing loved ones, in collaboration with reunification platforms like Baobeihuijia." },
      { key: "training", title: "Education support", copy: "Grants for secondary and university students, with university students first." },
      { key: "product", title: "Open-source technology", copy: "Like the Linux Foundation, we fund open-source projects and maintainers — starting with AI." },
      { key: "data", title: "Open ledger", copy: "Every transaction disclosed quarterly, with receipts and destinations." },
      { key: "cloud", title: "Gradual opening", copy: "Prove the process with our own fund first, then open projects to wider participation." },
    ],
    stories: [
      {
        eyebrow: "Program",
        title: "Helping missing family members find their way home",
        copy: "We support families searching for lost loved ones: organizing leads, amplifying information, and funding what the search needs — together with platforms like Baobeihuijia.",
        cta: "About reunification",
        image: "/images/brand/story-relief.jpg",
        tone: "light",
      },
      {
        eyebrow: "Program",
        title: "Helping students from struggling families finish university",
        copy: "Education is where we invest most in this first phase: grants and living stipends for university students, expanding to earlier stages over time — with every cost published.",
        cta: "About education support",
        image: "/images/brand/story-river.jpg",
        tone: "dark",
      },
    ],
    footerIntro: "The Airdb Foundation is a self-funded charitable fund focused on humanitarian relief, family reunification, education support, and open-source technology — with openness as its first principle.",
    filingLabel: "",
    footerColumns: [
      { title: "About", items: ["Mission", "Roadmap", "Updates"] },
      { title: "Programs", items: ["Humanitarian relief", "Family reunification", "Education support", "Open-source technology"] },
      { title: "Transparency", items: ["Disclosure policy", "Open ledger", "Project files"] },
      { title: "Join us", items: ["Volunteer", "Partner", "Watch our work"] },
    ],
    subscribeTitle: "Subscribe for updates",
    subscribeCopy: "Get notified when we publish progress and quarterly ledgers.",
    subscribePlaceholder: "Enter your email",
    subscribeButton: "Subscribe",
  },
};
