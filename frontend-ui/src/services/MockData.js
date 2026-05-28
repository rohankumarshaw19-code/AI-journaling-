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