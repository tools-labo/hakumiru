
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Status = 'draft' | 'ready' | 'published';

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
  category: string;
  tags: string[];
  difficulty: Difficulty;
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

export const categories = [
  "文章作成",
  "画像作成",
  "動画作成",
  "仕事効率化",
  "副業・発信"
];
