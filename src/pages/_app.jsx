import "normalize.css";
import "../styles/globals.scss";
import AnimatedBackground from "@/components/AnimatedBackground/AnimatedBackground";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero></Hero>
      <AnimatedBackground />
    </>
  );
}

export default App;
