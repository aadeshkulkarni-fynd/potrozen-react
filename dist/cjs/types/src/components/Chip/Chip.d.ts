import React from "react";
import "./Chip.scss";
export interface ChipProps {
  deletable?: boolean;
  disabled?: boolean;
  isRounded?: boolean;
  fontWeight?: string | number;
  state?: string;
  children?: string;
  onClick?: Function;
  onDelete?: Function;
  icon?: React.ElementType;
  iconStyle?: React.CSSProperties;
  onIconClick?: Function;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<{
  (props: ChipProps): JSX.Element;
  defaultProps: {
    deletable: boolean;
    disabled: boolean;
    iconStyle: {};
    isRounded: boolean;
    state: string;
    style: {};
  };
}>;
export default _default;
