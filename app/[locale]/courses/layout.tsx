"use client"
import { ReactNode } from "react";

export default function CoursesLayoutPage ({
                                             children,
                                           }: Readonly<{
  children: ReactNode;
}>) {
  return <section className="min-h-screen bg-white font-sans">
    {children}
  </section>
}
