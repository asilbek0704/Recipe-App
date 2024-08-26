import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    h1: {
      fontSize: 44,
      fontWeight: 700
    },

    h2: {
      fontSize: 25,
      fontWeight: 700
    },

    h3: {
      fontSize: 25,
      fontWeight: 500
    },

    body1: {
      fontSize: 25,
      fontWeight: 500,
      letterSpacing: 0.3
    },

    caption: {
      fontSize: 25,
      fontWeight: 300
    },

    button: {
      fontWeight: 700,
      fontSize: "25px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: "5px",
          padding: "5px 20px",
          lineHeight: 1.4,
          transition: "none",
          color: "#fff",
        },
      },

      variants: [
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: "#0af",
            ":hover": {
              backgroundColor: "#0077b3",
            }
          },
        },
        {
          props: { color: 'error' },
          style: {
            backgroundColor: "red",
            ":hover": {
              backgroundColor: "#b30000",
            }
          },
        }
      ],

      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "20px 20px 40px",
          border: "none",
          borderRadius: "0",
          boxShadow: "none"
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          border: "1px solid #000",
          borderRadius: '5px',
          fontSize: "inherit",
          padding: "0px 10px",
          width: "100%"
        }
      },
      defaultProps: {
        disableUnderline: true,
      },
    }
  }
})
