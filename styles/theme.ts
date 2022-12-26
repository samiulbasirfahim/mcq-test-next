import { extendTheme } from "@chakra-ui/react";

export const newTheme = extendTheme({
    cssVarPrefix: "coffeeclass-io",
    colors: {
        primary: "#845ec2",
        secondary: "#00c9a7",
        "highlight": "#9b89b3",
        warning: "#ff8066",
        danger: "#c34a36",
    },
})