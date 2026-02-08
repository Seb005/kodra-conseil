"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ChatBubble from "@/components/chat/ChatBubble";
import ChatPanel from "@/components/chat/ChatPanel";

export default function ChatWidget() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setHasBeenOpened(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {hasBeenOpened && <ChatPanel isOpen={isOpen} onClose={handleClose} />}
      <ChatBubble isOpen={isOpen} onClick={isOpen ? handleClose : handleOpen} />
    </>,
    document.body,
  );
}
