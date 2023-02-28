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
    StyledBackSpaceIcon
} from "./SipPhoneDashboardDialPad.styles";

export const SipPhoneDashboardDialPad = () => {
    const [ phoneNumber, setPhoneNumber ] = useState("");

    const onChangePhoneNumber = (event) => {
        if(validationPhoneNumber.test(event.target.value)){
            setPhoneNumber(event.target.value);
            return;
        }

        if(phoneNumber?.length < 2){
            setPhoneNumber("");
        };
    };

    const onKeypressPhoneNumber = (number) => {
        const newPhoneNumber = `${phoneNumber}${number}`;
        setPhoneNumber(newPhoneNumber);
    }
    return (
        <SipPhoneDashboardDialPadContainer>
            <SipPhoneDashboardDialPadHeader>
                <SipPhoneDashboardDialPadHeaderTextField 
                    size="small" 
                    fullWidth 
                    InputProps={{
                        endAdornment : <StyledBackSpaceIcon />
                    }}
                    placeholder="Enter number to dial"
                    value={phoneNumber}
                    onChange={onChangePhoneNumber}
                />
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
