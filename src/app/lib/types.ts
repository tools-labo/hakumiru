export type Difficulty = "beginner" | "intermediate" | "advanced";
export type Status = "draft" | "ready" | "published";
export type PlanRequirement = "free" | "plus";

export type Goal =
  | "earn_with_ai"
  | "social_and_promotion"
  | "blog_and_note"
  | "make_videos"
  | "make_images"
  | "research_and_compare"
  | "organize_notes_and_info";

export interface Hack {
  id: string;
  status: Status;
  title: string;
  summary: string;
  problem: string;
  problem_points: string[];
  result: string;
  result_points: string[];
  tools: string[];
  plan_requirement: PlanRequirement;
  category: string;
  tags: string[];
  difficulty: Difficulty;
  goal: Goal;
  prompt: string;
  steps: string[];
  caution: string;
  optional_output_example?: string;
  created_at: string;
  updated_at: string;
}

export const difficultyLabels: Record<Difficulty, string> = {
  beginner: "初級",
  intermediate: "中級",
  advanced: "上級",
};

export const planRequirementLabels: Record<PlanRequirement, string> = {
  free: "無料版",
  plus: "Plus",
};

export const categories = [
  "文章作成",
  "画像作成",
  "動画作成",
  "仕事効率化",
  "副業・発信",
  "プログラミング・開発",
];

export const goals: Goal[] = [
  "earn_with_ai",
  "social_and_promotion",
  "blog_and_note",
  "make_videos",
  "make_images",
  "research_and_compare",
  "organize_notes_and_info",
];

export const goalLabels: Record<Goal, string> = {
  earn_with_ai: "AIで稼ぎたい",
  social_and_promotion: "SNSや発信に使う",
  blog_and_note: "ブログやnoteを書く",
  make_videos: "動画を作る",
  make_images: "画像を作る",
  research_and_compare: "調べて比較する",
  organize_notes_and_info: "メモや情報を整理する",
};
