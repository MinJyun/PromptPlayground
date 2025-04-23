// app/page.tsx
'use client';

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function PromptPlayground() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    setResponse("");

    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.result);
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Prompt Playground</h1>
      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        rows={6}
        className="w-full"
      />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Thinking..." : "Send Prompt"}
      </Button>
      {response && (
        <div className="mt-4 p-4 border rounded bg-white shadow">
          <strong>Response:</strong>
          <pre className="whitespace-pre-wrap mt-2 text-sm">{response}</pre>
        </div>
      )}
    </div>
  );
}