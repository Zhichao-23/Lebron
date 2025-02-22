import React from 'react';
import ChampionSrc from "@/assets/championship.jpg";
import Hero from '@/components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "championship"
};

export default function ChampionPage() {
  return (
    <Hero imgSrc={ChampionSrc} altText='championship' title='championship'></Hero>
  )
}
