import * as React from "react";
import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full bg-mint px-3 py-1 text-xs font-medium text-navy",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Tag.displayName = "Tag";

export { Tag };
