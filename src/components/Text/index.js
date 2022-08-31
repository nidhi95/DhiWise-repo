import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[49px] xl:text-[56px] text-[64px] 3xl:text-[76px]",
  h2: "font-medium lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h3: "font-bold lg:text-[25px] xl:text-[28px] text-[32.37px] 2xl:text-[32px] 3xl:text-[38px]",
  h4: "font-semibold lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px]",
  h5: "font-semibold lg:text-[21px] xl:text-[24px] text-[28px] 3xl:text-[33px]",
  h6: "font-semibold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  body1: "lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body2:
    "font-normal lg:text-[15px] xl:text-[17px] text-[19.63px] 2xl:text-[19px] 3xl:text-[23px]",
  body3:
    "font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body4: "lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body5: "lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]",
  body6:
    "font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
