import React from "react";

import {
  Row,
  Column,
  Text,
  Img,
  Line,
  Stack,
  Button,
  Input,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const RequestPaymentsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row
        className="bg-gray_50 font-spacegrotesk items-center mx-[auto] w-[100%]"
        compid="4202:3227"
        comptype="Row"
      >
        <aside className="items-center w-[21%]">
          <Column className="" compid="36" comptype="Column">
            <Column
              className="bg-white_A700 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
              compid="4202:3260"
              comptype="Column"
            >
              <Text
                className="Frame250"
                compid="4202:3261"
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
                className="font-opensans items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] pl-[1px] py-[1px] rounded-radius8 w-[46%]"
                compid="4202:3265"
                comptype="Row"
              >
                <Img
                  src="images/img_vector_55.png"
                  className="Vector"
                  compid="I4202:3266;275:1558"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="Frame258"
                  compid="4202:3267"
                  variant="body4"
                  comptype="Text"
                >
                  Dashboard
                </Text>
              </Row>
              <Row
                className="font-opensans items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius8 w-[46%]"
                compid="4202:3268"
                comptype="Row"
              >
                <Line
                  className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]"
                  compid="4202:3269"
                  comptype="Line"
                />
                <Img
                  src="images/img_vector_56.png"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[10%]"
                  compid="I4202:3271;120:4407"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] text-blue_A700 w-[auto]"
                  compid="4202:3272"
                  variant="body4"
                  comptype="Text"
                >
                  Payments
                </Text>
              </Row>
              <Column
                className="font-opensans lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[58%]"
                compid="191"
                comptype="Column"
              >
                <Row
                  className="items-center ml-[1px] w-[99%]"
                  compid="4202:3274"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_57.png"
                    className="Vector225"
                    compid="I4202:3275;120:2335"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3276"
                    variant="body4"
                    comptype="Text"
                  >
                    Wallet & Cards
                  </Text>
                </Row>
                <Row
                  className="lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[90%]"
                  compid="4202:3278"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_58.png"
                    className="Vector16"
                    compid="I4202:3279;120:2254"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame261"
                    compid="4202:3280"
                    variant="body4"
                    comptype="Text"
                  >
                    Transactions
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[69%]"
                  compid="4202:3282"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_59.png"
                    className="Vector19"
                    compid="I4202:3283;120:73"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3284"
                    variant="body4"
                    comptype="Text"
                  >
                    Analytics
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[72%]"
                  compid="4202:3286"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_60.png"
                    className="Vector22"
                    compid="I4202:3287;120:664"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3288"
                    variant="body4"
                    comptype="Text"
                  >
                    Messages
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[63%]"
                  compid="4202:3290"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_61.png"
                    className="Vector25"
                    compid="I4202:3291;120:1890"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3292"
                    variant="body4"
                    comptype="Text"
                  >
                    Settings
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[1px] lg:mt-[336px] xl:mt-[385px] 2xl:mt-[433px] 3xl:mt-[519px] w-[46%]"
                  compid="4202:3294"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_62.png"
                    className="Vector22"
                    compid="I4202:3295;120:1784"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3296"
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
          compid="4202:3228"
          comptype="Column"
        >
          <header className="mt-[1px] w-[100%]" compid="38" comptype="Header">
            <Row
              className="items-center w-[100%]"
              compid="4221:2910"
              comptype="Row"
            >
              <Text
                className="text-bluegray_900 w-[auto]"
                compid="4202:3229"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Payments
              </Text>
              <Stack
                className="bg-white_A700 border border-bluegray_100 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[628px] xl:ml-[718px] 2xl:ml-[808px] 3xl:ml-[970px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4202:3232"
                comptype="Stack"
              >
                <Img
                  src="images/img_vector_63.png"
                  className="Vector35"
                  compid="I4202:3233;120:253"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="absolute bg-red_700 border border-bluegray_50 border-solid flex items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] rounded-radius50 text-white_A700 top-[2%] w-[18px]"
                  compid="4202:3234"
                  variant="body6"
                  comptype="Text"
                >
                  2
                </Text>
              </Stack>
              <Column
                className="border border-blue_A700 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4202:3237"
                comptype="Column"
              >
                <Img
                  src="images/img_profileimglarg_14.png"
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  compid="I4202:3237;139:681"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
              </Column>
            </Row>
          </header>
          <Row
            className="items-center justify-center lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[30%]"
            compid="4202:3238"
            comptype="Row"
          >
            <Button
              className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[23%]"
              compid="4202:3239"
              comptype="Button"
              shape="RoundedBorder8"
              variant="FillWhiteA700"
            >
              Send
            </Button>
            <Button
              className="font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[30%]"
              compid="4202:3241"
              comptype="Button"
              shape="RoundedBorder8"
              variant="FillWhiteA700"
            >
              Request
            </Button>
            <Button
              className="font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[32%]"
              compid="4202:3243"
              comptype="Button"
              shape="RoundedBorder8"
              variant="FillBlueA700"
            >
              Contacts
            </Button>
          </Row>
          <Column
            className="bg-white_A700 lg:mb-[112px] xl:mb-[128px] 2xl:mb-[145px] 3xl:mb-[174px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius12 shadow-bs2 w-[45%]"
            compid="4202:3245"
            comptype="Column"
          >
            <Text
              className="text-bluegray_900 w-[auto]"
              compid="4202:3246"
              variant="body3"
              comptype="Text"
            >
              Contacts
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-semibold p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
              wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] flex lg:mt-[18px] w-[100%] xl:mt-[21px]"
              compid="I4202:3247;122:21290"
              comptype="SearchView"
              name="InputField"
              placeholder="Search Contacts"
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer mr-[2px] lg:w-[12px] lg:h-[13px] lg:ml-[27px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[42px] my-[auto]"
                    onClick={() => setInputvalue("")}
                    color="#9ea8ba"
                  />
                ) : (
                  <Img
                    src="images/img_vector_64.png"
                    className="cursor-pointer mr-[2px] lg:w-[12px] lg:h-[13px] lg:ml-[27px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[20px] 3xl:h-[21px] 3xl:ml-[42px] my-[auto]"
                    compid="I4202:3247;122:21290;122:20837;120:5357"
                    comptype="Image"
                    alt="Vector"
                  />
                )
              }
              shape="srcRoundedBorder6"
              size="mdSrc"
              variant="srcOutlineBluegray200"
            ></Input>
            <Row
              className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="4202:3364"
              comptype="Row"
            >
              <Img
                src="images/img_profileimglarg_15.png"
                className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="I4202:3354;139:669"
                comptype="CircleImage"
                alt="ProfileImgLarg"
              />
              <Column
                className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[58%]"
                compid="4202:3358"
                comptype="Column"
              >
                <Text
                  className="font-semibold text-bluegray_700 w-[auto]"
                  compid="4202:3355"
                  variant="body5"
                  comptype="Text"
                >
                  Bessie Cooper
                </Text>
                <Text
                  className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-blue_A200 w-[auto]"
                  compid="4202:3357"
                  variant="body5"
                  comptype="Text"
                >
                  @bessiecooper
                </Text>
              </Column>
              <List
                className="lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-2 min-h-[auto] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[25%]"
                compid="193"
                comptype="List"
                orientation="horizontal"
              >
                <Stack
                  className="bg-blue_A700 lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius6 w-[100%]"
                  compid="4202:3377"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_24.png"
                    className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] w-[44%]"
                    compid="I4202:3378;4060:1525"
                    comptype="Image"
                    alt="24"
                  />
                </Stack>
                <Stack
                  className="bg-blue_A700 lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius6 w-[100%]"
                  compid="4202:3380"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_25.png"
                    className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] w-[44%]"
                    compid="I4202:3381;4060:1520"
                    comptype="Image"
                    alt="25"
                  />
                </Stack>
              </List>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[37%]"
              compid="192"
              comptype="List"
              orientation="vertical"
            >
              <Row
                className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]"
                compid="4202:3392"
                comptype="Row"
              >
                <Img
                  src="images/img_profileimglarg_16.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  compid="I4202:3419;139:669"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
                <Column
                  className="items-center w-[60%]"
                  compid="4202:3394"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-bluegray_700 w-[auto]"
                    compid="4202:3395"
                    variant="body5"
                    comptype="Text"
                  >
                    Annette Black
                  </Text>
                  <Text
                    className="font-normal lowercase lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-blue_A200 w-[auto]"
                    compid="4202:3396"
                    variant="body5"
                    comptype="Text"
                  >
                    @AnnetteBlack
                  </Text>
                </Column>
              </Row>
              <Row
                className="items-center lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[90%]"
                compid="4202:3399"
                comptype="Row"
              >
                <Img
                  src="images/img_profileimglarg_17.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  compid="I4202:3421;139:669"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
                <Column
                  className="items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[56%]"
                  compid="4202:3401"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-bluegray_700 w-[auto]"
                    compid="4202:3402"
                    variant="body5"
                    comptype="Text"
                  >
                    Devon Lane
                  </Text>
                  <Text
                    className="font-normal lowercase lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-blue_A200 w-[auto]"
                    compid="4202:3403"
                    variant="body5"
                    comptype="Text"
                  >
                    @DevonLane
                  </Text>
                </Column>
              </Row>
              <Row
                className="items-center lg:mr-[13px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[90%]"
                compid="4202:3406"
                comptype="Row"
              >
                <Img
                  src="images/img_profileimglarg_18.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  compid="I4202:3423;139:669"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
                <Column
                  className="items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[56%]"
                  compid="4202:3408"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-bluegray_700 w-[auto]"
                    compid="4202:3409"
                    variant="body5"
                    comptype="Text"
                  >
                    Cody Fisher
                  </Text>
                  <Text
                    className="font-normal lowercase lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-blue_A200 w-[auto]"
                    compid="4202:3410"
                    variant="body5"
                    comptype="Text"
                  >
                    @CodyFisher
                  </Text>
                </Column>
              </Row>
              <Row
                className="items-center lg:mr-[17px] xl:mr-[20px] 2xl:mr-[23px] 3xl:mr-[27px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[86%]"
                compid="4202:3413"
                comptype="Row"
              >
                <Img
                  src="images/img_profileimglarg_19.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  compid="I4202:3425;139:669"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
                <Column
                  className="items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[54%]"
                  compid="4202:3415"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-bluegray_700 w-[auto]"
                    compid="4202:3416"
                    variant="body5"
                    comptype="Text"
                  >
                    Robert Fox
                  </Text>
                  <Text
                    className="font-normal lowercase lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-blue_A200 w-[auto]"
                    compid="4202:3417"
                    variant="body5"
                    comptype="Text"
                  >
                    @RobertFox
                  </Text>
                </Column>
              </Row>
              <Row
                className="items-center lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[95%]"
                compid="4202:3428"
                comptype="Row"
              >
                <Img
                  src="images/img_profileimglarg_20.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  compid="I4202:3436;139:669"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
                <Column
                  className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[58%]"
                  compid="4202:3430"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-bluegray_700 w-[auto]"
                    compid="4202:3431"
                    variant="body5"
                    comptype="Text"
                  >
                    Jane Cooper
                  </Text>
                  <Text
                    className="font-normal lowercase lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-blue_A200 w-[auto]"
                    compid="4202:3432"
                    variant="body5"
                    comptype="Text"
                  >
                    @Jane Cooper
                  </Text>
                </Column>
              </Row>
            </List>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default RequestPaymentsPage;
