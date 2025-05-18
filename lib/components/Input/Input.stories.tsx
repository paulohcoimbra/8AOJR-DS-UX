import React from "react";
import { Input, InputProps } from ".";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelText: 'Default Input'
};

export const Error = Template.bind({});
Error.args = {
  labelText: 'Input with error label'
  ,errorMessage: 'error_message'
};

