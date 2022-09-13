import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Badge } from "@/components";

export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Primary: ComponentStory<typeof Badge> = () => {
  return (
    <Container>
      <Badge variant="default">Default</Badge>
      <Badge variant="positive">Positive</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="negative">Negative</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;