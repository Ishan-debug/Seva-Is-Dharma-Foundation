"use client";

import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeIn({
  children,
}: FadeInProps) {
  return <>{children}</>;
}