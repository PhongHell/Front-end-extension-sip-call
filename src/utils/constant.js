export const dialPadNumbersData = [
    {
        label : "1",
        value : "1"
    },
    {
        label : "2",
        value : "2"
    },
    {
        label : "3",
        value : "3"
    },
    {
        label : "4",
        value : "4"
    },
    {
        label : "5",
        value : "5"
    },
    {
        label : "6",
        value : "6"
    },
    {
        label : "7",
        value : "7"
    },
    {
        label : "8",
        value : "8"
    },
    {
        label : "9",
        value : "9"
    },
    {
        label : "*",
        value : "*"
    },
    {
        label : "0",
        value : "0"
    },
    {
        label : "#",
        value : "#"
    },
];

export const sipPhoneSettingDataList = [
    {
        label : "Do Not Disturb",
        optionText : "Enable Do Not Disturb",
        isChecked : false,
    },
    {
        label : "Auto Answer Incoming Calls",
        optionText : "Enable Auto Answer",
        isChecked : false,
    },
    {
        label : "Set Prefix",
        optionText : "Enter Prefix Value",
        isChecked : false,
    },
    {
        label : "Call Park",
        optionText : "Enter Park Code",
        isChecked : false,
    }
]

export const validationPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;