import { Language, Category } from '../../types';

export interface HeroItem {
  text: string;
  annotation: string;
  category: Category | null;
}

export interface HomeContent {
  heroItems: HeroItem[];
  intro: string;
  selectedWorks: string;
  years: string;
}

export const HOME_DATA: Record<Language, HomeContent> = {
  zh: {
    heroItems: [
      { text: "角色插画", annotation: "（走治愈系风格）", category: Category.VIDEO }, 
      { text: "图案设计", annotation: "（主攻方向，项目管理）", category: Category.DESIGN },
      { text: "网站开发", annotation: "（纯小白边学边做）", category: Category.DEV },
      { text: "炒粉炒饭", annotation: "（还在学）", category: null }
    ],
    intro: "欢迎来到我的个人主页！这里记录了我的设计作品与成长轨迹。",
    selectedWorks: "精选作品",
    years: "[ 2026 — Present ]"
  },
  en: {
    heroItems: [
      { text: "Character Illustration", annotation: "(Healing Style)", category: Category.VIDEO },
      { text: "Pattern Design", annotation: "(Main Focus & Direction)", category: Category.DESIGN },
      { text: "Web Development", annotation: "(Novice Learner)", category: Category.DEV },
      { text: "Cooking", annotation: "(Still Learning)", category: null }
    ],
    intro: "Welcome to my personal homepage! Here is a collection of my design works and journey.",
    selectedWorks: "Selected Works",
    years: "[ 2026 — Present ]"
  }
};
