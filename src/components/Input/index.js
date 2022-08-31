import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid",
  srcOutlineBluegray200:
    "bg-white_A700 border border-bluegray_200 border-solid",
  OutlineBluegray200: "bg-white_A700 border border-bluegray_200 border-solid",
  FillGray50: "bg-gray_50",
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
};
const shapes = {
  srcRoundedBorder6: "rounded-radius6",
  RoundedBorder8: "rounded-radius8",
};
const sizes = {
  smSrc: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  mdSrc: "p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px]",
  sm: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder6", "RoundedBorder8"]),
  variant: PropTypes.oneOf([
    "srcOutlineBluegray100",
    "srcOutlineBluegray200",
    "OutlineBluegray200",
    "FillGray50",
    "OutlineBluegray100",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "srcOutlineBluegray100",
  size: "smSrc",
};

export { Input };
