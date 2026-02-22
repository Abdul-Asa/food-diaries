"use client";

import {
  Content,
  Group,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
  Value,
  Viewport,
} from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Select = Root;

const SelectTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Trigger>) => {
  return (
    <Trigger
      className={cn(
        "flex h-10 min-w-40 items-center justify-between rounded border-2 border-border bg-transparent px-4 py-2 shadow-md outline-none placeholder:text-muted-foreground focus:shadow-xs focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <Icon asChild>
        <ChevronDown className="ml-2 h-4 w-4" />
      </Icon>
    </Trigger>
  );
};

const SelectValue = Value;

const SelectIcon = Icon;

const SelectContent = ({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof Content>) => {
  return (
    <Portal>
      <Content
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-32 overflow-hidden border border-border bg-background text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
          position === "popper" &&
            "data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <ScrollUpButton className="flex cursor-default items-center justify-center py-1 text-muted-foreground">
          <ChevronUp className="h-4 w-4" />
        </ScrollUpButton>
        <Viewport
          className={cn(
            position === "popper" &&
              "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"
          )}
        >
          {children}
        </Viewport>
        <ScrollDownButton className="flex cursor-default items-center justify-center py-1 text-muted-foreground">
          <ChevronDown className="h-4 w-4" />
        </ScrollDownButton>
      </Content>
    </Portal>
  );
};

const SelectGroup = Group;

const SelectItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Item>) => (
  <Item
    className={cn(
      "relative flex w-full cursor-default select-none items-center px-2 py-1.5 outline-none focus:bg-primary focus:text-primary-foreground data-disabled:pointer-events-none data-highlighted:bg-primary data-highlighted:text-primary-foreground data-disabled:opacity-50",
      className
    )}
    {...props}
  >
    <ItemText>{children}</ItemText>

    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Check className="h-4 w-4 text-foreground" />
      </ItemIndicator>
    </span>
  </Item>
);
const SelectLabel = Label;
const SelectSeparator = Separator;

const SelectObj = Object.assign(Select, {
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Label: SelectLabel,
  Separator: SelectSeparator,
});

export { SelectObj as Select };
