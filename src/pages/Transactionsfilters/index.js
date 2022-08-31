import React from "react";

import {
  Row,
  Column,
  Text,
  Img,
  Line,
  Stack,
  Input,
  Button,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const TransactionsfiltersPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row
        className="bg-gray_50 font-spacegrotesk items-center mx-[auto] w-[100%]"
        compid="4221:3280"
        comptype="Row"
      >
        <aside className="items-center w-[21%]">
          <Column className="" compid="42" comptype="Column">
            <Column
              className="bg-white_A700 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
              compid="4221:3463"
              comptype="Column"
            >
              <Text
                className="Frame250"
                compid="4221:3464"
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
              <Column
                className="font-opensans lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[58%]"
                compid="203"
                comptype="Column"
              >
                <Row
                  className="items-center pl-[1px] py-[1px] rounded-radius8 w-[80%]"
                  compid="4221:3468"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_75.png"
                    className="Vector"
                    compid="I4221:3469;275:1558"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame258"
                    compid="4221:3470"
                    variant="body4"
                    comptype="Text"
                  >
                    Dashboard
                  </Text>
                </Row>
                <Row
                  className="items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pl-[1px] py-[1px] rounded-radius8 w-[75%]"
                  compid="4221:3472"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_76.png"
                    className="Vector8"
                    compid="I4221:3473;120:4407"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame2587"
                    compid="4221:3474"
                    variant="body4"
                    comptype="Text"
                  >
                    Payments
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[2px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[99%]"
                  compid="4221:3476"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_77.png"
                    className="Vector225"
                    compid="I4221:3477;120:2335"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4221:3478"
                    variant="body4"
                    comptype="Text"
                  >
                    Wallet & Cards
                  </Text>
                </Row>
              </Column>
              <Row
                className="font-opensans lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[55%]"
                compid="4221:3479"
                comptype="Row"
              >
                <Line
                  className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]"
                  compid="4221:3480"
                  comptype="Line"
                />
                <Img
                  src="images/img_vector_78.png"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[16%]"
                  compid="I4221:3482;120:2254"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] text-blue_A700 w-[auto]"
                  compid="4221:3483"
                  variant="body4"
                  comptype="Text"
                >
                  Transactions
                </Text>
              </Row>
              <Column
                className="font-opensans lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[42%]"
                compid="204"
                comptype="Column"
              >
                <Row
                  className="items-center ml-[0] w-[95%]"
                  compid="4221:3485"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_79.png"
                    className="Vector19"
                    compid="I4221:3486;120:73"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4221:3487"
                    variant="body4"
                    comptype="Text"
                  >
                    Analytics
                  </Text>
                </Row>
                <Row
                  className="items-center lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]"
                  compid="4221:3489"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_80.png"
                    className="Vector22"
                    compid="I4221:3490;120:664"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4221:3491"
                    variant="body4"
                    comptype="Text"
                  >
                    Messages
                  </Text>
                </Row>
                <Row
                  className="items-center lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[88%]"
                  compid="4221:3493"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_81.png"
                    className="Vector25"
                    compid="I4221:3494;120:1890"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4221:3495"
                    variant="body4"
                    comptype="Text"
                  >
                    Settings
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[336px] xl:mt-[385px] 2xl:mt-[433px] 3xl:mt-[519px] w-[63%]"
                  compid="4221:3497"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_82.png"
                    className="Vector22"
                    compid="I4221:3498;120:1784"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4221:3499"
                    variant="body4"
                    comptype="Text"
                  >
                    Help
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
        </aside>
        <Column
          className="bg-gray_50 font-opensans items-center lg:p-[24px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[79%]"
          compid="4221:3281"
          comptype="Column"
        >
          <header className="mt-[1px] w-[100%]" compid="44" comptype="Header">
            <Row
              className="items-center w-[100%]"
              compid="4221:3282"
              comptype="Row"
            >
              <Text
                className="text-bluegray_900 w-[auto]"
                compid="4221:3283"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Transactions
              </Text>
              <Stack
                className="bg-white_A700 border border-bluegray_100 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[596px] xl:ml-[682px] 2xl:ml-[767px] 3xl:ml-[920px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4221:3286"
                comptype="Stack"
              >
                <Img
                  src="images/img_vector_83.png"
                  className="Vector35"
                  compid="I4221:3287;120:253"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="absolute bg-red_700 border border-bluegray_50 border-solid flex items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] rounded-radius50 text-white_A700 top-[2%] w-[18px]"
                  compid="4221:3288"
                  variant="body6"
                  comptype="Text"
                >
                  2
                </Text>
              </Stack>
              <Column
                className="border border-blue_A700 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4221:3291"
                comptype="Column"
              >
                <Img
                  src="images/img_profileimglarg_22.png"
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  compid="I4221:3291;139:681"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
              </Column>
            </Row>
          </header>
          <Column
            className="bg-white_A700 items-center lg:mb-[105px] xl:mb-[120px] 2xl:mb-[135px] 3xl:mb-[162px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]"
            compid="4221:3293"
            comptype="Column"
          >
            <Row
              className="items-center w-[100%]"
              compid="4221:3453"
              comptype="Row"
            >
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex w-[41%]"
                compid="I4221:3454;122:21142"
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
                      src="images/img_vector_84.png"
                      className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[27px] lg:mr-[4px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] xl:mr-[5px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 2xl:mr-[6px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[42px] 3xl:mr-[7px] my-[auto]"
                      compid="I4221:3454;122:21142;122:20774;120:5357"
                      comptype="Image"
                      alt="Vector"
                    />
                  )
                }
                shape="srcRoundedBorder6"
              ></Input>
              <Button
                className="font-normal lg:ml-[313px] xl:ml-[358px] 2xl:ml-[403px] 3xl:ml-[483px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[8%]"
                compid="4221:3455"
                comptype="Button"
                shape="RoundedBorder8"
                size="sm"
                variant="OutlineBlueA7001_2"
              >
                Filter
              </Button>
              <Button
                className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[10%]"
                compid="4221:3459"
                comptype="Button"
                shape="RoundedBorder8"
                size="sm"
                variant="OutlineBluegray100"
              >
                Export
              </Button>
            </Row>
            <List
              className="lg:gap-[16px] xl:gap-[18px] 2xl:gap-[21px] 3xl:gap-[25px] grid grid-cols-4 min-h-[auto] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
              compid="4221:3295"
              comptype="List"
              orientation="horizontal"
            >
              <Column className="w-[100%]" compid="4221:3296" comptype="Column">
                <Text
                  className="Group39"
                  compid="I4221:3296;122:21147;122:20717"
                  variant="body5"
                  comptype="Text"
                >
                  Date
                </Text>
                <Text
                  className="bg-white_A700 border border-bluegray_100 border-solid font-normal mt-[4px] not-italic xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius6 text-bluegray_400 w-[241px]"
                  compid="I4221:3296;122:21142"
                  variant="body5"
                  comptype="Text"
                >
                  Select Date
                </Text>
              </Column>
              <Column className="w-[100%]" compid="4221:3298" comptype="Column">
                <Text
                  className="Group39"
                  compid="I4221:3298;122:21147;122:20717"
                  variant="body5"
                  comptype="Text"
                >
                  Payment method
                </Text>
                <Text
                  className="bg-white_A700 border border-bluegray_100 border-solid font-normal mt-[4px] not-italic xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius6 text-bluegray_400 w-[241px]"
                  compid="I4221:3298;122:21142"
                  variant="body5"
                  comptype="Text"
                >
                  All
                </Text>
              </Column>
              <Column className="w-[100%]" compid="4221:3299" comptype="Column">
                <Text
                  className="Group39"
                  compid="I4221:3299;122:21147;122:20717"
                  variant="body5"
                  comptype="Text"
                >
                  Status
                </Text>
                <Text
                  className="bg-white_A700 border border-bluegray_100 border-solid font-normal mt-[4px] not-italic xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius6 text-bluegray_400 w-[241px]"
                  compid="I4221:3299;122:21142"
                  variant="body5"
                  comptype="Text"
                >
                  All
                </Text>
              </Column>
              <Column className="w-[100%]" compid="4221:3300" comptype="Column">
                <Text
                  className="Group39"
                  compid="I4221:3300;122:21147;122:20717"
                  variant="body5"
                  comptype="Text"
                >
                  Amount
                </Text>
                <Text
                  className="bg-white_A700 border border-bluegray_100 border-solid font-normal mt-[4px] not-italic xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius6 text-bluegray_400 w-[241px]"
                  compid="I4221:3300;122:21142"
                  variant="body5"
                  comptype="Text"
                >
                  Select Amount
                </Text>
              </Column>
            </List>
            <Stack
              className="lg:h-[442px] xl:h-[506px] 2xl:h-[569px] 3xl:h-[682px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
              compid="202"
              comptype="Stack"
            >
              <List
                className="absolute gap-[0] grid grid-cols-6 min-h-[auto] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] top-[3%] w-[100%]"
                compid="4221:3301"
                comptype="List"
                orientation="horizontal"
              >
                <Column
                  className="items-center mb-[4px] w-[100%]"
                  compid="4221:3302"
                  comptype="Column"
                >
                  <Column
                    className="bg-gray_50 xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                    compid="4221:3303"
                    comptype="Column"
                  >
                    <Text
                      className="font-semibold text-bluegray_600 w-[auto]"
                      compid="4221:3305"
                      variant="body5"
                      comptype="Text"
                    >
                      Name
                    </Text>
                  </Column>
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[87%]"
                    compid="205"
                    comptype="Column"
                  >
                    <Text
                      className="Group39"
                      compid="4221:3307"
                      variant="body5"
                      comptype="Text"
                    >
                      Ralph Edwards
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3309"
                      variant="body5"
                      comptype="Text"
                    >
                      Floyd Miles
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3311"
                      variant="body5"
                      comptype="Text"
                    >
                      Albert Flores
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3313"
                      variant="body5"
                      comptype="Text"
                    >
                      Darrell Steward
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3315"
                      variant="body5"
                      comptype="Text"
                    >
                      Guy Hawkins
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3317"
                      variant="body5"
                      comptype="Text"
                    >
                      Jenny Wilson
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3319"
                      variant="body5"
                      comptype="Text"
                    >
                      Brooklyn Simmons
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3321"
                      variant="body5"
                      comptype="Text"
                    >
                      Leslie Alexander
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3323"
                      variant="body5"
                      comptype="Text"
                    >
                      Jenny Wilson
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3325"
                      variant="body5"
                      comptype="Text"
                    >
                      Robert Fox
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3327"
                      variant="body5"
                      comptype="Text"
                    >
                      Guy Hawkins
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center mb-[4px] w-[100%]"
                  compid="4221:3328"
                  comptype="Column"
                >
                  <Column
                    className="bg-gray_50 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                    compid="4221:3329"
                    comptype="Column"
                  >
                    <Text
                      className="font-semibold text-bluegray_600 w-[auto]"
                      compid="4221:3330"
                      variant="body5"
                      comptype="Text"
                    >
                      Date
                    </Text>
                  </Column>
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                    compid="206"
                    comptype="Column"
                  >
                    <Text
                      className="Group39"
                      compid="4221:3332"
                      variant="body5"
                      comptype="Text"
                    >
                      12/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3334"
                      variant="body5"
                      comptype="Text"
                    >
                      11/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3336"
                      variant="body5"
                      comptype="Text"
                    >
                      09/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3338"
                      variant="body5"
                      comptype="Text"
                    >
                      06/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3340"
                      variant="body5"
                      comptype="Text"
                    >
                      06/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3342"
                      variant="body5"
                      comptype="Text"
                    >
                      06/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3344"
                      variant="body5"
                      comptype="Text"
                    >
                      06/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3346"
                      variant="body5"
                      comptype="Text"
                    >
                      06/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3348"
                      variant="body5"
                      comptype="Text"
                    >
                      06/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3350"
                      variant="body5"
                      comptype="Text"
                    >
                      06/05/2022
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3352"
                      variant="body5"
                      comptype="Text"
                    >
                      06/05/2022
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center mb-[4px] w-[100%]"
                  compid="4221:3353"
                  comptype="Column"
                >
                  <Button
                    className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                    compid="4221:3354"
                    comptype="Button"
                  >
                    Time
                  </Button>
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                    compid="207"
                    comptype="Column"
                  >
                    <Text
                      className="Group39"
                      compid="4221:3357"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3359"
                      variant="body5"
                      comptype="Text"
                    >
                      12:42:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3361"
                      variant="body5"
                      comptype="Text"
                    >
                      04:04:54 PM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3363"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3365"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3367"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3369"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3371"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3373"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3375"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3377"
                      variant="body5"
                      comptype="Text"
                    >
                      10:32:24 AM
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center mb-[4px] w-[100%]"
                  compid="4221:3378"
                  comptype="Column"
                >
                  <Column
                    className="bg-gray_50 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                    compid="4221:3379"
                    comptype="Column"
                  >
                    <Text
                      className="font-semibold text-bluegray_600 w-[auto]"
                      compid="4221:3380"
                      variant="body5"
                      comptype="Text"
                    >
                      Payment method
                    </Text>
                  </Column>
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                    compid="208"
                    comptype="Column"
                  >
                    <Text
                      className="Group39"
                      compid="4221:3382"
                      variant="body5"
                      comptype="Text"
                    >
                      Wallet
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3384"
                      variant="body5"
                      comptype="Text"
                    >
                      Card 4223
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3386"
                      variant="body5"
                      comptype="Text"
                    >
                      Card 5433
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3388"
                      variant="body5"
                      comptype="Text"
                    >
                      Wallet
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3390"
                      variant="body5"
                      comptype="Text"
                    >
                      Card 4223
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3392"
                      variant="body5"
                      comptype="Text"
                    >
                      Card 4223
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3394"
                      variant="body5"
                      comptype="Text"
                    >
                      Wallet
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3396"
                      variant="body5"
                      comptype="Text"
                    >
                      Card 4223
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3398"
                      variant="body5"
                      comptype="Text"
                    >
                      Wallet{" "}
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3400"
                      variant="body5"
                      comptype="Text"
                    >
                      Card 4223
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                      compid="4221:3402"
                      variant="body5"
                      comptype="Text"
                    >
                      Card 4223
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="w-[100%]"
                  compid="4221:3403"
                  comptype="Column"
                >
                  <Column
                    className="bg-gray_50 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                    compid="4221:3404"
                    comptype="Column"
                  >
                    <Text
                      className="font-semibold text-bluegray_600 w-[auto]"
                      compid="4221:3405"
                      variant="body5"
                      comptype="Text"
                    >
                      Status
                    </Text>
                  </Column>
                  <Column
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[52%]"
                    compid="209"
                    comptype="Column"
                  >
                    <Text
                      className="bg-gray_100 text-green_600 w-[88px] Group128"
                      compid="4221:3407"
                      variant="body5"
                      comptype="Text"
                    >
                      Completed
                    </Text>
                    <Text
                      className="bg-gray_52 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-amber_700 w-[70px] Group128"
                      compid="4221:3409"
                      variant="body5"
                      comptype="Text"
                    >
                      Pending
                    </Text>
                    <Text
                      className="bg-gray_100 lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-green_600 w-[88px] Group128"
                      compid="4221:3411"
                      variant="body5"
                      comptype="Text"
                    >
                      Completed
                    </Text>
                    <Text
                      className="bg-gray_101 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-red_700 w-[55px] Group128"
                      compid="4221:3413"
                      variant="body5"
                      comptype="Text"
                    >
                      Failed
                    </Text>
                    <Text
                      className="bg-gray_52 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-amber_700 w-[70px] Group128"
                      compid="4221:3415"
                      variant="body5"
                      comptype="Text"
                    >
                      Pending
                    </Text>
                    <Text
                      className="bg-gray_100 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-green_600 w-[88px] Group128"
                      compid="4221:3417"
                      variant="body5"
                      comptype="Text"
                    >
                      Completed
                    </Text>
                    <Text
                      className="bg-gray_101 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-red_700 w-[55px] Group128"
                      compid="4221:3419"
                      variant="body5"
                      comptype="Text"
                    >
                      Failed
                    </Text>
                    <Text
                      className="bg-gray_100 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-green_600 w-[88px] Group128"
                      compid="4221:3421"
                      variant="body5"
                      comptype="Text"
                    >
                      Completed
                    </Text>
                    <Text
                      className="bg-gray_52 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-amber_700 w-[70px] Group128"
                      compid="4221:3423"
                      variant="body5"
                      comptype="Text"
                    >
                      Pending
                    </Text>
                    <Text
                      className="bg-gray_100 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-green_600 w-[88px] Group128"
                      compid="4221:3425"
                      variant="body5"
                      comptype="Text"
                    >
                      Completed
                    </Text>
                    <Text
                      className="bg-gray_100 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-green_600 w-[88px] Group128"
                      compid="4221:3427"
                      variant="body5"
                      comptype="Text"
                    >
                      Completed
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="items-center mb-[4px] w-[100%]"
                  compid="4221:3428"
                  comptype="Column"
                >
                  <Column
                    className="bg-gray_50 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
                    compid="4221:3429"
                    comptype="Column"
                  >
                    <Text
                      className="font-semibold text-bluegray_600 w-[auto]"
                      compid="4221:3430"
                      variant="body5"
                      comptype="Text"
                    >
                      Amount
                    </Text>
                  </Column>
                  <Column
                    className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                    compid="210"
                    comptype="Column"
                  >
                    <Text
                      className="font-normal not-italic text-green_600 w-[auto]"
                      compid="4221:3432"
                      variant="body5"
                      comptype="Text"
                    >
                      + $28.00
                    </Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-red_700 w-[auto]"
                      compid="4221:3434"
                      variant="body5"
                      comptype="Text"
                    >
                      - $85.00
                    </Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                      compid="4221:3436"
                      variant="body5"
                      comptype="Text"
                    >
                      + $98.00
                    </Text>
                    <Text
                      className="font-normal line-through lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-bluegray_400 w-[auto]"
                      compid="4221:3438"
                      variant="body5"
                      comptype="Text"
                    >
                      - $12.00
                    </Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-red_700 w-[auto]"
                      compid="4221:3440"
                      variant="body5"
                      comptype="Text"
                    >
                      - $85.00
                    </Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                      compid="4221:3442"
                      variant="body5"
                      comptype="Text"
                    >
                      + $98.00
                    </Text>
                    <Text
                      className="font-normal line-through lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-bluegray_400 w-[auto]"
                      compid="4221:3444"
                      variant="body5"
                      comptype="Text"
                    >
                      - $12.00
                    </Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                      compid="4221:3446"
                      variant="body5"
                      comptype="Text"
                    >
                      + $98.00
                    </Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-red_700 w-[auto]"
                      compid="4221:3448"
                      variant="body5"
                      comptype="Text"
                    >
                      - $85.00
                    </Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                      compid="4221:3450"
                      variant="body5"
                      comptype="Text"
                    >
                      + $98.00
                    </Text>
                    <Text
                      className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                      compid="4221:3452"
                      variant="body5"
                      comptype="Text"
                    >
                      + $98.00
                    </Text>
                  </Column>
                </Column>
              </List>
              <Column
                className="absolute bg-white_A700 left-[0] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] rounded-radius10 shadow-bs top-[0] w-[23%]"
                compid="4221:3584"
                comptype="Column"
              >
                <Text
                  className="bg-blue_100 font-semibold 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] text-blue_A700 w-[242px]"
                  compid="4221:3585"
                  variant="body5"
                  comptype="Text"
                >
                  Last Week
                </Text>
                <Column
                  className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[39%]"
                  compid="211"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="4221:3588"
                    variant="body5"
                    comptype="Text"
                  >
                    Last Month
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:3592"
                    variant="body5"
                    comptype="Text"
                  >
                    Last 3 Months
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:3596"
                    variant="body5"
                    comptype="Text"
                  >
                    Last Year
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:3598"
                    variant="body5"
                    comptype="Text"
                  >
                    Custom
                  </Text>
                </Column>
              </Column>
              <Column
                className="absolute bg-white_A700 left-[26%] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] rounded-radius10 shadow-bs top-[0] w-[23%]"
                compid="4221:3632"
                comptype="Column"
              >
                <Text
                  className="bg-blue_100 font-semibold 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] text-blue_A700 w-[241px]"
                  compid="4221:3633"
                  variant="body5"
                  comptype="Text"
                >
                  All
                </Text>
                <Column
                  className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[18%]"
                  compid="212"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="4221:3636"
                    variant="body5"
                    comptype="Text"
                  >
                    Wallet
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:3638"
                    variant="body5"
                    comptype="Text"
                  >
                    Card
                  </Text>
                </Column>
              </Column>
              <Column
                className="absolute bg-white_A700 lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] right-[26%] rounded-radius10 shadow-bs top-[0] w-[23%]"
                compid="4221:3650"
                comptype="Column"
              >
                <Text
                  className="bg-blue_100 font-semibold 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] text-blue_A700 w-[242px]"
                  compid="4221:3651"
                  variant="body5"
                  comptype="Text"
                >
                  All
                </Text>
                <Column
                  className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[31%]"
                  compid="213"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="4221:3654"
                    variant="body5"
                    comptype="Text"
                  >
                    Completed
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:3656"
                    variant="body5"
                    comptype="Text"
                  >
                    Pending
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                    compid="4221:3658"
                    variant="body5"
                    comptype="Text"
                  >
                    Failed
                  </Text>
                </Column>
              </Column>
              <Column
                className="absolute bg-white_A700 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] right-[0] rounded-radius10 shadow-bs top-[0] w-[23%]"
                compid="4222:3668"
                comptype="Column"
              >
                <Text
                  className="bg-white_A700 border border-bluegray_100 border-solid font-gilroy font-medium xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius6 text-bluegray_200 w-[200px]"
                  compid="I4224:3002;122:21142"
                  variant="body5"
                  comptype="Text"
                >
                  Enter Amount
                </Text>
                <Text
                  className="font-opensans font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-bluegray_900 w-[auto]"
                  compid="4222:3672"
                  variant="body5"
                  comptype="Text"
                >
                  TO
                </Text>
                <Input
                  className="font-gilroy font-medium p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                  wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[93%] xl:mt-[5px]"
                  compid="I4224:3009;122:21142"
                  comptype="EditText"
                  name="InputField"
                  placeholder="Enter Amount"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineBluegray100"
                ></Input>
                <Button
                  className="font-gilroy font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[95%]"
                  compid="4224:3026"
                  comptype="Button"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillBlueA700"
                >
                  Apply{" "}
                </Button>
              </Column>
            </Stack>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default TransactionsfiltersPage;
