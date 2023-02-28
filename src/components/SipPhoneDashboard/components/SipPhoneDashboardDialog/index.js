import React, { useState } from 'react';
import { dialogNumbersData } from 'utils/constant';
import { 
    SipPhoneDashboardDialogButtonDial,
    SipPhoneDashboardDialogContainer,
    SipPhoneDashboardDialogHeader,
    SipPhoneDashboardDialogFooter,
    SipPhoneDashboardDialogBody,
    SipPhoneDashboardDialogLocalPhoneIcon,
    SipPhoneDashboardDialogNumber,
    SipPhoneDashboardDialogHeaderTextField,
    StyledBackSpaceIcon
} from "./SipPhoneDashboardDialog.styles";

export const SipPhoneDashboardDialog = () => {
    const [ phoneNumber, setPhoneNumber ] = useState("");
    return (
        <SipPhoneDashboardDialogContainer>
            <SipPhoneDashboardDialogHeader>
                <SipPhoneDashboardDialogHeaderTextField 
                    size="small" 
                    fullWidth 
                    InputProps={{
                        endAdornment : <StyledBackSpaceIcon />
                    }}
                    placeholder="Enter number to dial"
                    value={phoneNumber}
                />
            </SipPhoneDashboardDialogHeader>
            <SipPhoneDashboardDialogBody>
                {dialogNumbersData.map((item) => {
                    return <SipPhoneDashboardDialogNumber key={item.value}> {item.label}</SipPhoneDashboardDialogNumber>
                })}
            </SipPhoneDashboardDialogBody>
            <SipPhoneDashboardDialogFooter>
                <SipPhoneDashboardDialogButtonDial>
                    <SipPhoneDashboardDialogLocalPhoneIcon /> Dial
                </SipPhoneDashboardDialogButtonDial>
            </SipPhoneDashboardDialogFooter>
        </SipPhoneDashboardDialogContainer>
    )
}
