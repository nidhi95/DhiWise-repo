import React from "react";

import {
  Row,
  Column,
  Text,
  Line,
  Img,
  Stack,
  List,
  Button,
  SelectBox,
  Input,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const PopupsDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row
        className="bg-gray_50 font-spacegrotesk mx-[auto] w-[100%]"
        compid="4221:2914"
        comptype="Row"
      >
        <aside className="lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[21%]">
          <Column className="" compid="4221:3189" comptype="Column">
            <Text
              className="mx-[auto] text-black_900 w-[auto]"
              compid="4221:3190"
              as="h3"
              variant="h3"
              comptype="Text"
            >
              <span className="text-blue_A700 font-spacegrotesk font-bold lg:text-[25px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px]">
                Pay
              </span>
              <span className="text-gray_900 font-spacegrotesk font-bold lg:text-[25px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px]">
                Boost
              </span>
            </Text>
            <Row
              className="font-opensans items-center lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] rounded-radius8 w-[50%]"
              compid="4221:3193"
              comptype="Row"
            >
              <Line
                className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]"
                compid="4221:3194"
                comptype="Line"
              />
              <Img
                src="images/img_vector_35.png"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                compid="I4221:3196;275:1558"
                comptype="Image"
                alt="Vector"
              />
              <Text
                className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] text-blue_A700 w-[auto]"
                compid="4221:3197"
                variant="body4"
                comptype="Text"
              >
                Dashboard
              </Text>
            </Row>
            <Column
              className="font-opensans lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[58%]"
              compid="176"
              comptype="Column"
            >
              <Row
                className="items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[71%]"
                compid="4221:3199"
                comptype="Row"
              >
                <Img
                  src="images/img_vector_36.png"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[12%]"
                  compid="I4221:3200;120:4407"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="Frame2587"
                  compid="4221:3201"
                  variant="body4"
                  comptype="Text"
                >
                  Payments
                </Text>
              </Row>
              <Row
                className="items-center ml-[1px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[99%]"
                compid="4221:3203"
                comptype="Row"
              >
                <Img
                  src="images/img_vector_37.png"
                  className="Vector225"
                  compid="I4221:3204;120:2335"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="Frame262"
                  compid="4221:3205"
                  variant="body4"
                  comptype="Text"
                >
                  Wallet & Cards
                </Text>
              </Row>
              <Row
                className="lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[90%]"
                compid="4221:3207"
                comptype="Row"
              >
                <Img
                  src="images/img_vector_38.png"
                  className="Vector16"
                  compid="I4221:3208;120:2254"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="Frame261"
                  compid="4221:3209"
                  variant="body4"
                  comptype="Text"
                >
                  Transactions
                </Text>
              </Row>
              <Row
                className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[69%]"
                compid="4221:3211"
                comptype="Row"
              >
                <Img
                  src="images/img_vector_39.png"
                  className="Vector19"
                  compid="I4221:3212;120:73"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="Frame262"
                  compid="4221:3213"
                  variant="body4"
                  comptype="Text"
                >
                  Analytics
                </Text>
              </Row>
              <Row
                className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[72%]"
                compid="4221:3215"
                comptype="Row"
              >
                <Img
                  src="images/img_vector_40.png"
                  className="Vector22"
                  compid="I4221:3216;120:664"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="Frame262"
                  compid="4221:3217"
                  variant="body4"
                  comptype="Text"
                >
                  Messages
                </Text>
              </Row>
              <Row
                className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[63%]"
                compid="4221:3219"
                comptype="Row"
              >
                <Img
                  src="images/img_vector_41.png"
                  className="Vector25"
                  compid="I4221:3220;120:1890"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="Frame262"
                  compid="4221:3221"
                  variant="body4"
                  comptype="Text"
                >
                  Settings
                </Text>
              </Row>
              <Row
                className="items-center ml-[1px] lg:mt-[336px] xl:mt-[385px] 2xl:mt-[433px] 3xl:mt-[519px] w-[46%]"
                compid="4221:3223"
                comptype="Row"
              >
                <Img
                  src="images/img_vector_42.png"
                  className="Vector22"
                  compid="I4221:3224;120:1784"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="Frame262"
                  compid="4221:3225"
                  variant="body4"
                  comptype="Text"
                >
                  Help
                </Text>
              </Row>
            </Column>
          </Column>
        </aside>
        <Column
          className="bg-gray_50 font-opensans items-center lg:p-[24px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[79%]"
          compid="4221:2915"
          comptype="Column"
        >
          <header className="mt-[1px] w-[100%]" compid="24" comptype="Header">
            <Row
              className="items-center w-[100%]"
              compid="4221:2948"
              comptype="Row"
            >
              <Text
                className="text-bluegray_900 w-[auto]"
                compid="4221:2949"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Dashboard
              </Text>
              <Stack
                className="bg-white_A700 border border-bluegray_100 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[616px] xl:ml-[705px] 2xl:ml-[793px] 3xl:ml-[952px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4221:2952"
                comptype="Stack"
              >
                <Img
                  src="images/img_vector_43.png"
                  className="Vector35"
                  compid="I4221:2953;120:253"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="absolute bg-red_700 border border-bluegray_50 border-solid flex items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] rounded-radius50 text-white_A700 top-[2%] w-[18px]"
                  compid="4221:2954"
                  variant="body6"
                  comptype="Text"
                >
                  2
                </Text>
              </Stack>
              <Column
                className="border border-blue_A700 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4221:2957"
                comptype="Column"
              >
                <Img
                  src="images/img_profileimglarg_6.png"
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  compid="I4221:2957;139:681"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
              </Column>
            </Row>
          </header>
          <List
            className="lg:gap-[17px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] grid grid-cols-4 min-h-[auto] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]"
            compid="4235:3546"
            comptype="List"
            orientation="horizontal"
          >
            <Column
              className="bg-white_A700 border border-blue_A700 border-solid lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]"
              compid="4221:2940"
              comptype="Column"
            >
              <Button
                className="flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                compid="4221:2945"
                comptype="IconButton"
                size="smIcn"
                variant="icbFillGray51"
              >
                <Img
                  src="images/img_group21_4.png"
                  className="flex items-center justify-center"
                  alt="Group21"
                />
              </Button>
              <Text
                className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-bluegray_600 w-[auto]"
                compid="4221:2942"
                variant="body4"
                comptype="Text"
              >
                Total Balance
              </Text>
              <Text
                className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-bluegray_900 w-[auto]"
                compid="4221:2944"
                as="h6"
                variant="h6"
                comptype="Text"
              >
                $14,234.00
              </Text>
            </Column>
            <Column
              className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]"
              compid="4221:2916"
              comptype="Column"
            >
              <Button
                className="flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                compid="4221:2921"
                comptype="IconButton"
                size="smIcn"
                variant="icbFillGray50"
              >
                <Img
                  src="images/img_group21_5.png"
                  className="flex items-center justify-center"
                  alt="Group21"
                />
              </Button>
              <Text
                className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-bluegray_600 w-[auto]"
                compid="4221:2918"
                variant="body4"
                comptype="Text"
              >
                Total Income
              </Text>
              <Text
                className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-bluegray_900 w-[auto]"
                compid="4221:2920"
                as="h6"
                variant="h6"
                comptype="Text"
              >
                $4,234.00
              </Text>
            </Column>
            <Column
              className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]"
              compid="4221:2924"
              comptype="Column"
            >
              <Button
                className="flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                compid="4221:2929"
                comptype="IconButton"
                size="smIcn"
                variant="icbFillGray50"
              >
                <Img
                  src="images/img_group21_6.png"
                  className="flex items-center justify-center"
                  alt="Group21"
                />
              </Button>
              <Text
                className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-bluegray_600 w-[auto]"
                compid="4221:2926"
                variant="body4"
                comptype="Text"
              >
                Total Spending
              </Text>
              <Text
                className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-bluegray_900 w-[auto]"
                compid="4221:2928"
                as="h6"
                variant="h6"
                comptype="Text"
              >
                $10,453.00
              </Text>
            </Column>
            <Column
              className="bg-white_A700 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]"
              compid="4221:2932"
              comptype="Column"
            >
              <Button
                className="flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                compid="4221:2937"
                comptype="IconButton"
                size="smIcn"
                variant="icbFillGray50"
              >
                <Img
                  src="images/img_group21_7.png"
                  className="flex items-center justify-center"
                  alt="Group21"
                />
              </Button>
              <Text
                className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-bluegray_600 w-[auto]"
                compid="4221:2934"
                variant="body4"
                comptype="Text"
              >
                Total Transactions
              </Text>
              <Text
                className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-bluegray_900 w-[auto]"
                compid="4221:2936"
                as="h6"
                variant="h6"
                comptype="Text"
              >
                $23,234.00
              </Text>
            </Column>
          </List>
          <Row
            className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
            compid="171"
            comptype="Row"
          >
            <Stack
              className="bg-white_A700 lg:h-[293px] xl:h-[335px] 2xl:h-[377px] 3xl:h-[452px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius8 w-[63%]"
              compid="4221:2958"
              comptype="Stack"
            >
              <Column
                className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[93%]"
                compid="4221:2960"
                comptype="Column"
              >
                <Row
                  className="justify-evenly w-[99%]"
                  compid="136"
                  comptype="Row"
                >
                  <Column
                    className="w-[84%]"
                    compid="4221:2964"
                    comptype="Column"
                  >
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="4221:2965"
                      variant="body4"
                      comptype="Text"
                    >
                      Spend Analysis
                    </Text>
                    <Row
                      className="items-center ml-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[37%]"
                      compid="4221:2966"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_vector_44.png"
                        className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[7%]"
                        compid="I4221:2967;120:149"
                        comptype="Image"
                        alt="Vector"
                      />
                      <Text
                        className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] Group3"
                        compid="4221:2968"
                        variant="body5"
                        comptype="Text"
                      >
                        <span className="text-green_600 font-opensans lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                          88%
                        </span>
                        <span className="text-black_900 font-opensans lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                          {" "}
                          Compared to last week
                        </span>
                      </Text>
                    </Row>
                  </Column>
                  <SelectBox
                    className="font-semibold mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[16%]"
                    compid="4221:2961"
                    comptype="Dropdown"
                    placeholderClassName="text-bluegray_600"
                    name="Frame406"
                    placeholder="This Week"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_forward_4.png"
                        className="mr-[0] lg:w-[9px] lg:h-[5px] xl:w-[10px] xl:h-[6px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13px] 3xl:h-[7px]"
                        compid="I4221:2963;2780:34749"
                        comptype="Image"
                        alt="Forward"
                      />
                    }
                  ></SelectBox>
                </Row>
                <Row
                  className="items-center justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]"
                  compid="134"
                  comptype="Row"
                >
                  <Column
                    className="w-[4%]"
                    compid="4221:2970"
                    comptype="Column"
                  >
                    <Text
                      className="Group39"
                      compid="4221:2976"
                      variant="body5"
                      comptype="Text"
                    >
                      25k
                    </Text>
                    <Text
                      className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Group39"
                      compid="4221:2975"
                      variant="body5"
                      comptype="Text"
                    >
                      20k
                    </Text>
                    <Text
                      className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Group39"
                      compid="4221:2974"
                      variant="body5"
                      comptype="Text"
                    >
                      15k
                    </Text>
                    <Text
                      className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Group39"
                      compid="4221:2973"
                      variant="body5"
                      comptype="Text"
                    >
                      10k
                    </Text>
                    <Text
                      className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Group39"
                      compid="4221:2972"
                      variant="body5"
                      comptype="Text"
                    >
                      5k
                    </Text>
                    <Text
                      className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Group39"
                      compid="4221:2971"
                      variant="body5"
                      comptype="Text"
                    >
                      0k
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat font-gilroy items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[95%]"
                    compid="6"
                    style={{ backgroundImage: "url('images/img_group6.png')" }}
                    comptype="Column"
                  >
                    <Column
                      className="bg-black_901 items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius5 w-[13%]"
                      compid="I4221:2996;188:832"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] text-white_A700 w-[96%]"
                        compid="I4221:2996;188:833"
                        variant="body5"
                        comptype="Text"
                      >
                        <span className="text-white_A700 font-gilroy lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                          $2311.65 
                        </span>
                        <span className="text-white_A700 font-gilroy lg:text-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          5 May
                        </span>
                      </Text>
                    </Column>
                    <Img
                      src="images/img_arrow_1.png"
                      className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mb-[63px] xl:mb-[72px] 2xl:mb-[82px] 3xl:mb-[98px] w-[3%]"
                      compid="I4221:2996;901:11383"
                      comptype="Image"
                      alt="Arrow"
                    />
                  </Column>
                </Row>
                <Row
                  className="items-center justify-end ml-[auto] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[95%]"
                  compid="4221:2977"
                  comptype="Row"
                >
                  <Text
                    className="Group39"
                    compid="4221:2978"
                    variant="body5"
                    comptype="Text"
                  >
                    Mon
                  </Text>
                  <Text
                    className="lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] Group39"
                    compid="4221:2979"
                    variant="body5"
                    comptype="Text"
                  >
                    Tue
                  </Text>
                  <Text
                    className="lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] Group39"
                    compid="4221:2980"
                    variant="body5"
                    comptype="Text"
                  >
                    Wed
                  </Text>
                  <Text
                    className="lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] Group39"
                    compid="4221:2981"
                    variant="body5"
                    comptype="Text"
                  >
                    Thu
                  </Text>
                  <Text
                    className="lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] Group39"
                    compid="4221:2982"
                    variant="body5"
                    comptype="Text"
                  >
                    Fri
                  </Text>
                  <Text
                    className="lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] Group39"
                    compid="4221:2983"
                    variant="body5"
                    comptype="Text"
                  >
                    Sat
                  </Text>
                  <Text
                    className="lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] Group39"
                    compid="4221:2984"
                    variant="body5"
                    comptype="Text"
                  >
                    Sun
                  </Text>
                </Row>
              </Column>
              <Column
                className="absolute bg-white_A700 h-[max-content] inset-y-[0] my-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] right-[0] rounded-radius10 shadow-bs w-[20%]"
                compid="4221:2881"
                comptype="Column"
              >
                <Text
                  className="bg-blue_100 font-semibold 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] text-blue_A700 w-[140px]"
                  compid="4221:2886"
                  variant="body5"
                  comptype="Text"
                >
                  This Week
                </Text>
                <Column
                  className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[68%]"
                  compid="177"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="4221:2883"
                    variant="body5"
                    comptype="Text"
                  >
                    This Month
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:2884"
                    variant="body5"
                    comptype="Text"
                  >
                    Last Month
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:2885"
                    variant="body5"
                    comptype="Text"
                  >
                    Last 3 Months
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:2891"
                    variant="body5"
                    comptype="Text"
                  >
                    Last 6 Months
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:2893"
                    variant="body5"
                    comptype="Text"
                  >
                    Last Year
                  </Text>
                </Column>
              </Column>
            </Stack>
            <Column
              className="bg-white_A700 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[34%]"
              compid="4221:2997"
              comptype="Column"
            >
              <Row
                className="items-center justify-between w-[98%]"
                compid="143"
                comptype="Row"
              >
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  compid="4221:3000"
                  variant="body4"
                  comptype="Text"
                >
                  Expense Tracking
                </Text>
                <SelectBox
                  className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[31%]"
                  compid="4221:3001"
                  comptype="Dropdown"
                  placeholderClassName="text-bluegray_600"
                  name="Frame407"
                  placeholder="This Month"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_forward_5.png"
                      className="mr-[0] lg:w-[9px] lg:h-[5px] xl:w-[10px] xl:h-[6px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13px] 3xl:h-[7px]"
                      compid="I4221:3003;2780:34749"
                      comptype="Image"
                      alt="Forward"
                    />
                  }
                ></SelectBox>
              </Row>
              <Column
                className="bg-cover bg-repeat lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:px-[24px] xl:px-[28px] 2xl:px-[32px] 3xl:px-[38px] lg:w-[155px] xl:w-[177px] 2xl:w-[200px] 3xl:w-[240px]"
                compid="4221:3004"
                style={{ backgroundImage: "url('images/img_group30_1.png')" }}
                comptype="Column"
              >
                <Text
                  className="font-semibold 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-white_A700 w-[auto]"
                  compid="4221:3006"
                  variant="body4"
                  comptype="Text"
                >
                  24%
                </Text>
                <Text
                  className="font-semibold mt-[4px] text-white_A700 w-[auto]"
                  compid="4221:3009"
                  variant="body4"
                  comptype="Text"
                >
                  28%
                </Text>
                <Row
                  className="justify-between mb-[4px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] mx-[auto] w-[81%]"
                  compid="138"
                  comptype="Row"
                >
                  <Text
                    className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] text-white_A700 w-[auto]"
                    compid="4221:3008"
                    variant="body4"
                    comptype="Text"
                  >
                    12%
                  </Text>
                  <Text
                    className="font-semibold lg:mb-[14px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] text-white_A700 w-[auto]"
                    compid="4221:3007"
                    variant="body4"
                    comptype="Text"
                  >
                    36%
                  </Text>
                </Row>
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[91%]"
                compid="178"
                comptype="List"
                orientation="vertical"
              >
                <Row
                  className="items-center lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[94%]"
                  compid="140"
                  comptype="Row"
                >
                  <div
                    className="bg-blue_900 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 w-[8%]"
                    compid="4221:3012"
                    comptype="View"
                  ></div>
                  <Text
                    className="Group86"
                    compid="4221:3013"
                    variant="body5"
                    comptype="Text"
                  >
                    Travel
                  </Text>
                  <div
                    className="bg-blue_A700 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[102px] xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] rounded-radius2 w-[8%]"
                    compid="4221:3015"
                    comptype="View"
                  ></div>
                  <Text
                    className="Group86"
                    compid="4221:3016"
                    variant="body5"
                    comptype="Text"
                  >
                    Sports
                  </Text>
                </Row>
                <Row
                  className="items-center lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[100%]"
                  compid="141"
                  comptype="Row"
                >
                  <div
                    className="bg-blue_A200 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 w-[7%]"
                    compid="4221:3018"
                    comptype="View"
                  ></div>
                  <Text
                    className="Group86"
                    compid="4221:3019"
                    variant="body5"
                    comptype="Text"
                  >
                    Shopping
                  </Text>
                  <div
                    className="bg-blue_A100 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[97px] rounded-radius2 w-[7%]"
                    compid="4221:3021"
                    comptype="View"
                  ></div>
                  <Text
                    className="Group86"
                    compid="4221:3022"
                    variant="body5"
                    comptype="Text"
                  >
                    Medicine
                  </Text>
                </Row>
              </List>
            </Column>
          </Row>
          <Column
            className="bg-white_A700 items-center justify-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius8 w-[100%]"
            compid="4221:3023"
            comptype="Column"
          >
            <Row
              className="items-center justify-between mt-[1px] w-[100%]"
              compid="4221:3026"
              comptype="Row"
            >
              <Text
                className="font-semibold text-bluegray_900 w-[auto]"
                compid="4221:3028"
                variant="body4"
                comptype="Text"
              >
                Transactions History
              </Text>
              <Text
                className="font-semibold text-bluegray_600 w-[auto]"
                compid="4221:3029"
                variant="body5"
                comptype="Text"
              >
                See all
              </Text>
            </Row>
            <Row
              className="items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pr-[4px] w-[100%]"
              compid="4221:3097"
              comptype="Row"
            >
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex w-[41%]"
                compid="I4221:3098;122:21142"
                comptype="SearchView"
                name="InputField"
                placeholder="Search Transactions"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[27px] lg:mr-[4px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] xl:mr-[5px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 2xl:mr-[6px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[42px] 3xl:mr-[7px] my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#74839d"
                    />
                  ) : (
                    <Img
                      src="images/img_vector_45.png"
                      className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[27px] lg:mr-[4px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] xl:mr-[5px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 2xl:mr-[6px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[42px] 3xl:mr-[7px] my-[auto]"
                      compid="I4221:3098;122:21142;122:20774;120:5357"
                      comptype="Image"
                      alt="Vector"
                    />
                  )
                }
                shape="srcRoundedBorder6"
              ></Input>
              <SelectBox
                className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[10%]"
                compid="4221:3099"
                comptype="Dropdown"
                placeholderClassName="text-bluegray_600"
                name="Frame406"
                placeholder="This Week"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_forward_6.png"
                    className="mr-[0] lg:w-[9px] lg:h-[5px] xl:w-[10px] xl:h-[6px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13px] 3xl:h-[7px]"
                    compid="I4221:3101;2780:34749"
                    comptype="Image"
                    alt="Forward"
                  />
                }
              ></SelectBox>
            </Row>
            <Row
              className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] w-[100%]"
              compid="4221:3030"
              comptype="Row"
            >
              <Column
                className="items-center w-[18%]"
                compid="4221:3031"
                comptype="Column"
              >
                <Button
                  className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                  compid="4221:3032"
                  comptype="Button"
                >
                  Name
                </Button>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[87%]"
                  compid="179"
                  comptype="Column"
                >
                  <Text
                    className="Group39"
                    compid="4221:3035"
                    variant="body5"
                    comptype="Text"
                  >
                    Ralph Edwards
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4221:3037"
                    variant="body5"
                    comptype="Text"
                  >
                    Floyd Miles
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4221:3039"
                    variant="body5"
                    comptype="Text"
                  >
                    Albert Flores
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4221:3041"
                    variant="body5"
                    comptype="Text"
                  >
                    Darrell Steward
                  </Text>
                </Column>
              </Column>
              <List
                className="gap-[0] grid grid-cols-3 min-h-[auto] w-[49%]"
                compid="186"
                comptype="List"
                orientation="horizontal"
              >
                <Column
                  className="items-center w-[100%]"
                  compid="4221:3042"
                  comptype="Column"
                >
                  <Button
                    className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                    compid="4221:3043"
                    comptype="Button"
                  >
                    Date
                  </Button>
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                    compid="180"
                    comptype="Column"
                  >
                    <Text
                      className="Group39"
                      compid="4221:3046"
                      variant="body5"
                      comptype="Text"
                    >
                      12/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3048"
                      variant="body5"
                      comptype="Text"
                    >
                      11/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3050"
                      variant="body5"
                      comptype="Text"
                    >
                      09/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3052"
                      variant="body5"
                      comptype="Text"
                    >
                      06/05/2022
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compid="4221:3053"
                  comptype="Column"
                >
                  <Button
                    className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                    compid="4221:3054"
                    comptype="Button"
                  >
                    Time
                  </Button>
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                    compid="181"
                    comptype="Column"
                  >
                    <Text
                      className="Group39"
                      compid="4221:3057"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3059"
                      variant="body5"
                      comptype="Text"
                    >
                      12:42:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3061"
                      variant="body5"
                      comptype="Text"
                    >
                      04:04:54 PM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3063"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compid="4221:3064"
                  comptype="Column"
                >
                  <Button
                    className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                    compid="4221:3065"
                    comptype="Button"
                  >
                    Payment method
                  </Button>
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                    compid="182"
                    comptype="Column"
                  >
                    <Text
                      className="Group39"
                      compid="4221:3068"
                      variant="body5"
                      comptype="Text"
                    >
                      Wallet
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3070"
                      variant="body5"
                      comptype="Text"
                    >
                      Card 4223
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3072"
                      variant="body5"
                      comptype="Text"
                    >
                      Card 5433
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3074"
                      variant="body5"
                      comptype="Text"
                    >
                      Card 4223
                    </Text>
                  </Column>
                </Column>
              </List>
              <Column className="w-[16%]" compid="4221:3075" comptype="Column">
                <Button
                  className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                  compid="4221:3076"
                  comptype="Button"
                >
                  Status
                </Button>
                <Column
                  className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[52%]"
                  compid="183"
                  comptype="Column"
                >
                  <Text
                    className="bg-gray_100 text-green_600 w-[88px] Group128"
                    compid="4221:3079"
                    variant="body5"
                    comptype="Text"
                  >
                    Completed
                  </Text>
                  <Text
                    className="bg-gray_52 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-amber_700 w-[70px] Group128"
                    compid="4221:3081"
                    variant="body5"
                    comptype="Text"
                  >
                    Pending
                  </Text>
                  <Text
                    className="bg-gray_100 lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-green_600 w-[88px] Group128"
                    compid="4221:3083"
                    variant="body5"
                    comptype="Text"
                  >
                    Completed
                  </Text>
                  <Text
                    className="bg-gray_101 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-red_700 w-[55px] Group128"
                    compid="4221:3085"
                    variant="body5"
                    comptype="Text"
                  >
                    Failed
                  </Text>
                </Column>
              </Column>
              <Column
                className="items-center w-[16%]"
                compid="4221:3086"
                comptype="Column"
              >
                <Button
                  className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                  compid="4221:3087"
                  comptype="Button"
                >
                  Amount
                </Button>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                  compid="184"
                  comptype="Column"
                >
                  <Text
                    className="font-normal not-italic text-green_600 w-[auto]"
                    compid="4221:3090"
                    variant="body5"
                    comptype="Text"
                  >
                    + $28.00
                  </Text>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-red_700 w-[auto]"
                    compid="4221:3092"
                    variant="body5"
                    comptype="Text"
                  >
                    - $85.00
                  </Text>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                    compid="4221:3094"
                    variant="body5"
                    comptype="Text"
                  >
                    + $98.00
                  </Text>
                  <Text
                    className="font-normal line-through lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-bluegray_400 w-[auto]"
                    compid="4221:3096"
                    variant="body5"
                    comptype="Text"
                  >
                    - $12.00
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
          <Column
            className="bg-white_A700 items-center justify-center xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] p-[3px] rounded-radius8 w-[100%]"
            compid="4221:3103"
            comptype="Column"
          >
            <Row
              className="items-center justify-between lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[96%]"
              compid="169"
              comptype="Row"
            >
              <Text
                className="font-semibold text-bluegray_900 w-[auto]"
                compid="4221:3184"
                variant="body4"
                comptype="Text"
              >
                Income vs Spending Report
              </Text>
              <SelectBox
                className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[6%]"
                compid="4221:3186"
                comptype="Dropdown"
                placeholderClassName="text-bluegray_600"
                name="Frame406"
                placeholder="Yearly"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_forward_7.png"
                    className="mr-[0] lg:w-[9px] lg:h-[5px] xl:w-[10px] xl:h-[6px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13px] 3xl:h-[7px]"
                    compid="I4221:3188;2780:34749"
                    comptype="Image"
                    alt="Forward"
                  />
                }
              ></SelectBox>
            </Row>
            <Stack
              className="lg:h-[200px] xl:h-[229px] 2xl:h-[258px] 3xl:h-[309px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[98%]"
              compid="133"
              comptype="Stack"
            >
              <Row
                className="absolute bottom-[0] inset-x-[0] justify-between mx-[auto] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] w-[98%]"
                compid="4221:3112"
                comptype="Row"
              >
                <Column className="w-[2%]" compid="4221:3113" comptype="Column">
                  <Text
                    className="tracking-ls1 Group39"
                    compid="4221:3114"
                    variant="body5"
                    comptype="Text"
                  >
                    30K
                  </Text>
                  <Text
                    className="Date"
                    compid="4221:3115"
                    variant="body5"
                    comptype="Text"
                  >
                    25K
                  </Text>
                  <Text
                    className="Date"
                    compid="4221:3116"
                    variant="body5"
                    comptype="Text"
                  >
                    20K
                  </Text>
                  <Text
                    className="Date"
                    compid="4221:3117"
                    variant="body5"
                    comptype="Text"
                  >
                    15K
                  </Text>
                  <Text
                    className="Date"
                    compid="4221:3118"
                    variant="body5"
                    comptype="Text"
                  >
                    10K
                  </Text>
                  <Text
                    className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] Date"
                    compid="4221:3119"
                    variant="body5"
                    comptype="Text"
                  >
                    5K
                  </Text>
                  <Text
                    className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] Date"
                    compid="4221:3120"
                    variant="body5"
                    comptype="Text"
                  >
                    0K
                  </Text>
                </Column>
                <List
                  className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-6 min-h-[auto] w-[47%]"
                  compid="187"
                  comptype="List"
                  orientation="horizontal"
                >
                  <Column
                    className="items-center w-[100%]"
                    compid="4221:3122"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-evenly w-[100%]"
                      compid="145"
                      comptype="Row"
                    >
                      <div
                        className="bg-blue_A700 lg:h-[148px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] rounded-radius5 w-[48%]"
                        compid="4221:3124"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-blue_A101 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] 2xl:mt-[103px] 3xl:mt-[123px] lg:mt-[80px] xl:mt-[91px] rounded-radius5 w-[48%]"
                        compid="4221:3125"
                        comptype="View"
                      ></div>
                    </Row>
                    <Text
                      className="Date"
                      compid="4221:3126"
                      variant="body5"
                      comptype="Text"
                    >
                      Jan
                    </Text>
                  </Column>
                  <Column
                    className="items-center justify-end lg:pt-[21px] xl:pt-[24px] 2xl:pt-[28px] 3xl:pt-[33px] w-[100%]"
                    compid="4221:3127"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-evenly w-[100%]"
                      compid="147"
                      comptype="Row"
                    >
                      <div
                        className="bg-blue_A700 lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[82px] 3xl:mt-[98px] rounded-radius5 w-[48%]"
                        compid="4221:3129"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-blue_A101 lg:h-[126px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] rounded-radius5 w-[48%]"
                        compid="4221:3130"
                        comptype="View"
                      ></div>
                    </Row>
                    <Text
                      className="Date"
                      compid="4221:3131"
                      variant="body5"
                      comptype="Text"
                    >
                      Feb
                    </Text>
                  </Column>
                  <Column
                    className="items-center justify-end lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] w-[100%]"
                    compid="4221:3132"
                    comptype="Column"
                  >
                    <Row
                      className="items-center justify-evenly w-[100%]"
                      compid="149"
                      comptype="Row"
                    >
                      <div
                        className="bg-blue_A700 lg:h-[137px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] rounded-radius5 w-[48%]"
                        compid="4221:3134"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-blue_A101 lg:h-[137px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] rounded-radius5 w-[48%]"
                        compid="4221:3135"
                        comptype="View"
                      ></div>
                    </Row>
                    <Text
                      className="Date"
                      compid="4221:3136"
                      variant="body5"
                      comptype="Text"
                    >
                      Mar
                    </Text>
                  </Column>
                  <Column
                    className="items-center justify-end 3xl:pt-[10px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] w-[100%]"
                    compid="4221:3137"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-evenly w-[100%]"
                      compid="151"
                      comptype="Row"
                    >
                      <div
                        className="bg-blue_A700 lg:h-[141px] xl:h-[162px] 2xl:h-[182px] 3xl:h-[218px] rounded-radius5 w-[48%]"
                        compid="4221:3139"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-blue_A101 3xl:h-[101px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] 3xl:mt-[116px] lg:mt-[75px] xl:mt-[86px] 2xl:mt-[97px] rounded-radius5 w-[48%]"
                        compid="4221:3140"
                        comptype="View"
                      ></div>
                    </Row>
                    <Text
                      className="Date"
                      compid="4221:3141"
                      variant="body5"
                      comptype="Text"
                    >
                      Apr
                    </Text>
                  </Column>
                  <Column
                    className="items-center justify-end lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[100%]"
                    compid="4221:3142"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-evenly w-[100%]"
                      compid="153"
                      comptype="Row"
                    >
                      <div
                        className="bg-blue_A700 lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] xl:mt-[112px] 2xl:mt-[127px] 3xl:mt-[152px] lg:mt-[98px] rounded-radius5 w-[48%]"
                        compid="4221:3144"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-blue_A101 lg:h-[142px] xl:h-[162px] 2xl:h-[183px] 3xl:h-[219px] rounded-radius5 w-[48%]"
                        compid="4221:3145"
                        comptype="View"
                      ></div>
                    </Row>
                    <Text
                      className="Date"
                      compid="4221:3146"
                      variant="body5"
                      comptype="Text"
                    >
                      May
                    </Text>
                  </Column>
                  <Column
                    className="items-center justify-end lg:pt-[28px] xl:pt-[32px] 2xl:pt-[36px] 3xl:pt-[43px] w-[100%]"
                    compid="4221:3147"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-evenly w-[100%]"
                      compid="155"
                      comptype="Row"
                    >
                      <div
                        className="bg-blue_A700 xl:h-[105px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] rounded-radius5 w-[48%]"
                        compid="4221:3149"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-blue_A101 lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] rounded-radius5 w-[48%]"
                        compid="4221:3150"
                        comptype="View"
                      ></div>
                    </Row>
                    <Text
                      className="Date"
                      compid="4221:3151"
                      variant="body5"
                      comptype="Text"
                    >
                      Jun
                    </Text>
                  </Column>
                </List>
                <Column
                  className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[5%]"
                  compid="4221:3152"
                  comptype="Column"
                >
                  <Row
                    className="items-end justify-evenly w-[100%]"
                    compid="157"
                    comptype="Row"
                  >
                    <div
                      className="bg-blue_A700 lg:h-[127px] xl:h-[146px] 2xl:h-[164px] 3xl:h-[196px] rounded-radius5 w-[48%]"
                      compid="4221:3154"
                      comptype="View"
                    ></div>
                    <div
                      className="bg-blue_A101 2xl:h-[106px] 3xl:h-[127px] lg:h-[82px] xl:h-[94px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] rounded-radius5 w-[48%]"
                      compid="4221:3155"
                      comptype="View"
                    ></div>
                  </Row>
                  <Text
                    className="Date"
                    compid="4221:3156"
                    variant="body5"
                    comptype="Text"
                  >
                    Jul
                  </Text>
                </Column>
                <List
                  className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-3 min-h-[auto] w-[22%]"
                  compid="188"
                  comptype="List"
                  orientation="horizontal"
                >
                  <Column
                    className="items-center justify-end 3xl:pt-[103px] lg:pt-[66px] xl:pt-[76px] 2xl:pt-[86px] w-[100%]"
                    compid="4221:3157"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-evenly w-[100%]"
                      compid="159"
                      comptype="Row"
                    >
                      <div
                        className="bg-blue_A700 2xl:h-[105px] 3xl:h-[125px] lg:h-[81px] xl:h-[93px] rounded-radius5 w-[48%]"
                        compid="4221:3159"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-blue_A101 lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rounded-radius5 w-[48%]"
                        compid="4221:3160"
                        comptype="View"
                      ></div>
                    </Row>
                    <Text
                      className="Date"
                      compid="4221:3161"
                      variant="body5"
                      comptype="Text"
                    >
                      Aug
                    </Text>
                  </Column>
                  <Column
                    className="items-center justify-end lg:pt-[53px] xl:pt-[61px] 2xl:pt-[69px] 3xl:pt-[82px] w-[100%]"
                    compid="4221:3162"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-evenly w-[100%]"
                      compid="161"
                      comptype="Row"
                    >
                      <div
                        className="bg-blue_A700 xl:h-[108px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[95px] rounded-radius5 w-[48%]"
                        compid="4221:3164"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-blue_A101 lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] rounded-radius5 w-[48%]"
                        compid="4221:3165"
                        comptype="View"
                      ></div>
                    </Row>
                    <Text
                      className="Date"
                      compid="4221:3166"
                      variant="body5"
                      comptype="Text"
                    >
                      Sep
                    </Text>
                  </Column>
                  <Column
                    className="items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
                    compid="4221:3167"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-evenly w-[100%]"
                      compid="163"
                      comptype="Row"
                    >
                      <div
                        className="bg-blue_A700 lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] rounded-radius5 w-[48%]"
                        compid="4221:3169"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-blue_A101 lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] rounded-radius5 w-[48%]"
                        compid="4221:3170"
                        comptype="View"
                      ></div>
                    </Row>
                    <Text
                      className="Date"
                      compid="4221:3171"
                      variant="body5"
                      comptype="Text"
                    >
                      Oct
                    </Text>
                  </Column>
                </List>
                <Column
                  className="items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[5%]"
                  compid="4221:3172"
                  comptype="Column"
                >
                  <Row
                    className="items-end justify-evenly w-[100%]"
                    compid="165"
                    comptype="Row"
                  >
                    <div
                      className="bg-blue_A700 lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] rounded-radius5 w-[48%]"
                      compid="4221:3174"
                      comptype="View"
                    ></div>
                    <div
                      className="bg-blue_A101 lg:h-[110px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius5 w-[48%]"
                      compid="4221:3175"
                      comptype="View"
                    ></div>
                  </Row>
                  <Text
                    className="Date"
                    compid="4221:3176"
                    variant="body5"
                    comptype="Text"
                  >
                    Nov
                  </Text>
                </Column>
                <Column
                  className="items-center w-[5%]"
                  compid="4221:3177"
                  comptype="Column"
                >
                  <Row
                    className="items-end justify-evenly w-[100%]"
                    compid="167"
                    comptype="Row"
                  >
                    <div
                      className="bg-blue_A700 lg:h-[148px] xl:h-[170px] 2xl:h-[191px] 3xl:h-[229px] rounded-radius5 w-[48%]"
                      compid="4221:3179"
                      comptype="View"
                    ></div>
                    <div
                      className="bg-blue_A101 lg:h-[126px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] rounded-radius5 w-[48%]"
                      compid="4221:3180"
                      comptype="View"
                    ></div>
                  </Row>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-bluegray_900 tracking-ls1 w-[auto]"
                    compid="4221:3181"
                    variant="body5"
                    comptype="Text"
                  >
                    Dec
                  </Text>
                </Column>
              </Row>
              <Column
                className="absolute bg-white_A700 justify-end lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] right-[0] rounded-radius10 shadow-bs1 top-[0] w-[13%]"
                compid="4221:2894"
                comptype="Column"
              >
                <Column
                  className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[56px] xl:mr-[64px] 2xl:mr-[73px] 3xl:mr-[87px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[41%]"
                  compid="185"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="4221:2898"
                    variant="body5"
                    comptype="Text"
                  >
                    Weekly
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:2900"
                    variant="body5"
                    comptype="Text"
                  >
                    Monthly
                  </Text>
                </Column>
                <Text
                  className="bg-blue_100 font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] text-blue_A700 w-[140px]"
                  compid="4221:2895"
                  variant="body5"
                  comptype="Text"
                >
                  Yearly
                </Text>
              </Column>
            </Stack>
            <Row
              className="items-center lg:my-[17px] xl:my-[19px] 2xl:my-[22px] 3xl:my-[26px] w-[19%]"
              compid="4221:3105"
              comptype="Row"
            >
              <div
                className="bg-blue_A700 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] rounded-radius2 w-[10%]"
                compid="4221:3107"
                comptype="View"
              ></div>
              <Text
                className="Group86"
                compid="4221:3108"
                variant="body5"
                comptype="Text"
              >
                Income
              </Text>
              <div
                className="bg-blue_A101 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius2 w-[10%]"
                compid="4221:3110"
                comptype="View"
              ></div>
              <Text
                className="Group86"
                compid="4221:3111"
                variant="body5"
                comptype="Text"
              >
                Spending
              </Text>
            </Row>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default PopupsDashboardPage;
