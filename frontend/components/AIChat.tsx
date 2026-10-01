"use client";

import { FormEvent, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

type ApiResponse = {
  response?: string;
  error?: string;
};

export default function AIChat() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Namaste 🙏 I'm the Seva Is Dharma Foundation AI assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = input.trim();

    if (!message || loading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

      const endpoint = `${apiUrl}/api/ai/chat/`;

      console.log("AI URL:", endpoint);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const responseText = await response.text();

      console.log("AI STATUS:", response.status);
      console.log("AI RESPONSE:", responseText);

      let data: ApiResponse = {};

      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error(
          `AI server returned non-JSON response (${response.status}).`
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error || "The AI service is temporarily unavailable."
        );
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          data.response ||
          "I'm sorry, I couldn't generate a response right now.",
      };

      setMessages((previous) => [...previous, assistantMessage]);
    } catch (error) {
      console.error("AI CHAT ERROR:", error);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "I'm temporarily unable to respond. Please try again later or contact Seva Is Dharma Foundation directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-4 z-[100] flex h-[min(650px,calc(100vh-120px))] w-[min(400px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.20)] sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between bg-gray-950 px-5 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 shadow-lg">
                <Bot size={23} />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold sm:text-base">
                  Seva AI Assistant
                </h3>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <p className="text-xs text-gray-300">Online</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close AI chat"
              className="rounded-full p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4 sm:p-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-green-600 text-white shadow-sm"
                      : "rounded-bl-md border border-gray-100 bg-white text-gray-700 shadow-sm"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {/* Loading */}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-gray-100 bg-white px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="border-t border-gray-200 bg-white p-3 sm:p-4"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-2 transition focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask us anything..."
                maxLength={1000}
                disabled={loading}
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed"
              />

              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white shadow-sm transition hover:bg-green-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={18} />
              </button>
            </div>

            <p className="mt-2 text-center text-[11px] text-gray-400">
              AI assistant • Seva Is Dharma Foundation
            </p>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="fixed bottom-5 right-4 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-[0_10px_30px_rgba(22,163,74,0.35)] transition duration-200 hover:scale-105 hover:bg-green-700 active:scale-95 sm:right-6"
      >
        {open ? <X size={25} /> : <MessageCircle size={26} />}
      </button>
    </>
  );
}