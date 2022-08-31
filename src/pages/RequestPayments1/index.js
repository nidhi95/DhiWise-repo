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

const RequestPayments1Page = () => {
  return (
    <>
      <Row
        className="bg-gray_50 font-spacegrotesk items-center mx-[auto] w-[100%]"
        compid="4202:3111"
        comptype="Row"
      >
        <aside className="items-center w-[21%]">
          <Column className="" compid="45" comptype="Column">
            <Column
              className="bg-white_A700 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
              compid="4202:3144"
              comptype="Column"
            >
              <Text
                className="Frame250"
                compid="4202:3145"
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
                compid="4202:3149"
                comptype="Row"
              >
                <Img
                  src="images/img_vector_85.png"
                  className="Vector"
                  compid="I4202:3150;275:1558"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="Frame258"
                  compid="4202:3151"
                  variant="body4"
                  comptype="Text"
                >
                  Dashboard
                </Text>
              </Row>
              <Row
                className="font-opensans items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius8 w-[46%]"
                compid="4202:3152"
                comptype="Row"
              >
                <Line
                  className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]"
                  compid="4202:3153"
                  comptype="Line"
                />
                <Img
                  src="images/img_vector_86.png"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[10%]"
                  compid="I4202:3155;120:4407"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] text-blue_A700 w-[auto]"
                  compid="4202:3156"
                  variant="body4"
                  comptype="Text"
                >
                  Payments
                </Text>
              </Row>
              <Column
                className="font-opensans lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[58%]"
                compid="275"
                comptype="Column"
              >
                <Row
                  className="items-center ml-[1px] w-[99%]"
                  compid="4202:3158"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_87.png"
                    className="Vector225"
                    compid="I4202:3159;120:2335"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3160"
                    variant="body4"
                    comptype="Text"
                  >
                    Wallet & Cards
                  </Text>
                </Row>
                <Row
                  className="lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[90%]"
                  compid="4202:3162"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_88.png"
                    className="Vector16"
                    compid="I4202:3163;120:2254"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame261"
                    compid="4202:3164"
                    variant="body4"
                    comptype="Text"
                  >
                    Transactions
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[69%]"
                  compid="4202:3166"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_89.png"
                    className="Vector19"
                    compid="I4202:3167;120:73"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3168"
                    variant="body4"
                    comptype="Text"
                  >
                    Analytics
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[72%]"
                  compid="4202:3170"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_90.png"
                    className="Vector22"
                    compid="I4202:3171;120:664"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3172"
                    variant="body4"
                    comptype="Text"
                  >
                    Messages
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[63%]"
                  compid="4202:3174"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_91.png"
                    className="Vector25"
                    compid="I4202:3175;120:1890"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3176"
                    variant="body4"
                    comptype="Text"
                  >
                    Settings
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[1px] lg:mt-[336px] xl:mt-[385px] 2xl:mt-[433px] 3xl:mt-[519px] w-[46%]"
                  compid="4202:3178"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_92.png"
                    className="Vector22"
                    compid="I4202:3179;120:1784"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3180"
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
          compid="4202:3112"
          comptype="Column"
        >
          <header className="mt-[1px] w-[100%]" compid="47" comptype="Header">
            <Row
              className="items-center w-[100%]"
              compid="4221:2911"
              comptype="Row"
            >
              <Text
                className="text-bluegray_900 w-[auto]"
                compid="4202:3113"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Payments
              </Text>
              <Stack
                className="bg-white_A700 border border-bluegray_100 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[628px] xl:ml-[718px] 2xl:ml-[808px] 3xl:ml-[970px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4202:3116"
                comptype="Stack"
              >
                <Img
                  src="images/img_vector_93.png"
                  className="Vector35"
                  compid="I4202:3117;120:253"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="absolute bg-red_700 border border-bluegray_50 border-solid flex items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] rounded-radius50 text-white_A700 top-[2%] w-[18px]"
                  compid="4202:3118"
                  variant="body6"
                  comptype="Text"
                >
                  2
                </Text>
              </Stack>
              <Column
                className="border border-blue_A700 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4202:3121"
                comptype="Column"
              >
                <Img
                  src="images/img_profileimglarg_23.png"
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  compid="I4202:3121;139:681"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
              </Column>
            </Row>
          </header>
          <Row
            className="items-center justify-center lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[30%]"
            compid="4202:3123"
            comptype="Row"
          >
            <Button
              className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[23%]"
              compid="4202:3124"
              comptype="Button"
              shape="RoundedBorder8"
              variant="FillWhiteA700"
            >
              Send
            </Button>
            <Button
              className="font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[30%]"
              compid="4202:3126"
              comptype="Button"
              shape="RoundedBorder8"
              variant="FillBlueA700"
            >
              Request
            </Button>
            <Button
              className="font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[32%]"
              compid="4202:3128"
              comptype="Button"
              shape="RoundedBorder8"
              variant="FillWhiteA700"
            >
              Contacts
            </Button>
          </Row>
          <Column
            className="bg-white_A700 items-center lg:mb-[260px] xl:mb-[298px] 2xl:mb-[335px] 3xl:mb-[402px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius12 shadow-bs2 w-[45%]"
            compid="4202:3130"
            comptype="Column"
          >
            <Text
              className="text-bluegray_900 w-[auto]"
              compid="4202:3131"
              variant="body3"
              comptype="Text"
            >
              Request Payments from
            </Text>
            <Column
              className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="276"
              comptype="Column"
            >
              <Input
                className="font-semibold p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                wrapClassName="w-[100%]"
                compid="I4202:3132;122:21290"
                comptype="EditText"
                name="InputField"
                placeholder="Enter mobile, email or username"
                shape="RoundedBorder8"
                size="md"
                variant="OutlineBluegray200"
              ></Input>
              <Text
                className="font-semibold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-bluegray_900 w-[auto]"
                compid="4202:3134"
                variant="body4"
                comptype="Text"
              >
                Recents
              </Text>
              <List
                className="lg:gap-[16px] xl:gap-[18px] 2xl:gap-[21px] 3xl:gap-[25px] grid grid-cols-6 min-h-[auto] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
                compid="4202:3135"
                comptype="List"
                orientation="horizontal"
              >
                <Column
                  className="items-center w-[100%]"
                  compid="4202:3136"
                  comptype="Column"
                >
                  <Img
                    src="images/img_profileimglarg_24.png"
                    className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 w-[100%]"
                    compid="I4202:3136;170:1101;139:669"
                    comptype="CircleImage"
                    alt="ProfileImgLarg"
                  />
                  <Text
                    className="Avatarwithlab"
                    compid="I4202:3136;139:684"
                    variant="body5"
                    comptype="Text"
                  >
                    Bessie
                  </Text>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compid="4202:3137"
                  comptype="Column"
                >
                  <Img
                    src="images/img_profileimglarg_25.png"
                    className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 w-[100%]"
                    compid="I4202:3137;170:1101;139:669"
                    comptype="CircleImage"
                    alt="ProfileImgLarg"
                  />
                  <Text
                    className="Avatarwithlab"
                    compid="I4202:3137;139:684"
                    variant="body5"
                    comptype="Text"
                  >
                    Annette{" "}
                  </Text>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compid="4202:3138"
                  comptype="Column"
                >
                  <Img
                    src="images/img_profileimglarg_26.png"
                    className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 w-[100%]"
                    compid="I4202:3138;170:1101;139:669"
                    comptype="CircleImage"
                    alt="ProfileImgLarg"
                  />
                  <Text
                    className="Avatarwithlab"
                    compid="I4202:3138;139:684"
                    variant="body5"
                    comptype="Text"
                  >
                    Devon{" "}
                  </Text>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compid="4202:3139"
                  comptype="Column"
                >
                  <Img
                    src="images/img_profileimglarg_27.png"
                    className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 w-[100%]"
                    compid="I4202:3139;170:1101;139:669"
                    comptype="CircleImage"
                    alt="ProfileImgLarg"
                  />
                  <Text
                    className="Avatarwithlab"
                    compid="I4202:3139;139:684"
                    variant="body5"
                    comptype="Text"
                  >
                    Cody
                  </Text>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compid="4202:3140"
                  comptype="Column"
                >
                  <Img
                    src="images/img_profileimglarg_28.png"
                    className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 w-[100%]"
                    compid="I4202:3140;170:1101;139:669"
                    comptype="CircleImage"
                    alt="ProfileImgLarg"
                  />
                  <Text
                    className="Avatarwithlab"
                    compid="I4202:3140;139:684"
                    variant="body5"
                    comptype="Text"
                  >
                    Robert
                  </Text>
                </Column>
                <Column
                  className="items-center w-[100%]"
                  compid="4202:3141"
                  comptype="Column"
                >
                  <Img
                    src="images/img_profileimglarg_29.png"
                    className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 w-[100%]"
                    compid="I4202:3141;170:1101;139:669"
                    comptype="CircleImage"
                    alt="ProfileImgLarg"
                  />
                  <Text
                    className="Avatarwithlab"
                    compid="I4202:3141;139:684"
                    variant="body5"
                    comptype="Text"
                  >
                    Jane{" "}
                  </Text>
                </Column>
              </List>
              <Input
                className="font-semibold p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] lg:mt-[18px] w-[100%] xl:mt-[21px]"
                compid="I4202:3220;122:21290"
                comptype="EditText"
                name="InputField"
                placeholder="Enter Amount"
                shape="RoundedBorder8"
                size="md"
                variant="OutlineBluegray200"
              ></Input>
              <Button
                className="font-semibold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                compid="4202:3142"
                comptype="Button"
                shape="RoundedBorder8"
                variant="FillBlueA700"
              >
                Request payment
              </Button>
            </Column>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default RequestPayments1Page;
