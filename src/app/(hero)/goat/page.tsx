import Hero from '@/components/hero';
import React from 'react';
import Lebron1 from "@/assets/Lebron1.jpg";
import type { Metadata } from 'next';

export const metadata: Metadata= {
  title: "Goat",
}

export default function GoatPage() {
  // notFound();
  return (
    <Hero imgSrc={Lebron1} altText='Lebron' title='Goat'></Hero>
  )
}
