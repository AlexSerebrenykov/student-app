import { Box, Typography } from "@mui/material"
import { FC } from "react"

type InfoBoxProps = {
  type?: "card" | "details"
  label: string
  value: string | undefined
}

const InfoBox: FC<InfoBoxProps> = ({ type = "card", label, value }) => {
  return (
    <Box>
      <Typography gutterBottom variant='body1' fontWeight={type === "card" ? "bolder" : "bold"}>
        {label}
      </Typography>
      <Typography variant='body1'>{value}</Typography>
    </Box>
  )
}

export default InfoBox
