
/**
 * Event schedule and timeline configuration.
 */

export type ScheduleItem = {
  slug: string;
  label: string;
  start: number;
  end: number;
  lane: "general" | "ai" | "gaming" | "outdoor" | "creative";
};

// Timeline: 9 AM to 6 PM
export const dayStartMinutes = 9 * 60;
export const dayEndMinutes = 18 * 60;

// Event timings
export const scheduleItems: ScheduleItem[] = [
  {
    slug: "inauguration",
    label: "Inauguration",
    start: 9 * 60,
    end: 10 * 60,
    lane: "general",
  },
  {
    slug: "picture-to-prompt",
    label: "Picture to Prompt",
    start: 10 * 60,
    end: 12 * 60,
    lane: "ai",
  },
  {
    slug: "treasure-hunt",
    label: "Treasure Hunt",
    start: 10 * 60,
    end: 13 * 60,
    lane: "outdoor",
  },
  {
    slug: "valorant",
    label: "Valorant",
    start: 10 * 60,
    end: 14 * 60,
    lane: "gaming",
  },
  {
    slug: "bgmi",
    label: "BGMI",
    start: 10 * 60,
    end: 15 * 60,
    lane: "gaming",
  },
  {
    slug: "prize-distribution",
    label: "Prize Distribution",
    start: 16 * 60,
    end: 17 * 60,
    lane: "general",
  },
];
