import Hero from '@/components/hero';
import React from 'react';
import Lebron1 from "@/assets/Lebron1.jpg";

export default function GoatPage() {
  // notFound();
  return (
    <Hero imgSrc={Lebron1} altText='Lebron' title='Goat'></Hero>
  )
}
