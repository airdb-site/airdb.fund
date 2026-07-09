export type UiLanguage = "zh" | "en";

export type LanguageMeta = {
  code: string;
  uiLanguage: UiLanguage;
  htmlLang: string;
  label: string;
  switchLabel: string;
  homePath: string;
  brandTagline: string;
  newsLabel: string;
  articleLeadLabel: string;
  articleContinueLabel: string;
  sidebarLabel: string;
  footerTitle: string;
  footerCopy: string;
  copyrightLabel: string;
  filingLabel: string;
  filingUrl: string;
};

export const LANGUAGE_META: Record<string, LanguageMeta> = {
  zh: {
    code: "zh",
    uiLanguage: "zh",
    htmlLang: "zh-CN",
    label: "中文",
    switchLabel: "EN",
    homePath: "/zh/",
    brandTagline: "公开透明，长期行善",
    newsLabel: "基金会动态",
    articleLeadLabel: "内容导览",
    articleContinueLabel: "继续阅读",
    sidebarLabel: "目录",
    footerTitle: "把好事做实，把账本摊开",
    footerCopy: "airdb 基金会专注人道主义救援、寻亲回家、教育支持与开源科技，项目公开、成本公开。",
    copyrightLabel: "©2026 airdb 基金会 保留所有权利",
    filingLabel: "",
    filingUrl: "https://beian.miit.gov.cn/",
  },
  cc: {
    code: "cc",
    uiLanguage: "en",
    htmlLang: "en",
    label: "EN",
    switchLabel: "中文",
    homePath: "/cc/",
    brandTagline: "Openness first, kindness for the long term",
    newsLabel: "Updates",
    articleLeadLabel: "Reading guide",
    articleContinueLabel: "Continue reading",
    sidebarLabel: "Contents",
    footerTitle: "Doing good in the open",
    footerCopy: "The Airdb Foundation works on humanitarian relief, family reunification, education support, and open-source technology — with open projects and open books.",
    copyrightLabel: "©2026 Airdb Foundation. All rights reserved.",
    filingLabel: "",
    filingUrl: "https://beian.miit.gov.cn/",
  },
};

export function getLanguageMeta(language: string) {
  return LANGUAGE_META[language] ?? LANGUAGE_META.zh;
}
