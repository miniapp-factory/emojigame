"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Puzzle = {
  emojis: string;
  answer: string;
  explanation: string;
};

const puzzles: Puzzle[] = [
  {
    emojis: "😈🗣️",
    answer: "Speak of the devil",
    explanation: "Devil + speak = speak of the devil",
  },
  {
    emojis: "🐱➡️🪤",
    answer: "Curiosity killed the cat",
    explanation: "Curiosity + cat = curiosity killed the cat",
  },
  {
    emojis: "🌧️⏳",
    answer: "Rain check",
    explanation: "Rain + check = rain check",
  },
  {
    emojis: "🦁👑",
    answer: "Lion king",
    explanation: "Lion + king = lion king",
  },
  {
    emojis: "🍕🍕🍕",
    answer: "Three pizzas",
    explanation: "Three pizzas = three pizzas",
  },
  {
    emojis: "🚀🌕",
    answer: "Moonshot",
    explanation: "Rocket + moon = moonshot",
  },
  {
    emojis: "🧠💡",
    answer: "Brainstorm",
    explanation: "Brain + lightbulb = brainstorm",
  },
  {
    emojis: "🛠️🧰",
    answer: "Toolbox",
    explanation: "Tools + toolbox = toolbox",
  },
  {
    emojis: "📚🛏️",
    answer: "Bedtime stories",
    explanation: "Books + bed = bedtime stories",
  },
  {
    emojis: "🏰🦄",
    answer: "Fairy tale",
    explanation: "Castle + unicorn = fairy tale",
  },
];

export default function EmojiGame() {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const current = puzzles[index];

  const handleSubmit = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % puzzles.length);
    setGuess("");
    setShowAnswer(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <Label className="text-2xl font-bold">{current.emojis}</Label>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Your answer"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          disabled={showAnswer}
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {!showAnswer ? (
          <Button onClick={handleSubmit} disabled={!guess.trim()}>
            Submit
          </Button>
        ) : (
          <>
            <div className="text-lg font-semibold">
              Answer: {current.answer}
            </div>
            <div className="text-sm text-muted-foreground">
              {current.explanation}
            </div>
            <Button variant="outline" onClick={handleNext}>
              Next
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
