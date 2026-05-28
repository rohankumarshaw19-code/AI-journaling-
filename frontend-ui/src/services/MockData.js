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
export const mockWeeklyData = [
  { day: "Mon", moodScore: 4, stressLevel: 65, primaryEmotion: "Anxious" },
  { day: "Tue", moodScore: 6, stressLevel: 45, primaryEmotion: "Neutral" },
  { day: "Wed", moodScore: 8, stressLevel: 30, primaryEmotion: "Productive" },
  { day: "Thu", moodScore: 5, stressLevel: 55, primaryEmotion: "Tired" },
  { day: "Fri", moodScore: 9, stressLevel: 20, primaryEmotion: "Motivated" },
  { day: "Sat", moodScore: 8, stressLevel: 15, primaryEmotion: "Relaxed" },
  { day: "Sun", moodScore: 7, stressLevel: 25, primaryEmotion: "Calm" }
];