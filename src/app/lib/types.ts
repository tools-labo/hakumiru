export type Difficulty = "beginner" | "intermediate" | "advanced";
export type Status = "draft" | "ready" | "published";
export type PlanRequirement = "free" | "plus";

export type UseCase =
  | "make_money"
  | "social_publish"
  | "write_blog_note"
  | "make_video"
  | "make_image"
  | "research_compare"
  | "organize_info";

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
  primary_use_case: UseCase;
  use_cases: UseCase[];
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
  advanced: "上級"
};

export const planRequirementLabels: Record<PlanRequirement, string> = {
  free: "無料版",
  plus: "Plus"
};

export const useCaseLabels: Record<UseCase, string> = {
  make_money: "AIで稼ぎたい",
  social_publish: "SNSや発信に使う",
  write_blog_note: "ブログやnoteを書く",
  make_video: "動画を作る",
  make_image: "画像を作る",
  research_compare: "調べて比較する",
  organize_info: "メモや情報を整理する"
};

export const useCaseOrder: UseCase[] = [
  "make_money",
  "social_publish",
  "write_blog_note",
  "make_video",
  "make_image",
  "research_compare",
  "organize_info"
];

export const categories = [
  "文章作成",
  "画像作成",
  "動画作成",
  "仕事効率化",
  "副業・発信",
  "プログラミング・開発"
];
