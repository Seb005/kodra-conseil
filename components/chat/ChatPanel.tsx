"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import ChatMessage from "@/components/chat/ChatMessage";

type Message = { role: "user" | "assistant"; content: string };

const WELCOME: Message = {
  role: "assistant",
  content:
    "Bonjour\u00a0! Je suis l\u2019assistant virtuel de Kodra Conseil. Avant de commencer, pourriez-vous me laisser votre adresse courriel\u00a0? Comme ça, notre équipe pourra vous recontacter au besoin.",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const hasEmail = email.length > 0;

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus appropriate input when panel opens
  useEffect(() => {
    if (isOpen) {
      if (hasEmail) {
        inputRef.current?.focus();
      } else {
        emailInputRef.current?.focus();
      }
    }
  }, [isOpen, hasEmail]);

  const submitEmail = () => {
    const trimmed = emailInput.trim();
    if (!EMAIL_REGEX.test(trimmed)) {
      setError("Veuillez entrer une adresse courriel valide.");
      return;
    }
    setError("");
    setEmail(trimmed);

    // Add user message showing the email, then assistant's follow-up
    setMessages((prev) => [
      ...prev,
      { role: "user", content: trimmed },
      {
        role: "assistant",
        content: `Merci\u00a0! Je peux maintenant vous renseigner sur nos services de facilitation stratégique et nos formations en IA. Comment puis-je vous aider\u00a0?`,
      },
    ]);
    setEmailInput("");
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitEmail();
    }
  };

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isStreaming) return;

    const userMsg: Message = { role: "user", content: text };
    const conversation = [...messages, userMsg];
    setMessages(conversation);
    setInput("");
    setError("");
    setIsStreaming(true);

    // Add placeholder for assistant response
    const placeholder: Message = { role: "assistant", content: "" };
    setMessages([...conversation, placeholder]);

    try {
      // Filter out welcome & email exchange, keep only real conversation
      const apiMessages = conversation
        .filter(
          (m) =>
            m.content !== WELCOME.content &&
            m.content !== email &&
            !m.content.startsWith("Merci\u00a0! Je peux maintenant"),
        )
        .slice(-10)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages, email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          data?.error || "Une erreur est survenue. Réessayez plus tard.",
        );
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") break;

          try {
            const parsed = JSON.parse(data);
            if (parsed.text) {
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                updated[updated.length - 1] = {
                  ...last,
                  content: last.content + parsed.text,
                };
                return updated;
              });
            }
            if (parsed.error) {
              setError(parsed.error);
            }
          } catch {
            /* ignore malformed SSE */
          }
        }
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Impossible de contacter l\u2019assistant.",
      );
      // Remove empty placeholder on error
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last.role === "assistant" && !last.content) {
          return prev.slice(0, -1);
        }
        return prev;
      });
    } finally {
      setIsStreaming(false);
    }
  }, [input, isStreaming, messages, email]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className={`fixed z-40 transition-all duration-200 ease-out ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      } inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-[400px] md:h-[600px] md:max-h-[80vh]`}
    >
      <div className="flex h-full flex-col rounded-none border-white/10 bg-blue-dark shadow-2xl md:rounded-2xl md:border">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-brand/10">
              <svg
                className="h-4 w-4 text-orange-brand"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Assistant Kodra
              </p>
              <p className="text-xs text-gray-500">Propulsé par l&apos;IA</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.map((msg, i) => (
            <ChatMessage
              key={i}
              role={msg.role}
              content={msg.content}
              isStreaming={
                isStreaming && i === messages.length - 1 && msg.role === "assistant"
              }
            />
          ))}
          {error && (
            <p className="rounded-lg bg-red-500/10 px-4 py-3 text-xs text-red-400">
              {error}
            </p>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input — email or chat */}
        <div className="shrink-0 border-t border-white/10 px-4 py-3">
          {!hasEmail ? (
            <>
              <div className="flex items-end gap-2">
                <input
                  ref={emailInputRef}
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  onKeyDown={handleEmailKeyDown}
                  placeholder="votre@courriel.com"
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-orange-brand focus:outline-none focus:ring-1 focus:ring-orange-brand"
                />
                <button
                  onClick={submitEmail}
                  disabled={!emailInput.trim()}
                  aria-label="Continuer"
                  className="flex h-10 shrink-0 items-center justify-center rounded-lg bg-orange-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-orange-brand-hover disabled:opacity-40"
                >
                  Continuer
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-gray-600">
                Votre courriel ne sera utilisé que pour vous recontacter.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Posez votre question..."
                  rows={1}
                  disabled={isStreaming}
                  className="flex-1 resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-orange-brand focus:outline-none focus:ring-1 focus:ring-orange-brand disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isStreaming}
                  aria-label="Envoyer"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-brand text-white transition-colors hover:bg-orange-brand-hover disabled:opacity-40"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                    />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-gray-600">
                L&apos;assistant peut faire des erreurs. Vérifiez les
                informations importantes.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
