"use client";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export default function ChatMessage({
  role,
  content,
  isStreaming,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "rounded-2xl rounded-br-md bg-orange-brand/20 text-white"
            : "rounded-2xl rounded-bl-md bg-white/5 text-gray-300"
        }`}
      >
        {content ? (
          <p className="whitespace-pre-wrap">{content}</p>
        ) : isStreaming ? (
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" />
            <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
            <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
          </span>
        ) : null}
      </div>
    </div>
  );
}
