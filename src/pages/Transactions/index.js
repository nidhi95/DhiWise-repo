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

const TransactionsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row
        className="bg-gray_50 font-spacegrotesk items-center mx-[auto] w-[100%]"
        compid="4214:3723"
        comptype="Row"
      >
        <aside className="items-center w-[21%]">
          <Column className="" compid="39" comptype="Column">
            <Column
              className="bg-white_A700 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
              compid="4214:3811"
              comptype="Column"
            >
              <Text
                className="Frame250"
                compid="4214:3812"
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
                compid="194"
                comptype="Column"
              >
                <Row
                  className="items-center pl-[1px] py-[1px] rounded-radius8 w-[80%]"
                  compid="4214:3816"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_65.png"
                    className="Vector"
                    compid="I4214:3817;275:1558"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame258"
                    compid="4214:3818"
                    variant="body4"
                    comptype="Text"
                  >
                    Dashboard
                  </Text>
                </Row>
                <Row
                  className="items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pl-[1px] py-[1px] rounded-radius8 w-[75%]"
                  compid="4214:3820"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_66.png"
                    className="Vector8"
                    compid="I4214:3821;120:4407"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame2587"
                    compid="4214:3822"
                    variant="body4"
                    comptype="Text"
                  >
                    Payments
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[2px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[99%]"
                  compid="4214:3825"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_67.png"
                    className="Vector225"
                    compid="I4214:3826;120:2335"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4214:3827"
                    variant="body4"
                    comptype="Text"
                  >
                    Wallet & Cards
                  </Text>
                </Row>
              </Column>
              <Row
                className="font-opensans lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[55%]"
                compid="4214:3828"
                comptype="Row"
              >
                <Line
                  className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]"
                  compid="4214:3824"
                  comptype="Line"
                />
                <Img
                  src="images/img_vector_68.png"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] w-[16%]"
                  compid="I4214:3830;120:2254"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] text-blue_A700 w-[auto]"
                  compid="4214:3831"
                  variant="body4"
                  comptype="Text"
                >
                  Transactions
                </Text>
              </Row>
              <Column
                className="font-opensans lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[42%]"
                compid="195"
                comptype="Column"
              >
                <Row
                  className="items-center ml-[0] w-[95%]"
                  compid="4214:3833"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_69.png"
                    className="Vector19"
                    compid="I4214:3834;120:73"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4214:3835"
                    variant="body4"
                    comptype="Text"
                  >
                    Analytics
                  </Text>
                </Row>
                <Row
                  className="items-center lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]"
                  compid="4214:3837"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_70.png"
                    className="Vector22"
                    compid="I4214:3838;120:664"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4214:3839"
                    variant="body4"
                    comptype="Text"
                  >
                    Messages
                  </Text>
                </Row>
                <Row
                  className="items-center lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[88%]"
                  compid="4214:3841"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_71.png"
                    className="Vector25"
                    compid="I4214:3842;120:1890"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4214:3843"
                    variant="body4"
                    comptype="Text"
                  >
                    Settings
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[336px] xl:mt-[385px] 2xl:mt-[433px] 3xl:mt-[519px] w-[63%]"
                  compid="4214:3845"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_72.png"
                    className="Vector22"
                    compid="I4214:3846;120:1784"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4214:3847"
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
          compid="4214:3724"
          comptype="Column"
        >
          <header className="mt-[1px] w-[100%]" compid="41" comptype="Header">
            <Row
              className="items-center w-[100%]"
              compid="4221:2908"
              comptype="Row"
            >
              <Text
                className="text-bluegray_900 w-[auto]"
                compid="4214:3725"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Transactions
              </Text>
              <Stack
                className="bg-white_A700 border border-bluegray_100 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[596px] xl:ml-[682px] 2xl:ml-[767px] 3xl:ml-[920px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4214:3728"
                comptype="Stack"
              >
                <Img
                  src="images/img_vector_73.png"
                  className="Vector35"
                  compid="I4214:3729;120:253"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="absolute bg-red_700 border border-bluegray_50 border-solid flex items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] rounded-radius50 text-white_A700 top-[2%] w-[18px]"
                  compid="4214:3730"
                  variant="body6"
                  comptype="Text"
                >
                  2
                </Text>
              </Stack>
              <Column
                className="border border-blue_A700 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4214:3733"
                comptype="Column"
              >
                <Img
                  src="images/img_profileimglarg_21.png"
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  compid="I4214:3733;139:681"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
              </Column>
            </Row>
          </header>
          <Column
            className="bg-white_A700 items-center lg:mb-[105px] xl:mb-[120px] 2xl:mb-[135px] 3xl:mb-[162px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]"
            compid="4215:4168"
            comptype="Column"
          >
            <Row
              className="items-center w-[100%]"
              compid="4215:4241"
              comptype="Row"
            >
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex w-[41%]"
                compid="I4215:4242;122:21142"
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
                      src="images/img_vector_74.png"
                      className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[27px] lg:mr-[4px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] xl:mr-[5px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 2xl:mr-[6px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[42px] 3xl:mr-[7px] my-[auto]"
                      compid="I4215:4242;122:21142;122:20774;120:5357"
                      comptype="Image"
                      alt="Vector"
                    />
                  )
                }
                shape="srcRoundedBorder6"
              ></Input>
              <Button
                className="font-normal lg:ml-[313px] xl:ml-[358px] 2xl:ml-[403px] 3xl:ml-[483px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[8%]"
                compid="4215:4273"
                comptype="Button"
                shape="RoundedBorder8"
                size="sm"
                variant="OutlineBlueA7001_2"
              >
                Filter
              </Button>
              <Button
                className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[10%]"
                compid="4217:4644"
                comptype="Button"
                shape="RoundedBorder8"
                size="sm"
                variant="OutlineBluegray100"
              >
                Export
              </Button>
            </Row>
            <List
              className="lg:gap-[16px] xl:gap-[18px] 2xl:gap-[21px] 3xl:gap-[25px] grid grid-cols-5 min-h-[auto] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
              compid="4217:4715"
              comptype="List"
              orientation="horizontal"
            >
              <Column className="w-[100%]" compid="4217:4666" comptype="Column">
                <Text
                  className="Group39"
                  compid="I4217:4666;122:21147;122:20717"
                  variant="body5"
                  comptype="Text"
                >
                  Date
                </Text>
                <Text
                  className="bg-white_A700 border border-bluegray_100 border-solid font-normal mt-[4px] not-italic xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius6 text-bluegray_400 w-[189px]"
                  compid="I4217:4666;122:21142"
                  variant="body5"
                  comptype="Text"
                >
                  Selcet Date
                </Text>
              </Column>
              <Column className="w-[100%]" compid="4217:4674" comptype="Column">
                <Text
                  className="Group39"
                  compid="I4217:4674;122:21147;122:20717"
                  variant="body5"
                  comptype="Text"
                >
                  Time
                </Text>
                <Text
                  className="bg-white_A700 border border-bluegray_100 border-solid font-normal mt-[4px] not-italic xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius6 text-bluegray_400 w-[189px]"
                  compid="I4217:4674;122:21142"
                  variant="body5"
                  comptype="Text"
                >
                  Selcet Time
                </Text>
              </Column>
              <Column className="w-[100%]" compid="4217:4682" comptype="Column">
                <Text
                  className="Group39"
                  compid="I4217:4682;122:21147;122:20717"
                  variant="body5"
                  comptype="Text"
                >
                  Payment method
                </Text>
                <Text
                  className="bg-white_A700 border border-bluegray_100 border-solid font-normal mt-[4px] not-italic xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius6 text-bluegray_400 w-[189px]"
                  compid="I4217:4682;122:21142"
                  variant="body5"
                  comptype="Text"
                >
                  All
                </Text>
              </Column>
              <Column className="w-[100%]" compid="4217:4693" comptype="Column">
                <Text
                  className="Group39"
                  compid="I4217:4693;122:21147;122:20717"
                  variant="body5"
                  comptype="Text"
                >
                  Status
                </Text>
                <Text
                  className="bg-white_A700 border border-bluegray_100 border-solid font-normal mt-[4px] not-italic xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius6 text-bluegray_400 w-[189px]"
                  compid="I4217:4693;122:21142"
                  variant="body5"
                  comptype="Text"
                >
                  All
                </Text>
              </Column>
              <Column className="w-[100%]" compid="4217:4702" comptype="Column">
                <Text
                  className="Group39"
                  compid="I4217:4702;122:21147;122:20717"
                  variant="body5"
                  comptype="Text"
                >
                  Amount
                </Text>
                <Text
                  className="bg-white_A700 border border-bluegray_100 border-solid font-normal mt-[4px] not-italic xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius6 text-bluegray_400 w-[189px]"
                  compid="I4217:4702;122:21142"
                  variant="body5"
                  comptype="Text"
                >
                  Select Amount
                </Text>
              </Column>
            </List>
            <List
              className="gap-[0] grid grid-cols-6 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] w-[100%]"
              compid="4215:4174"
              comptype="List"
              orientation="horizontal"
            >
              <Column
                className="items-center mb-[4px] w-[100%]"
                compid="4215:4175"
                comptype="Column"
              >
                <Input
                  className="font-semibold p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                  wrapClassName="w-[100%]"
                  compid="4215:4176"
                  comptype="EditText"
                  name="Head"
                  placeholder="Name"
                  size="md"
                  variant="FillGray50"
                ></Input>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[87%]"
                  compid="196"
                  comptype="Column"
                >
                  <Text
                    className="Group39"
                    compid="4215:4179"
                    variant="body5"
                    comptype="Text"
                  >
                    Ralph Edwards
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4181"
                    variant="body5"
                    comptype="Text"
                  >
                    Floyd Miles
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4183"
                    variant="body5"
                    comptype="Text"
                  >
                    Albert Flores
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4185"
                    variant="body5"
                    comptype="Text"
                  >
                    Darrell Steward
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4352"
                    variant="body5"
                    comptype="Text"
                  >
                    Guy Hawkins
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4366"
                    variant="body5"
                    comptype="Text"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4380"
                    variant="body5"
                    comptype="Text"
                  >
                    Brooklyn Simmons
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4394"
                    variant="body5"
                    comptype="Text"
                  >
                    Leslie Alexander
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4408"
                    variant="body5"
                    comptype="Text"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4422"
                    variant="body5"
                    comptype="Text"
                  >
                    Robert Fox
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4436"
                    variant="body5"
                    comptype="Text"
                  >
                    Guy Hawkins
                  </Text>
                </Column>
              </Column>
              <Line
                className="self-center w-[18%] mb-[4px] items-center"
                compid="4215:4175"
                comptype="Column"
              />
              <Column
                className="items-center mb-[4px] w-[100%]"
                compid="4215:4186"
                comptype="Column"
              >
                <Button
                  className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                  compid="4215:4187"
                  comptype="Button"
                >
                  Date
                </Button>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                  compid="197"
                  comptype="Column"
                >
                  <Text
                    className="Group39"
                    compid="4215:4190"
                    variant="body5"
                    comptype="Text"
                  >
                    12/05/2022
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4192"
                    variant="body5"
                    comptype="Text"
                  >
                    11/05/2022
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4194"
                    variant="body5"
                    comptype="Text"
                  >
                    09/05/2022
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4196"
                    variant="body5"
                    comptype="Text"
                  >
                    06/05/2022
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4354"
                    variant="body5"
                    comptype="Text"
                  >
                    06/05/2022
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4368"
                    variant="body5"
                    comptype="Text"
                  >
                    06/05/2022
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4382"
                    variant="body5"
                    comptype="Text"
                  >
                    06/05/2022
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4396"
                    variant="body5"
                    comptype="Text"
                  >
                    06/05/2022
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4410"
                    variant="body5"
                    comptype="Text"
                  >
                    06/05/2022
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4424"
                    variant="body5"
                    comptype="Text"
                  >
                    06/05/2022
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4438"
                    variant="body5"
                    comptype="Text"
                  >
                    06/05/2022
                  </Text>
                </Column>
              </Column>
              <Line
                className="self-center w-[18%] mb-[4px] items-center"
                compid="4215:4175"
                comptype="Column"
              />
              <Column
                className="items-center mb-[4px] w-[100%]"
                compid="4215:4197"
                comptype="Column"
              >
                <Button
                  className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                  compid="4215:4198"
                  comptype="Button"
                >
                  Time
                </Button>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                  compid="198"
                  comptype="Column"
                >
                  <Text
                    className="Group39"
                    compid="4215:4201"
                    variant="body5"
                    comptype="Text"
                  >
                    10:32:24 AM
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4203"
                    variant="body5"
                    comptype="Text"
                  >
                    12:42:24 AM
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4205"
                    variant="body5"
                    comptype="Text"
                  >
                    04:04:54 PM
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4207"
                    variant="body5"
                    comptype="Text"
                  >
                    10:32:24 AM
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4356"
                    variant="body5"
                    comptype="Text"
                  >
                    10:32:24 AM
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4370"
                    variant="body5"
                    comptype="Text"
                  >
                    10:32:24 AM
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4384"
                    variant="body5"
                    comptype="Text"
                  >
                    10:32:24 AM
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4398"
                    variant="body5"
                    comptype="Text"
                  >
                    10:32:24 AM
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4412"
                    variant="body5"
                    comptype="Text"
                  >
                    10:32:24 AM
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4426"
                    variant="body5"
                    comptype="Text"
                  >
                    10:32:24 AM
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4440"
                    variant="body5"
                    comptype="Text"
                  >
                    10:32:24 AM
                  </Text>
                </Column>
              </Column>
              <Line
                className="self-center w-[18%] mb-[4px] items-center"
                compid="4215:4175"
                comptype="Column"
              />
              <Column
                className="items-center mb-[4px] w-[100%]"
                compid="4215:4208"
                comptype="Column"
              >
                <Button
                  className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                  compid="4215:4209"
                  comptype="Button"
                >
                  Payment method
                </Button>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                  compid="199"
                  comptype="Column"
                >
                  <Text
                    className="Group39"
                    compid="4215:4212"
                    variant="body5"
                    comptype="Text"
                  >
                    Wallet
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4214"
                    variant="body5"
                    comptype="Text"
                  >
                    Card 4223
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4216"
                    variant="body5"
                    comptype="Text"
                  >
                    Card 5433
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4218"
                    variant="body5"
                    comptype="Text"
                  >
                    Wallet
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4358"
                    variant="body5"
                    comptype="Text"
                  >
                    Card 4223
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4372"
                    variant="body5"
                    comptype="Text"
                  >
                    Card 4223
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4386"
                    variant="body5"
                    comptype="Text"
                  >
                    Wallet
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4400"
                    variant="body5"
                    comptype="Text"
                  >
                    Card 4223
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4414"
                    variant="body5"
                    comptype="Text"
                  >
                    Wallet{" "}
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4428"
                    variant="body5"
                    comptype="Text"
                  >
                    Card 4223
                  </Text>
                  <Text
                    className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] Group39"
                    compid="4215:4442"
                    variant="body5"
                    comptype="Text"
                  >
                    Card 4223
                  </Text>
                </Column>
              </Column>
              <Line
                className="self-center w-[18%] mb-[4px] items-center"
                compid="4215:4175"
                comptype="Column"
              />
              <Column className="w-[100%]" compid="4215:4219" comptype="Column">
                <Button
                  className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                  compid="4215:4220"
                  comptype="Button"
                >
                  Status
                </Button>
                <Column
                  className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[52%]"
                  compid="200"
                  comptype="Column"
                >
                  <Text
                    className="bg-gray_100 text-green_600 w-[88px] Group128"
                    compid="4215:4223"
                    variant="body5"
                    comptype="Text"
                  >
                    Completed
                  </Text>
                  <Text
                    className="bg-gray_52 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-amber_700 w-[70px] Group128"
                    compid="4215:4225"
                    variant="body5"
                    comptype="Text"
                  >
                    Pending
                  </Text>
                  <Text
                    className="bg-gray_100 lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-green_600 w-[88px] Group128"
                    compid="4215:4227"
                    variant="body5"
                    comptype="Text"
                  >
                    Completed
                  </Text>
                  <Text
                    className="bg-gray_101 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-red_700 w-[55px] Group128"
                    compid="4215:4229"
                    variant="body5"
                    comptype="Text"
                  >
                    Failed
                  </Text>
                  <Text
                    className="bg-gray_52 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-amber_700 w-[70px] Group128"
                    compid="4215:4461"
                    variant="body5"
                    comptype="Text"
                  >
                    Pending
                  </Text>
                  <Text
                    className="bg-gray_100 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-green_600 w-[88px] Group128"
                    compid="4215:4449"
                    variant="body5"
                    comptype="Text"
                  >
                    Completed
                  </Text>
                  <Text
                    className="bg-gray_101 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-red_700 w-[55px] Group128"
                    compid="4215:4388"
                    variant="body5"
                    comptype="Text"
                  >
                    Failed
                  </Text>
                  <Text
                    className="bg-gray_100 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-green_600 w-[88px] Group128"
                    compid="4215:4452"
                    variant="body5"
                    comptype="Text"
                  >
                    Completed
                  </Text>
                  <Text
                    className="bg-gray_52 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-amber_700 w-[70px] Group128"
                    compid="4215:4464"
                    variant="body5"
                    comptype="Text"
                  >
                    Pending
                  </Text>
                  <Text
                    className="bg-gray_100 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-green_600 w-[88px] Group128"
                    compid="4215:4455"
                    variant="body5"
                    comptype="Text"
                  >
                    Completed
                  </Text>
                  <Text
                    className="bg-gray_100 lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-green_600 w-[88px] Group128"
                    compid="4215:4458"
                    variant="body5"
                    comptype="Text"
                  >
                    Completed
                  </Text>
                </Column>
              </Column>
              <Line
                className="self-center w-[18%] mb-[4px] items-center"
                compid="4215:4175"
                comptype="Column"
              />
              <Column
                className="items-center mb-[4px] w-[100%]"
                compid="4215:4230"
                comptype="Column"
              >
                <Button
                  className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
                  compid="4215:4231"
                  comptype="Button"
                >
                  Amount
                </Button>
                <Column
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[86%]"
                  compid="201"
                  comptype="Column"
                >
                  <Text
                    className="font-normal not-italic text-green_600 w-[auto]"
                    compid="4215:4234"
                    variant="body5"
                    comptype="Text"
                  >
                    + $28.00
                  </Text>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-red_700 w-[auto]"
                    compid="4215:4236"
                    variant="body5"
                    comptype="Text"
                  >
                    - $85.00
                  </Text>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                    compid="4215:4238"
                    variant="body5"
                    comptype="Text"
                  >
                    + $98.00
                  </Text>
                  <Text
                    className="font-normal line-through lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-bluegray_400 w-[auto]"
                    compid="4215:4240"
                    variant="body5"
                    comptype="Text"
                  >
                    - $12.00
                  </Text>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-red_700 w-[auto]"
                    compid="4215:4472"
                    variant="body5"
                    comptype="Text"
                  >
                    - $85.00
                  </Text>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                    compid="4215:4469"
                    variant="body5"
                    comptype="Text"
                  >
                    + $98.00
                  </Text>
                  <Text
                    className="font-normal line-through lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-bluegray_400 w-[auto]"
                    compid="4215:4390"
                    variant="body5"
                    comptype="Text"
                  >
                    - $12.00
                  </Text>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                    compid="4215:4470"
                    variant="body5"
                    comptype="Text"
                  >
                    + $98.00
                  </Text>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-red_700 w-[auto]"
                    compid="4215:4473"
                    variant="body5"
                    comptype="Text"
                  >
                    - $85.00
                  </Text>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                    compid="4215:4468"
                    variant="body5"
                    comptype="Text"
                  >
                    + $98.00
                  </Text>
                  <Text
                    className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_600 w-[auto]"
                    compid="4215:4471"
                    variant="body5"
                    comptype="Text"
                  >
                    + $98.00
                  </Text>
                </Column>
              </Column>
            </List>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default TransactionsPage;
