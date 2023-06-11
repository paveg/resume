import '../src/app/globals.css'
import type { Preview } from "@storybook/react";
const preview: Preview = {
  parameters: {
    nextjs: {
      appDirecotry: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
