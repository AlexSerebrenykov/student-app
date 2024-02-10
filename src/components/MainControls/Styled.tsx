import { IconButton, styled } from "@mui/material"

export const ClearButton = styled(IconButton)({
  "height": "20px",
  "width": "20px",
  "backgroundColor": "#ffffff",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "15px",
  },
})
