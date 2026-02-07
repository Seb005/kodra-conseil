"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

export default function EasterEgg() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const processFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.paused || video.ended) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0);
    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = frame.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Detect white/gray background: high brightness, low saturation
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const brightness = (r + g + b) / 3;
      const saturation = max === 0 ? 0 : (max - min) / max;

      // Remove white/gray background
      if (brightness > 180 && saturation < 0.15) {
        const alpha = Math.max(0, (200 - brightness) / 20) * 255;
        data[i + 3] = Math.min(data[i + 3], alpha);
      }
      // Remove black bands
      if (brightness < 30 && saturation < 0.15) {
        const alpha = Math.min(brightness / 30, 1) * 255;
        data[i + 3] = Math.min(data[i + 3], alpha);
      }
    }

    ctx.putImageData(frame, 0, 0);
    rafRef.current = requestAnimationFrame(processFrame);
  }, []);

  const trigger = useCallback(() => {
    if (visible || animating) return;

    setAnimating(true);
    setVisible(true);

    requestAnimationFrame(() => {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.play().then(() => {
          rafRef.current = requestAnimationFrame(processFrame);
        });
      }
    });

    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, [visible, animating, processFrame]);

  const handleTransitionEnd = () => {
    if (!visible) {
      setAnimating(false);
      cancelAnimationFrame(rafRef.current);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  const popup =
    mounted && (visible || animating)
      ? createPortal(
          <div
            onTransitionEnd={handleTransitionEnd}
            className="pointer-events-none fixed bottom-0 left-1/2 z-50"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(40px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            <video
              ref={videoRef}
              src="/Bonjour.mp4"
              muted
              playsInline
              style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
            />
            <canvas
              ref={canvasRef}
              style={{ width: 400, height: "auto", display: "block" }}
            />
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        onClick={trigger}
        aria-label="Easter egg"
        className="mx-2 inline-block h-[6px] w-[6px] rounded-full bg-gray-700 transition-colors hover:bg-orange-brand"
      />
      {popup}
    </>
  );
}
