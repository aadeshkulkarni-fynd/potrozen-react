import { ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<{
  (props: import("./Dialog").DialogProps): JSX.Element;
  defaultProps: {
    id: string;
    title: string;
    theme: null;
    children: null;
    positiveButtonLabel: boolean;
    neutralButtonLabel: string;
    negativeButtonLabel: boolean;
    isVisible: boolean;
  };
}>;
export default _default;
export declare const confirm_dialog: (args: any) => JSX.Element;
export declare const choose_dialog: (args: any) => JSX.Element;
