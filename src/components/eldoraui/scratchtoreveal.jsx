"use client";

import React, { useRef, useEffect, useState } from 'react';

const ScratchToReveal = ({ children, image, width, height, minScratchPercentage = 50, className }) => {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
    };

    let isDrawing = false;

    const getScratchPercentage = () => {
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      let transparentPixels = 0;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] === 0) {
          transparentPixels++;
        }
      }
      return (transparentPixels / (width * height)) * 100;
    };

    const scratch = (e) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || e.touches[0].clientX) - rect.left;
      const y = (e.clientY || e.touches[0].clientY) - rect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2, false);
      ctx.fill();
    };

    const startDrawing = (e) => {
      isDrawing = true;
      scratch(e);
    };

    const stopDrawing = () => {
      isDrawing = false;
      if (getScratchPercentage() > minScratchPercentage) {
        setIsRevealed(true);
      }
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', scratch);
    canvas.addEventListener('touchend', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', scratch);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', scratch);
      canvas.removeEventListener('touchend', stopDrawing);
    };
  }, [image, width, height, minScratchPercentage]);

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <div className="absolute inset-0 z-10">
        {children}
      </div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={`absolute inset-0 z-20 transition-opacity duration-1000 ${isRevealed ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

export default ScratchToReveal;
