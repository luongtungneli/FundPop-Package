import type { Meta, StoryObj } from "@storybook/react";

import Fundpop from "./Fundpop";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Test/Fundpop",
    component: Fundpop,
} satisfies Meta<typeof Fundpop>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        productId: "gid://shopify/Product/6923088920642",
    },
};
