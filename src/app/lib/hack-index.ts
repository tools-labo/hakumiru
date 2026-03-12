import type { Hack } from "@/app/lib/types";

export type HackIndexItem = Pick<
  Hack,
  | "id"
  | "title"
  | "summary"
  | "category"
  | "tags"
  | "difficulty"
  | "plan_requirement"
  | "primary_use_case"
  | "use_cases"
  | "status"
  | "created_at"
  | "updated_at"
>;
