import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Topics from "../components/Topics";
import ProblemsTable from "../components/ProblemsTable";
import Footer from "../components/Footer";

function Home() {

  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />

      <Topics
    selectedTopic={selectedTopic}
    setSelectedTopic={setSelectedTopic}
/>

      <ProblemsTable
        selectedTopic={selectedTopic}
      />

      <Footer />
    </>
  );
}

export default Home;