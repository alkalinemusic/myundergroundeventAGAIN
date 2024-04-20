import React from "react";
import { Button, Flex } from "antd";

export default function BigButtons() {
  return (
    <div>
      BigButtons
      <Flex gap="small" wrap="wrap">
        <Button type="primary">I am looking for an event</Button>
        <Button type="primary">I want to post an event</Button>
      </Flex>
    </div>
  );
}
