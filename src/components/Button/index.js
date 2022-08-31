import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  icbCircleBorder18: "rounded-radius18",
};
const variants = {
  FillGray50: "bg-gray_50 text-bluegray_600",
  FillBlueA700: "bg-blue_A700 text-white_A700",
  OutlineBlueA700: "border border-blue_A700 border-solid text-blue_A700",
  FillWhiteA700: "bg-white_A700 text-bluegray_700",
  OutlineBlueA7001_2:
    "bg-white_A700 border border-blue_A700 border-solid text-blue_A700",
  OutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid text-bluegray_600",
  icbFillGray50: "bg-gray_50",
  icbFillGray51: "bg-gray_51",
};
const sizes = {
  sm: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  smIcn: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder8", "icbCircleBorder18"]),
  variant: PropTypes.oneOf([
    "FillGray50",
    "FillBlueA700",
    "OutlineBlueA700",
    "FillWhiteA700",
    "OutlineBlueA7001_2",
    "OutlineBluegray100",
    "icbFillGray50",
    "icbFillGray51",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillGray50",
  size: "md",
};

export { Button };
