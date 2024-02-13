import { createTheme } from "@mui/material"

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#FF2E2E",
    },
    secondary: {
      main: "#F06522",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          margin: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
        text: {
          "&.Mui-disabled": {
            color: "#808080",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-root": {
            "padding": "10px",
            "@media(min-width: 550px)": {
              padding: "20px",
            },
          },
          "&.MuiContainer-maxWidthLg": {
            maxWidth: "1370px",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(0, 0, 0, 0.4)",
            },
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #000000",
            },
          },
        },
        notchedOutline: {
          "top": "0",
          "& legend": {
            display: "none",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&.MuiOutlinedInput-input": {
            padding: "8.5px 14px",
          },
        },
        focused: {},
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "position": "relative",
          "maxWidth": "unset",
          "width": "fit-content",
          "marginBottom": "10px",
          "transform": "unset",
          "color": "#000000",
          "fontWeight": "bold",
          "&.Mui-focused": {
            color: "unset",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 850,
      lg: 1250,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Cabin", "sans-serif"].join(","),
  },
})

export default theme
