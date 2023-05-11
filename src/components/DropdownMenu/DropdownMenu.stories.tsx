import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DropdownMenuGroup, DropdownMenuItem } from "./components";
import { DropdownMenu, Separator } from "@/components";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = ({ trigger: dummyTrigger, ...args }) => {
  return (
    <DropdownMenu trigger={<button>click me</button>} {...args}>
      <DropdownMenuGroup>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
      </DropdownMenuGroup>
      <Separator preSpacing={1} postSpacing={1} />
      <DropdownMenuGroup>
        <DropdownMenuItem>Item 4</DropdownMenuItem>
        <DropdownMenuItem>Item 5</DropdownMenuItem>
        <DropdownMenuItem>Item 6</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenu>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  id: "dropdown-story",
  position: "bottom",
  gap: 16,
  triggerMode: "click",
};