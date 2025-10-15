import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn utility function", () => {
  it("should merge class names correctly", () => {
    const result = cn("text-red-500", "bg-blue-500");
    expect(result).toBe("text-red-500 bg-blue-500");
  });

  it("should handle conditional classes", () => {
    const result = cn("base-class", false && "hidden-class", "visible-class");
    expect(result).toBe("base-class visible-class");
  });

  it("should merge Tailwind classes correctly", () => {
    const result = cn("p-4", "p-8");
    expect(result).toBe("p-8");
  });

  it("should handle undefined and null values", () => {
    const result = cn("text-base", undefined, null, "font-bold");
    expect(result).toBe("text-base font-bold");
  });

  it("should handle arrays of classes", () => {
    const result = cn(["text-sm", "font-medium"], "text-red-500");
    expect(result).toBe("text-sm font-medium text-red-500");
  });
});
