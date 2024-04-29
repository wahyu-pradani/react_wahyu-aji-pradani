import { useState } from "react";
import "./App.css";
import {OpenAI } from "openai";
import CHATAI from "./chatGeminiAI";


function App() {
  return(
  <main>
    <CHATAI></CHATAI>
  </main>
  );
}

export default App;
