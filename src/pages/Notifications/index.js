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

const NotificationsPage = () => {
  return (
    <>
      <Row
        className="bg-gray_50 font-spacegrotesk items-center mx-[auto] w-[100%]"
        compid="4217:4474"
        comptype="Row"
      >
        <aside className="items-center w-[21%]">
          <Column className="" compid="10" comptype="Column">
            <Column
              className="bg-white_A700 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
              compid="4217:4562"
              comptype="Column"
            >
              <Text
                className="Frame250"
                compid="4217:4563"
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
                compid="77"
                comptype="Column"
              >
                <Row
                  className="items-center pl-[1px] py-[1px] rounded-radius8 w-[100%]"
                  compid="4217:4567"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_12.png"
                    className="Vector"
                    compid="I4217:4568;275:1558"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame258"
                    compid="4217:4569"
                    variant="body4"
                    comptype="Text"
                  >
                    Dashboard
                  </Text>
                </Row>
                <Row
                  className="items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pl-[1px] py-[1px] rounded-radius8 w-[93%]"
                  compid="4217:4571"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_13.png"
                    className="Vector8"
                    compid="I4217:4572;120:4407"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame2587"
                    compid="4217:4573"
                    variant="body4"
                    comptype="Text"
                  >
                    Payments
                  </Text>
                </Row>
              </Column>
              <Row
                className="font-opensans items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[61%]"
                compid="4217:4574"
                comptype="Row"
              >
                <Line
                  className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]"
                  compid="4217:4575"
                  comptype="Line"
                />
                <Img
                  src="images/img_vector_14.png"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[13%]"
                  compid="I4217:4577;120:2335"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-blue_A700 w-[auto]"
                  compid="4217:4578"
                  variant="body4"
                  comptype="Text"
                >
                  Wallet & Cards
                </Text>
              </Row>
              <Column
                className="font-opensans lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[52%]"
                compid="78"
                comptype="Column"
              >
                <Row className="w-[100%]" compid="4217:4580" comptype="Row">
                  <Img
                    src="images/img_vector_15.png"
                    className="Vector16"
                    compid="I4217:4581;120:2254"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame261"
                    compid="4217:4582"
                    variant="body4"
                    comptype="Text"
                  >
                    Transactions
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[77%]"
                  compid="4217:4584"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_16.png"
                    className="Vector19"
                    compid="I4217:4585;120:73"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4217:4586"
                    variant="body4"
                    comptype="Text"
                  >
                    Analytics
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[81%]"
                  compid="4217:4588"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_17.png"
                    className="Vector22"
                    compid="I4217:4589;120:664"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4217:4590"
                    variant="body4"
                    comptype="Text"
                  >
                    Messages
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[0] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[71%]"
                  compid="4217:4592"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_18.png"
                    className="Vector25"
                    compid="I4217:4593;120:1890"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4217:4594"
                    variant="body4"
                    comptype="Text"
                  >
                    Settings
                  </Text>
                </Row>
                <Row
                  className="items-center ml-[1px] lg:mt-[336px] xl:mt-[385px] 2xl:mt-[433px] 3xl:mt-[519px] w-[51%]"
                  compid="4217:4596"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_19.png"
                    className="Vector22"
                    compid="I4217:4597;120:1784"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="Frame262"
                    compid="4217:4598"
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
          className="bg-gray_50 font-opensans lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[79%]"
          compid="4217:4475"
          comptype="Column"
        >
          <header className="w-[100%]" compid="12" comptype="Header">
            <Row
              className="items-center w-[100%]"
              compid="4221:2907"
              comptype="Row"
            >
              <Text
                className="text-bluegray_900 w-[auto]"
                compid="4217:4476"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Wallets & Cards
              </Text>
              <Stack
                className="bg-white_A700 border border-bluegray_100 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[567px] xl:ml-[648px] 2xl:ml-[729px] 3xl:ml-[875px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4217:4479"
                comptype="Stack"
              >
                <Img
                  src="images/img_vector_20.png"
                  className="Vector35"
                  compid="I4217:4480;120:253"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="absolute bg-red_700 border border-bluegray_50 border-solid flex items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] rounded-radius50 text-white_A700 top-[2%] w-[18px]"
                  compid="4217:4481"
                  variant="body6"
                  comptype="Text"
                >
                  2
                </Text>
              </Stack>
              <Column
                className="border border-blue_A700 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="4217:4484"
                comptype="Column"
              >
                <Img
                  src="images/img_profileimglarg_1.png"
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                  compid="I4217:4484;139:681"
                  comptype="CircleImage"
                  alt="ProfileImgLarg"
                />
              </Column>
            </Row>
          </header>
          <Row
            className="items-center justify-end lg:mb-[188px] xl:mb-[215px] 2xl:mb-[242px] 3xl:mb-[290px] ml-[auto] mt-[3px] w-[89%]"
            compid="75"
            comptype="Row"
          >
            <Column
              className="bg-white_A700 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius14 w-[42%]"
              compid="4217:4485"
              comptype="Column"
            >
              <Column
                className="bg-white_A700 border border-bluegray_50 border-solid lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]"
                compid="4217:4486"
                comptype="Column"
              >
                <Text
                  className="font-semibold text-bluegray_600 w-[auto]"
                  compid="4217:4489"
                  variant="body5"
                  comptype="Text"
                >
                  Total Payboost balance
                </Text>
                <Text
                  className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-bluegray_900 w-[auto]"
                  compid="4217:4490"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  $14,234.00 USD
                </Text>
                <Row
                  className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                  compid="65"
                  comptype="Row"
                >
                  <Button
                    className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[47%]"
                    compid="4217:4491"
                    comptype="Button"
                    shape="RoundedBorder8"
                    variant="FillBlueA700"
                  >
                    Top Up Wallet
                  </Button>
                  <Button
                    className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[47%]"
                    compid="4217:4493"
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
                compid="4217:4496"
                variant="body4"
                comptype="Text"
              >
                Add new card
              </Text>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius8 w-[100%]"
                compid="4217:4497"
                comptype="List"
                orientation="vertical"
              >
                <Row
                  className="bg-white_A700 border border-blue_A700 border-solid items-center justify-end xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]"
                  compid="4217:4498"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_21.png"
                    className="Vector50"
                    compid="I4217:4504;120:2238"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[82%]"
                    compid="4217:4500"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-between w-[100%]"
                      compid="66"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-blue_A700 w-[auto]"
                        compid="4217:4501"
                        variant="body4"
                        comptype="Text"
                      >
                        Amrerican Express
                      </Text>
                      <Img
                        src="images/img_path3789_3.png"
                        className="path3789"
                        compid="4217:4506"
                        comptype="Image"
                        alt="path3789"
                      />
                    </Row>
                    <Row
                      className="items-center justify-between lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
                      compid="67"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4502"
                        variant="body4"
                        comptype="Text"
                      >
                        **** **** **** 3425
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4503"
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
                  compid="4217:4507"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_22.png"
                    className="Vector50"
                    compid="I4217:4513;120:2238"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[82%]"
                    compid="4217:4509"
                    comptype="Column"
                  >
                    <Row
                      className="justify-between w-[100%]"
                      compid="69"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4510"
                        variant="body4"
                        comptype="Text"
                      >
                        Amrerican Express
                      </Text>
                      <Img
                        src="images/img_logo_1.png"
                        className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[14%]"
                        compid="4217:4514"
                        comptype="Image"
                        alt="Logo"
                      />
                    </Row>
                    <Row
                      className="items-center justify-between mt-[4px] w-[100%]"
                      compid="70"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4511"
                        variant="body4"
                        comptype="Text"
                      >
                        **** **** **** 3564
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4512"
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
                  compid="4217:4520"
                  comptype="Row"
                >
                  <Img
                    src="images/img_vector_23.png"
                    className="Vector50"
                    compid="I4217:4526;120:2238"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[82%]"
                    compid="4217:4522"
                    comptype="Column"
                  >
                    <Row
                      className="items-end justify-between w-[100%]"
                      compid="72"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4523"
                        variant="body4"
                        comptype="Text"
                      >
                        Amrerican Express
                      </Text>
                      <Img
                        src="images/img_path3789_4.png"
                        className="path3789"
                        compid="4217:4528"
                        comptype="Image"
                        alt="path3789"
                      />
                    </Row>
                    <Row
                      className="items-center justify-between lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
                      compid="73"
                      comptype="Row"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4524"
                        variant="body4"
                        comptype="Text"
                      >
                        **** **** **** 8663
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4525"
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
            <Stack
              className="lg:h-[513px] xl:h-[587px] 2xl:h-[660px] 3xl:h-[792px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[56%]"
              compid="63"
              comptype="Stack"
            >
              <Column
                className="absolute bg-white_A700 left-[0] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius14 top-[4%] w-[85%]"
                compid="4217:4529"
                comptype="Column"
              >
                <Stack
                  className="font-ibmplexmono lg:h-[177px] xl:h-[202px] 2xl:h-[228px] 3xl:h-[273px] w-[100%]"
                  compid="4217:4530"
                  comptype="Stack"
                >
                  <div
                    className="absolute bg-gradient  bottom-[0] lg:h-[176px] xl:h-[202px] 2xl:h-[227px] 3xl:h-[272px] rounded-radius2454 w-[100%]"
                    compid="4217:4531"
                    comptype="View"
                  ></div>
                  <Stack
                    className="absolute bg-white_A700_07 lg:h-[177px] xl:h-[202px] 2xl:h-[228px] 3xl:h-[273px] pr-[0] rounded-radius8 w-[100%]"
                    compid="3"
                    comptype="Stack"
                  >
                    <Stack
                      className="absolute lg:h-[176px] xl:h-[202px] 2xl:h-[227px] 3xl:h-[272px] inset-y-[0] left-[0] my-[auto] w-[79%]"
                      compid="64"
                      comptype="Stack"
                    >
                      <Column
                        className="absolute bg-cover bg-repeat font-ubuntu left-[0] lg:p-[22px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[91%]"
                        compid="4"
                        style={{
                          backgroundImage: "url('images/img_group4.png')",
                        }}
                        comptype="Column"
                      >
                        <Text
                          className="lg:mb-[103px] xl:mb-[118px] 2xl:mb-[133px] 3xl:mb-[159px] mt-[4px] not-italic text-white_A700_ab w-[auto]"
                          compid="4217:4547"
                          variant="body2"
                          comptype="Text"
                        >
                          American Express
                        </Text>
                      </Column>
                      <Text
                        className="absolute bottom-[12%] font-ibmplexmono right-[0] text-white_A700 w-[auto]"
                        compid="4217:4545"
                        variant="body2"
                        comptype="Text"
                      >
                        xxxx - xxxx - xxxx - x089
                      </Text>
                    </Stack>
                    <Text
                      className="absolute bottom-[26%] left-[7%] text-white_A700 w-[auto]"
                      compid="4217:4546"
                      variant="body2"
                      comptype="Text"
                    >
                      Nadxxx xxxx
                    </Text>
                    <Img
                      src="images/img_path3789_5.png"
                      className="absolute right-[7%] top-[18%] Vector225"
                      compid="4217:4549"
                      comptype="Image"
                      alt="path3789"
                    />
                  </Stack>
                </Stack>
                <Text
                  className="font-opensans lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-bluegray_900 w-[auto]"
                  compid="4217:4550"
                  variant="body3"
                  comptype="Text"
                >
                  American Express **0432
                </Text>
                <Text
                  className="font-opensans font-semibold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-bluegray_700 w-[auto]"
                  compid="4217:4553"
                  variant="body5"
                  comptype="Text"
                >
                  Status
                </Text>
                <Text
                  className="font-opensans mt-[4px] text-green_600 w-[auto]"
                  compid="4217:4552"
                  variant="body3"
                  comptype="Text"
                >
                  Confirmed
                </Text>
                <Row
                  className="font-opensans items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[50%]"
                  compid="4217:4554"
                  comptype="Row"
                >
                  <Text
                    className="font-semibold text-bluegray_700 w-[auto]"
                    compid="4217:4555"
                    variant="body5"
                    comptype="Text"
                  >
                    Automatic Transfers
                  </Text>
                  <Switch
                    compid="4217:4556"
                    comptype="Switch"
                    value={true}
                    className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[21%]"
                  />
                </Row>
                <Row
                  className="font-opensans items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pr-[37px] xl:pr-[42px] 2xl:pr-[48px] 3xl:pr-[57px] w-[100%]"
                  compid="4217:4557"
                  comptype="Row"
                >
                  <Column
                    className="bg-blue_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 w-[55%]"
                    compid="4217:4558"
                    comptype="Column"
                  >
                    <Text
                      className="font-semibold text-white_A700 w-[auto]"
                      compid="4217:4559"
                      variant="body4"
                      comptype="Text"
                    >
                      Set as preffered
                    </Text>
                  </Column>
                  <Column
                    className="items-center rounded-radius8 w-[28%]"
                    compid="4217:4560"
                    comptype="Column"
                  >
                    <Text
                      className="font-semibold text-red_700 w-[auto]"
                      compid="4217:4561"
                      variant="body4"
                      comptype="Text"
                    >
                      Remove card
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column
                className="absolute bg-cover bg-repeat items-center justify-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] right-[0] w-[71%]"
                compid="4217:4643"
                style={{ backgroundImage: "url('images/img_group55.png')" }}
                comptype="Column"
              >
                <Row
                  className="items-center justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]"
                  compid="4217:4641"
                  comptype="Row"
                >
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    compid="4217:4620"
                    variant="body3"
                    comptype="Text"
                  >
                    Notifications
                  </Text>
                  <Text
                    className="font-normal not-italic text-blue_A700 w-[auto]"
                    compid="4217:4621"
                    variant="body5"
                    comptype="Text"
                  >
                    Mark as read
                  </Text>
                </Row>
                <List
                  className="gap-[0] lg:mb-[217px] xl:mb-[249px] 2xl:mb-[280px] 3xl:mb-[336px] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                  compid="79"
                  comptype="List"
                  orientation="vertical"
                >
                  <Row
                    className="justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]"
                    compid="4217:4627"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_profileimglarg_2.png"
                      className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                      compid="I4217:4622;139:669"
                      comptype="CircleImage"
                      alt="ProfileImgLarg"
                    />
                    <Column
                      className="w-[87%]"
                      compid="4217:4626"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4625"
                        variant="body4"
                        comptype="Text"
                      >
                        Payment Success
                      </Text>
                      <Text
                        className="font-normal lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] mt-[4px] not-italic text-black_900 w-[100%]"
                        compid="4217:4624"
                        variant="body5"
                        comptype="Text"
                      >
                        Payment of $40 USD transferred to bessie
                        <br />
                        cooper.{" "}
                      </Text>
                    </Column>
                  </Row>
                  <Row
                    className="justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]"
                    compid="4217:4628"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_profileimglarg_3.png"
                      className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                      compid="I4217:4632;139:669"
                      comptype="CircleImage"
                      alt="ProfileImgLarg"
                    />
                    <Column
                      className="w-[87%]"
                      compid="4217:4629"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4630"
                        variant="body4"
                        comptype="Text"
                      >
                        Payment Success
                      </Text>
                      <Text
                        className="font-normal lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] mt-[4px] not-italic text-black_900 w-[100%]"
                        compid="4217:4631"
                        variant="body5"
                        comptype="Text"
                      >
                        Payment of $40 USD transferred to bessie
                        <br />
                        cooper.{" "}
                      </Text>
                    </Column>
                  </Row>
                  <Row
                    className="justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]"
                    compid="4217:4634"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_profileimglarg_4.png"
                      className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] rounded-radius50 lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                      compid="I4217:4638;139:669"
                      comptype="CircleImage"
                      alt="ProfileImgLarg"
                    />
                    <Column
                      className="w-[87%]"
                      compid="4217:4635"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="4217:4636"
                        variant="body4"
                        comptype="Text"
                      >
                        Payment Success
                      </Text>
                      <Text
                        className="font-normal lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] mt-[4px] not-italic text-black_900 w-[100%]"
                        compid="4217:4637"
                        variant="body5"
                        comptype="Text"
                      >
                        Payment of $40 USD transferred to bessie
                        <br />
                        cooper.{" "}
                      </Text>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Stack>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default NotificationsPage;
