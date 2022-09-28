import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Download } from "@styled-icons/evaicons-solid/Download";
import styled from "styled-components";
import { Button, Icon } from "@/components";
import { useTheme } from "@/hooks";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => {
  const { theme, toggleColorMode } = useTheme();

  const icon = <Icon icon={Download} color={theme.colors.grey[1]} size={20} />;

  return (
    <div>
      <Flex>
        <Button kind="solid" onClick={toggleColorMode}>
          Solid
        </Button>
        <Button kind="outlined">Outlined</Button>
        <Button kind="ghost">Ghost</Button>
        <Button kind="link">Link</Button>
        <Button kind="alternative">Alternative</Button>
        <Button disabled>Disabled</Button>
      </Flex>
      <Flex>
        <Button size="xs">Mini</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Flex>
      <Flex>
        <Button variant="info">Info</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="neutral">Neutral</Button>
      </Flex>
      <Flex>
        <Button kind="ghost" variant="info">
          Info
        </Button>
        <Button kind="ghost" variant="success">
          Success
        </Button>
        <Button kind="ghost" variant="danger">
          Danger
        </Button>
        <Button kind="ghost" variant="warning">
          Warning
        </Button>
        <Button kind="ghost" variant="neutral">
          Neutral
        </Button>
      </Flex>
      <Flex>
        <Button variant="info" kind="outlined">
          Info
        </Button>
        <Button variant="success" kind="outlined">
          Success
        </Button>
        <Button variant="danger" kind="outlined">
          Danger
        </Button>
        <Button variant="warning" kind="outlined">
          Warning
        </Button>
        <Button variant="neutral" kind="outlined">
          Neutral
        </Button>
      </Flex>
      <Flex>
        <Button shape="default">Default</Button>
        <Button shape="pill">Pill</Button>
        <Button shape="rectangle">Rectangle</Button>
      </Flex>
      <Flex>
        <Button shape="default" isLoading>
          Default
        </Button>
        <Button shape="default" leftIcon={icon}>
          Download
        </Button>
        <Button shape="default" rightIcon={icon}>
          Download
        </Button>
      </Flex>
      <Flex>
        <Button variant="info" kind="alternative">
          Default
        </Button>
        <Button variant="success" kind="alternative">
          success
        </Button>
        <Button variant="danger" kind="alternative">
          Danger
        </Button>
        <Button variant="warning" kind="alternative">
          Warning
        </Button>
        <Button variant="neutral" kind="alternative">
          Neutral
        </Button>
      </Flex>
    </div>
  );
};

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;
