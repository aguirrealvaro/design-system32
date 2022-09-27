import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "@/components";

export default {
  title: "Components/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

export const Primary: ComponentStory<typeof Title> = () => {
  const breakSizes = {
    xs: "10px",
    sm: "20px",
    md: "30px",
    lg: "40px",
    xl: "50px",
  };

  return (
    <Title as="h2" /* size="3xl" */ weight="bold" size={breakSizes}>
      titulo
    </Title>
  );
};
