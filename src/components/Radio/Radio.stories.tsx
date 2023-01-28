import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = ({ onChange: _, ...args }) => {
  const [checked, setChecked] = useBoolean();

  return <Radio checked={checked} onChange={setChecked.toggle} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "This is a radio",
  size: "md",
  helpText: "This a help text explaining the action",
  position: "right",
};
