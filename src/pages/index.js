import React from "react"
import Section from './../components/section';
import Title from './../components/homepage/title';

import "./../styles/homepage.scss";

export default function Home() {
  return (
    <main>
      <Section>
        <Title text="About Us" />
      </Section>
      <Section>
        <Title text="Our Services" />
      </Section>
      <Section>
        <Title text="Our Clients" />
      </Section>
      <Section>
        <Title text="Get in Touch" />
      </Section>
    </main>
  )
}
