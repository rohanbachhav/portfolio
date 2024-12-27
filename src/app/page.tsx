// app/page.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container">
      <h1>rohan&apos;s site </h1>
      <p>
        Hello, I&apos;m Rohan Bachhav, a passionate IT professional with a focus on programming and software engineering. I specialize in competitive programming, game development, and various IT domains, including machine learning and blockchain. 
        <Link href="/about">Learn more about me</Link>.
      </p>
      <Link href="/projects">projects : [ there are none ]</Link>
    </div>
  );
};

export default Home;
