export const mockSingleAIResponse = {
  summary: "The user is experiencing high productivity but demonstrates low-level situational anxiety regarding an upcoming presentation deadline. Overall emotional state remains stable and forward-focused.",
  moodType: "positive",
  detected_emotions: [
    { emotion: "Productive", score: 0.85 },
    { emotion: "Anxious", score: 0.32 },
    { emotion: "Motivated", score: 0.78 }
  ],
  triggers: [
    "presentation timing",
    "academic deadlines"
  ],
  keywords: [
    { keyword: "work" },
    { keyword: "timing" },
    { keyword: "code" }
  ]
};
export let mockWeeklyData = [
  { day: "Mon", moodScore: 4, stressLevel: 65, primaryEmotion: "Anxious" },
  { day: "Tue", moodScore: 6, stressLevel: 45, primaryEmotion: "Neutral" },
  { day: "Wed", moodScore: 8, stressLevel: 30, primaryEmotion: "Productive" },
  { day: "Thu", moodScore: 5, stressLevel: 55, primaryEmotion: "Tired" },
  { day: "Fri", moodScore: 9, stressLevel: 20, primaryEmotion: "Motivated" },
  { day: "Sat", moodScore: 8, stressLevel: 15, primaryEmotion: "Relaxed" },
  { day: "Sun", moodScore: 7, stressLevel: 25, primaryEmotion: "Calm" }
];

export let mockHistoryLog = [
  {
    id: 1,
    date: "May 28, 2026",
    time: "09:30 AM",
    rawText: "Finished up the core frontend modular decoupling architecture today. Ran into a couple of export syntax bugs with the Vite compiler but managed to clear them out with some hard refreshes. Feeling incredibly productive.",
    summary: "The user successfully resolved modular integration errors within a frontend environment, resulting in a high state of task completion and professional validation.",
    moodType: "positive",
    emotions: ["Productive", "Motivated"]
  },
  {
    id: 2,
    date: "May 26, 2026",
    time: "04:15 PM",
    rawText: "Spent hours debugging a sticky state issue where the responsive charting components kept rendering with a height of zero pixels. It was getting frustrating because the logic looked sound on paper.",
    summary: "The user experienced situational friction and minor frustration caused by layout dimensions constraints within responsive UI wrapper elements.",
    moodType: "neutral",
    emotions: ["Frustrated", "Tired"]
  },
  {
    id: 3,
    date: "May 25, 2026",
    time: "11:00 AM",
    rawText: "Preparing slides and structural notes for the upcoming frontend engineering project presentation. A bit anxious about the timeline limits but the core functional engine is working great.",
    summary: "The user is managing mild anticipatory stress regarding evaluation timelines, balanced by confidence in structural technical execution.",
    moodType: "anxious",
    emotions: ["Anxious", "Focused"]
  }
];