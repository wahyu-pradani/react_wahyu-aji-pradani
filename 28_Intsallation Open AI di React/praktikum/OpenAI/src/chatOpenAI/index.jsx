import { useState } from "react";
import {OpenAI } from "openai";


function OPENAI() {
  const [prompt, setPrompt] = useState(""); // state input user
  const [loading, setLoading] = useState(false); // state loader nunggu resposn
  const [result, setResult] = useState([]); // menyimpan respone

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser:true
  })
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await openai.completions.create({
        prompt: prompt,
        model: "davinci-002",
        max_tokens: 1000,
        temperature: 0,
        presence_penalty: 1,
        frequency_penalty: 0.0,
        top_p: 1.0,
      });
      setResult(res.choices[0].text);
      console.log("result ", res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="grid gap-4 max-w-screen-xl">
    <form className="max-w-screen-xl mx-auto grid gap-4">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows="6"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="block p-2.5 w-[500px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment..."
      ></textarea>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={loading || prompt.length === 0}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {
          loading? "Wait Generating..." : "Generate"
        }
      </button>
    </form>
    <div >
      <p className="mx-auto  block p-2.5 w-[500px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{result}</p>
    </div>
    </main>
  );
}

export default OPENAI;
