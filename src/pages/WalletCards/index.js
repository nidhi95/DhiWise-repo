import React from "react";

import {
  Row,
  Column,
  Text,
  Img,
  Line,
  Stack,
  Button,
  List,
  Switch,
} from "components";

const WalletCardsPage = () => {
  return (
    <>
      <Row
        className="bg-gray_50 font-spacegrotesk items-center mx-[auto] w-[100%]"
        compid="4202:3443"
        comptype="Row"
      >
        <aside className="items-center w-[21%]">
          <Column className="" compid="7" comptype="Column">
            <Column
              className="bg-white_A700 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
              compid="4202:3505"
              comptype="Column"
            >
              <Text
                className="Frame250"
                compid="4202:3506"
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
                className="font-opensans lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[46%]"
                compid="61"
                comptype="Column"
              >
                <Row
                  className="items-center pl-[1px] py-[1px] rounded-radius8 w-[100%]"
                  compid="4202:3510"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector.png"
                    className="Vector"
                    compid="I4202:3511;275:1558"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame258"
                    compid="4202:3512"
                    variant="body4"
                    comptype="Text"
                  >
                    Dashboard
                  </Text>
                </Row>
                <Row
                  className="items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pl-[1px] py-[1px] rounded-radius8 w-[93%]"
                  compid="4202:3515"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_1.png"
                    className="Vector8"
                    compid="I4202:3516;120:4407"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame2587"
                    compid="4202:3517"
                    variant="body4"
                    comptype="Text"
                  >
                    Payments
                  </Text>
                </Row>
              </Column>
              <Row
                className="font-opensans items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[61%]"
                compid="4202:3518"
                comptype="Row"
              >
                <Line
                  className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]"
                  compid="4202:3574"
                  comptype="Line"
                />
                <Img
                  src="images/img_vector_2.png"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[13%]"
                  compid="I4202:3520;120:2335"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-blue_A700 w-[auto]"
                  compid="4202:3521"
                  variant="body4"
                  comptype="Text"
                >
                  Wallet & Cards
                </Text>
              </Row>
              <Column
                className="font-opensans lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[52%]"
                compid="62"
                comptype="Column"
              >
                <Row className="w-[100%]" compid="4202:3523" comptype="Row">
                  <Img
                    src="images/img_vector_3.png"
                    className="Vector16"
                    compid="I4202:3524;120:2254"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame261"
                    compid="4202:3525"
                    variant="body4"
                    comptype="Text"
                  >
                    Transactions
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[77%]"
                  compid="4202:3527"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_4.png"
                    className="Vector19"
                    compid="I4202:3528;120:73"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3529"
                    variant="body4"
                    comptype="Text"
                  >
                    Analytics
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[81%]"
                  compid="4202:3531"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_5.png"
                    className="Vector22"
                    compid="I4202:3532;120:664"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3533"
                    variant="body4"
                    comptype="Text"
                  >
                    Messages
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[71%]"
                  compid="4202:3535"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_6.png"
                    className="Vector25"
                    compid="I4202:3536;120:1890"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3537"
                    variant="body4"
                    comptype="Text"
                  >
                    Settings
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[1px] lg:mt-[336px] xl:mt-[385px] 2xl:mt-[433px] 3xl:mt-[519px] w-[51%]"
                  compid="4202:3539"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_7.png"
                    className="Vector22"
                    compid="I4202:3540;120:1784"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4202:3541"
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
          className="bg-gray_50 font-opensans items-center lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[79%]"
          compid="4202:3444"
          comptype="Column"
        >
          <header className="w-[100%]" compid="9" comptype="Header">
            <Row
              className="items-center w-[100%]"
              compid="4221:2909"
              comptype="Row"
            >
              <Text
                className="text-bluegray_900 w-[auto]"
                compid="4202:3445"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Wallets & Cards
              </Text>
              <Stack
                className="bg-white_A700 border border-bluegray_100 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[567px] xl:ml-[648px] 2xl:ml-[729px] 3xl:ml-[875px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4202:3448"
                comptype="Stack"
              >
                <Img
                  src="images/img_vector_8.png"
                  className="Vector35"
                  compid="I4202:3449;120:253"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="absolute bg-red_700 border border-bluegray_50 border-solid flex items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] rounded-radius50 text-white_A700 top-[2%] w-[18px]"
                  compid="4202:3450"
                  variant="body6"
                  comptype="Text"
                >
                  2
                </Text>
              </Stack>
              <Column
                className="border border-blue_A700 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4202:3453"
                comptype="Column"
              >
                <Img
                  src="images/img_profileimglarg.png"
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  compid="I4202:3453;139:681"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
              </Column>
            </Row>
          </header>
          <Row
            className="lg:mb-[196px] xl:mb-[224px] 2xl:mb-[252px] 3xl:mb-[302px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[82%]"
            compid="59"
            comptype="Row"
          >
            <Column
              className="bg-white_A700 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius14 w-[45%]"
              compid="4207:3706"
              comptype="Column"
            >
              <Column
                className="bg-white_A700 border border-bluegray_50 border-solid lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]"
                compid="4207:3583"
                comptype="Column"
              >
                <Text
                  className="font-semibold text-bluegray_600 w-[auto]"
                  compid="4207:3576"
                  variant="body5"
                  comptype="Text"
                >
                  Total Payboost balance
                </Text>
                <Text
                  className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-bluegray_900 w-[auto]"
                  compid="4207:3577"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  $14,234.00 USD
                </Text>
                <Row
                  className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                  compid="49"
                  comptype="Row"
                >
                  <Button
                    className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[47%]"
                    compid="4207:3578"
                    comptype="Button"
                    shape="RoundedBorder8"
                    variant="FillBlueA700"
                  >
                    Top Up Wallet
                  </Button>
                  <Button
                    className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[47%]"
                    compid="4207:3580"
                    comptype="Button"
                    shape="RoundedBorder8"
                    variant="OutlineBlueA700"
                  >
                    Withdraw{" "}
                  </Button>
                </Row>
              </Column>
              <Text
                className="font-semibold lg:ml-[191px] xl:ml-[218px] 2xl:ml-[246px] 3xl:ml-[295px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-blue_A700 w-[auto]"
                compid="4207:3708"
                variant="body4"
                comptype="Text"
              >
                Add new card
              </Text>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius8 w-[100%]"
                compid="4207:3620"
                comptype="List"
                orientation="vertical"
              >
                <Row
                  className="bg-white_A700 border border-blue_A700 border-solid items-center justify-end xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]"
                  compid="4207:3599"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_9.png"
                    className="Vector50"
                    compid="I4207:3594;120:2238"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[82%]"
                    compid="4207:3586"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-between w-[100%]"
                      compid="50"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-blue_A700 w-[auto]"
                        compid="4207:3587"
                        variant="body4"
                        comptype="Text"
                      >
                        Amrerican Express
                      </Text>
                      <Img
                        src="images/img_path3789.png"
                        className="path3789"
                        compid="4207:3597"
                        comptype="Image"
                        alt="path3789"
                      />
                    </Row>
                    <Row
                      className="items-center justify-between lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
                      compid="51"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4207:3593"
                        variant="body4"
                        comptype="Text"
                      >
                        **** **** **** 3425
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4207:3598"
                        variant="body4"
                        comptype="Text"
                      >
                        12/25
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row
                  className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-end xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]"
                  compid="4207:3600"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_10.png"
                    className="Vector50"
                    compid="I4207:3606;120:2238"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[82%]"
                    compid="4207:3602"
                    comptype="Column"
                  >
                    <Row
                      className="justify-between w-[100%]"
                      compid="53"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4207:3603"
                        variant="body4"
                        comptype="Text"
                      >
                        Amrerican Express
                      </Text>
                      <Img
                        src="images/img_logo.png"
                        className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[14%]"
                        compid="4207:3661"
                        comptype="Image"
                        alt="Logo"
                      />
                    </Row>
                    <Row
                      className="items-center justify-between mt-[4px] w-[100%]"
                      compid="54"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4207:3604"
                        variant="body4"
                        comptype="Text"
                      >
                        **** **** **** 3564
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4207:3605"
                        variant="body4"
                        comptype="Text"
                      >
                        12/25
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row
                  className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-end xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]"
                  compid="4207:3610"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_11.png"
                    className="Vector50"
                    compid="I4207:3616;120:2238"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[82%]"
                    compid="4207:3612"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-between w-[100%]"
                      compid="56"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4207:3613"
                        variant="body4"
                        comptype="Text"
                      >
                        Amrerican Express
                      </Text>
                      <Img
                        src="images/img_path3789_1.png"
                        className="path3789"
                        compid="4207:3618"
                        comptype="Image"
                        alt="path3789"
                      />
                    </Row>
                    <Row
                      className="items-center justify-between lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
                      compid="57"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4207:3614"
                        variant="body4"
                        comptype="Text"
                      >
                        **** **** **** 8663
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4207:3615"
                        variant="body4"
                        comptype="Text"
                      >
                        12/25
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </List>
            </Column>
            <Column
              className="bg-white_A700 lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius14 w-[52%]"
              compid="4207:3704"
              comptype="Column"
            >
              <Stack
                className="font-ibmplexmono lg:h-[177px] xl:h-[202px] 2xl:h-[228px] 3xl:h-[273px] w-[100%]"
                compid="4207:3667"
                comptype="Stack"
              >
                <div
                  className="absolute bg-gradient  bottom-[0] lg:h-[176px] xl:h-[202px] 2xl:h-[227px] 3xl:h-[272px] rounded-radius2454 w-[100%]"
                  compid="4207:3668"
                  comptype="View"
                ></div>
                <Stack
                  className="absolute bg-white_A700_07 lg:h-[177px] xl:h-[202px] 2xl:h-[228px] 3xl:h-[273px] pr-[0] rounded-radius8 w-[100%]"
                  compid="1"
                  comptype="Stack"
                >
                  <Stack
                    className="absolute lg:h-[176px] xl:h-[202px] 2xl:h-[227px] 3xl:h-[272px] inset-y-[0] left-[0] my-[auto] w-[79%]"
                    compid="48"
                    comptype="Stack"
                  >
                    <Column
                      className="absolute bg-cover bg-repeat font-ubuntu left-[0] lg:p-[22px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[91%]"
                      compid="2"
                      style={{
                        backgroundImage: "url('images/img_group2.png')",
                      }}
                      comptype="Column"
                    >
                      <Text
                        className="lg:mb-[103px] xl:mb-[118px] 2xl:mb-[133px] 3xl:mb-[159px] mt-[4px] not-italic text-white_A700_ab w-[auto]"
                        compid="4207:3684"
                        variant="body2"
                        comptype="Text"
                      >
                        American Express
                      </Text>
                    </Column>
                    <Text
                      className="absolute bottom-[12%] font-ibmplexmono right-[0] text-white_A700 w-[auto]"
                      compid="4207:3682"
                      variant="body2"
                      comptype="Text"
                    >
                      xxxx - xxxx - xxxx - x425
                    </Text>
                  </Stack>
                  <Text
                    className="absolute bottom-[26%] left-[7%] text-white_A700 w-[auto]"
                    compid="4207:3683"
                    variant="body2"
                    comptype="Text"
                  >
                    Nadxxx xxxx
                  </Text>
                  <Img
                    src="images/img_path3789_2.png"
                    className="absolute right-[7%] top-[18%] Vector225"
                    compid="4207:3686"
                    comptype="Image"
                    alt="path3789"
                  />
                </Stack>
              </Stack>
              <Text
                className="font-opensans lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-bluegray_900 w-[auto]"
                compid="4207:3687"
                variant="body3"
                comptype="Text"
              >
                American Express **3425
              </Text>
              <Text
                className="font-opensans font-semibold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-bluegray_700 w-[auto]"
                compid="4207:3689"
                variant="body5"
                comptype="Text"
              >
                Status
              </Text>
              <Text
                className="font-opensans mt-[4px] text-green_600 w-[auto]"
                compid="4207:3688"
                variant="body3"
                comptype="Text"
              >
                Confirmed
              </Text>
              <Row
                className="font-opensans items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[50%]"
                compid="4207:3720"
                comptype="Row"
              >
                <Text
                  className="font-semibold text-bluegray_700 w-[auto]"
                  compid="4207:3691"
                  variant="body5"
                  comptype="Text"
                >
                  Automatic Transfers
                </Text>
                <Switch
                  compid="4207:3717"
                  comptype="Switch"
                  value={true}
                  className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[21%]"
                />
              </Row>
              <Row
                className="font-opensans items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pr-[37px] xl:pr-[42px] 2xl:pr-[48px] 3xl:pr-[57px] w-[100%]"
                compid="4207:3700"
                comptype="Row"
              >
                <Button
                  className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[55%]"
                  compid="4207:3695"
                  comptype="Button"
                  shape="RoundedBorder8"
                  variant="FillBlueA700"
                >
                  Set as preffered
                </Button>
                <Column
                  className="items-center rounded-radius8 w-[28%]"
                  compid="4207:3698"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold text-red_700 w-[auto]"
                    compid="4207:3699"
                    variant="body4"
                    comptype="Text"
                  >
                    Remove card
                  </Text>
                </Column>
              </Row>
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default WalletCardsPage;
