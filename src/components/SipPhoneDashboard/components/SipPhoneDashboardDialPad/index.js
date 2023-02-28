import React, { useState } from 'react';
import { dialPadNumbersData, validationPhoneNumber } from 'utils/constant';
import { 
    SipPhoneDashboardDialPadButtonDial,
    SipPhoneDashboardDialPadContainer,
    SipPhoneDashboardDialPadHeader,
    SipPhoneDashboardDialPadFooter,
    SipPhoneDashboardDialPadBody,
    SipPhoneDashboardDialPadLocalPhoneIcon,
    SipPhoneDashboardDialPadNumber,
    SipPhoneDashboardDialPadHeaderTextField,
    StyledBackSpaceIcon,
    StyledBackSpaceButton,
} from "./SipPhoneDashboardDialPad.styles";
import { Box, FlexBox } from "ui-components"

export const SipPhoneDashboardDialPad = () => {
    const [ phoneNumber, setPhoneNumber ] = useState("");

    const onChangePhoneNumber = (event) => {
        const newPhoneNumber = event?.target?.value?.trim();
        if(validationPhoneNumber.test(newPhoneNumber)){
            setPhoneNumber(newPhoneNumber);
            return;
        }

        if(phoneNumber?.length < 2){
            setPhoneNumber("");
        };
    };

    const onKeypressPhoneNumber = (number) => {
        const newPhoneNumber = `${phoneNumber}${number}`;
        setPhoneNumber(newPhoneNumber);
    };

    const onBackSpacePhoneNumber = () => {
        if(phoneNumber?.length > 0){
            const newPhoneNumber = phoneNumber?.substring(0, phoneNumber.length - 1);
            setPhoneNumber(newPhoneNumber);
        }
        
    };

    return (
        <SipPhoneDashboardDialPadContainer>
            <SipPhoneDashboardDialPadHeader>
                <FlexBox>
                    <Box width={"95%"}>
                        <SipPhoneDashboardDialPadHeaderTextField 
                            size="small"
                            fullWidth
                            placeholder="Enter number to dial"
                            value={phoneNumber}
                            onChange={onChangePhoneNumber}
                        />
                    </Box>
                    <StyledBackSpaceButton onClick={onBackSpacePhoneNumber}>
                        <StyledBackSpaceIcon />
                    </StyledBackSpaceButton>
                </FlexBox>
            </SipPhoneDashboardDialPadHeader>
            <SipPhoneDashboardDialPadBody>
                {dialPadNumbersData.map((item) => {
                    return <SipPhoneDashboardDialPadNumber key={item.value} onClick={() => onKeypressPhoneNumber(item.value)}> {item.label}</SipPhoneDashboardDialPadNumber>
                })}
            </SipPhoneDashboardDialPadBody>
            <SipPhoneDashboardDialPadFooter>
                <SipPhoneDashboardDialPadButtonDial>
                    <SipPhoneDashboardDialPadLocalPhoneIcon /> Dial
                </SipPhoneDashboardDialPadButtonDial>
            </SipPhoneDashboardDialPadFooter>
        </SipPhoneDashboardDialPadContainer>
    )
}
