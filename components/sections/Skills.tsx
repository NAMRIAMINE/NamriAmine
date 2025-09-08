// app/components/sections/Skills.tsx
"use client";

import { Code, Database, Server, Terminal } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiAuth0,
  SiBiome,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandVscode, TbPaw } from "react-icons/tb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryIcons = {
  frontend: Code,
  backend: Server,
  database: Database,
  tools: Terminal,
};

export function Skills() {
  const normalizeKey = (name: string) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[./&-]/g, "");

  const skillIconMap: Record<string, IconType> = {
    reactjs: SiReact,
    nextjs: SiNextdotjs,
    typescript: SiTypescript,
    tailwindcss: SiTailwindcss,
    shadcnui: SiRadixui,
    zustand: TbPaw as unknown as IconType,
    nodejs: SiNodedotjs,
    expressjs: SiExpress,
    restapis: TbApi as unknown as IconType,
    socketio: SiSocketdotio,
    authjs: SiAuth0,
    jwt: SiJsonwebtokens,
    mysql: SiMysql,
    postgresql: SiPostgresql,
    mongodb: SiMongodb,
    prisma: SiPrisma,
    firebase: SiFirebase,
    supabase: SiSupabase,
    gitgithub: SiGit,
    vscodecursor: TbBrandVscode,
    vercel: SiVercel,
    docker: SiDocker,
    turbopack: SiTurborepo,
    biome: SiBiome,
  };

  const getSkillIcon = (name: string) => {
    const Icon = skillIconMap[normalizeKey(name)] || Code;
    return <Icon size={16} className="text-muted-foreground" />;
  };
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise across the modern web development stack
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent =
              categoryIcons[key as keyof typeof categoryIcons];

            return (
              <Card
                key={key}
                className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div
                      className={cn(
                        "p-2 rounded-lg bg-gradient-to-r text-white",
                        category.color
                      )}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium flex items-center gap-2">
                          {getSkillIcon(skill.name)}
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            {skill.years}
                          </span>
                          <span className="text-sm">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={cn(
                            "h-full rounded-full bg-gradient-to-r transition-all duration-1000",
                            category.color
                          )}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
