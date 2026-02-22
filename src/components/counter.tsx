"use client";

import { useState } from "react";
import { Button } from "@/components/retroui/button";
import { Card } from "@/components/retroui/card";
import { Text } from "@/components/retroui/text";
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Card className="w-full max-w-md items-center justify-center text-center">
      <Card.Header>
        <Card.Title>Counter</Card.Title>
      </Card.Header>
      <Card.Description>This is a counter</Card.Description>
      <Card.Content className="flex flex-col items-center justify-center">
        <Text as="h3">Count: {count}</Text>{" "}
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </Card.Content>
    </Card>
  );
}
