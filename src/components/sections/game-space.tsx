'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Loader2, Gamepad2 } from "lucide-react";

const GameLoadingSkeleton = () => (
  <Card className="glass-card p-8 w-[min(90vw,520px)] h-[min(90vw,620px)] flex items-center justify-center">
    <div className="text-center text-muted-foreground">
      <Loader2 className="w-14 h-14 animate-spin mx-auto mb-4" />
      <p className="text-lg font-medium">Loading Game...</p>
    </div>
  </Card>
);

const SnakeGame = dynamic(() => import('@/components/snake-game'), {
  ssr: false,
  loading: () => <GameLoadingSkeleton />,
});

const TicTacToe = dynamic(() => import('@/components/tic-tac-toe'), {
  ssr: false,
  loading: () => <GameLoadingSkeleton />,
});

const GameSpaceSection = () => {
  return (
    <section id="game-space" className="w-full py-32 sm:py-40 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-6">
            <Gamepad2 className="w-10 h-10" />
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tight mb-4">
            Game On!
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Take a break and play a game. Choose your challenge below—Snake or Tic-Tac-Toe.
          </p>
        </div>

        <Tabs defaultValue="snake" className="w-full max-w-max mx-auto flex flex-col items-center">
          <TabsList className="glass-card border-0 p-1.5 h-14">
            <TabsTrigger value="snake" className="px-8 py-2.5 text-base font-bold rounded-xl">
              Snake
            </TabsTrigger>
            <TabsTrigger value="tictactoe" className="px-8 py-2.5 text-base font-bold rounded-xl">
              Tic-Tac-Toe
            </TabsTrigger>
          </TabsList>
          <TabsContent value="snake" className="mt-8">
            <SnakeGame />
          </TabsContent>
          <TabsContent value="tictactoe" className="mt-8">
            <TicTacToe />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GameSpaceSection;
