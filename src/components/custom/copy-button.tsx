import { Copy } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { cn } from "@/lib/utils";

const CopyButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button> & { content: string }
>((props, ref) => {
  const { toast } = useToast();

  return (
    <Button
      variant="secondary"
      {...props}
      className={cn("h-6 w-6 p-1", props.className)}
      ref={ref}
      onClick={async (...args) => {
        await props.onClick?.(...args);
        try {
          await navigator.clipboard.writeText(props.content);
          toast({ description: 'Copied to clipboard!', variant: 'default' });
        } catch (e) {
          toast({ description: 'Failed to copy to clipboard', variant: 'destructive' });
        }
      }}
    >
      <Copy />
    </Button>
  );
});
CopyButton.displayName = "CopyButton";

export { CopyButton };
