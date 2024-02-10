import { styled } from "@mui/material"

export const ImageContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxHeight: "450px",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "160px",
    maxHeight: "175px",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
}))
