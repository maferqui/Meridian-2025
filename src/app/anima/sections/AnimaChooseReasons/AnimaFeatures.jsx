"use client";
import * as Accordion from "@radix-ui/react-accordion";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const AccordionItem = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={cn("mt-px overflow-hidden focus-within:relative focus-within:z-10", className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={cn("group flex flex-1 cursor-pointer items-center justify-between leading-none outline-none", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={cn("data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down overflow-hidden text-base font-normal text-white/70", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="pt-2 pb-4">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

export default function AnimaFeatures({ 
  collapseDelay = 5000,
  linePosition = "left",
  data = [],
}) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.5 
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [isInView]);

  useEffect(() => {
    if (currentIndex === -1) return;
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
    }, collapseDelay);
    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex, data.length]);

  return (
    <div ref={ref} className="w-full max-w-2xl">
      <Accordion.Root
        type="single"
        collapsible
        className="w-full space-y-4"
        value={data[currentIndex]?.id}
        onValueChange={(value) => {
          const newIndex = data.findIndex(item => item.id === value);
          if (newIndex !== -1) {
            setCurrentIndex(newIndex);
          }
        }}
      >
        {data.map((item, index) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="group relative rounded-lg transition-colors duration-300 pb-4"
          >
            <div className="relative flex items-center">
              <div className="item-box mr-4 flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                {React.cloneElement(item.icon, { className: "size-6 text-[#d5ac57]" })}
              </div>
              <div className="flex-1">
                <AccordionTrigger className="p-0 text-left hover:no-underline">
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                </AccordionTrigger>
                <AccordionContent>
                  {item.content}
                </AccordionContent>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[1px] w-full overflow-hidden rounded-lg bg-white/20">
              <div
                className={`absolute left-0 top-0 h-full ${currentIndex === index ? "w-full" : "w-0"} origin-left bg-[#d5ac57] transition-all ease-linear`}
                style={{
                  transitionDuration: currentIndex === index ? `${collapseDelay}ms` : "0s",
                }}
              ></div>
            </div>
          </AccordionItem>
        ))}
      </Accordion.Root>
    </div>
  );
}
