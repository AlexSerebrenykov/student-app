import { CardMedia, Card as MuiCard, CardContent as MuiCardContent, styled } from "@mui/material"

export const Card = styled(MuiCard)(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: "10px",
  border: `1px solid ${theme.palette.secondary.main}`,
}))

export const CardContent = styled(MuiCardContent)(({ theme }) => ({
  "display": "flex",
  "flexDirection": "column",
  "gap": theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(6),
  },
  "&.MuiCardContent-root": {
    padding: 0,
  },
}))

export const CardImage = styled(CardMedia)({
  height: "100%",
  borderRadius: "10px",
}) as typeof CardMedia
