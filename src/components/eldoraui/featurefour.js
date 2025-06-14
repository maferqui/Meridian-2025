import { cn } from "@/lib/utils";

//TODO : Improve mobile version to display the image down the corresponding text instead of at the full bottom

export function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent,
}) {
  return (
    <div
      className={cn(
        "transform-gpu rounded-lg border transition-all",
        isOpen
          ? ""
          : "scale-90 border-transparent opacity-50 saturate-0",
      )}
    >
      <div className="flex w-full items-center gap-4 p-4">
        <p
          className={cn(
            "inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-base-300 text-secondary",
          )}
        >
          {number}
        </p>
        <h2
          className={cn(
            "text-left text-xl font-medium text-primary",
          )}
        >
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left text-secondary transition-all duration-500",
          isOpen ? " max-h-64" : "max-h-0",
        )}
      >
        <p className="p-4 text-lg">{content}</p>
        <div className="w-full px-4 pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full">
            <div
              className={cn("absolute left-0 top-0 h-1 bg-primary")}
              style={{ width: `${loadingWidthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
