import { Unstable_Grid2 as Grid } from "@mui/material"
import { FC } from "react"
import InfoBox from "../../components/InfoBox"
import { IStudent } from "../../models/IStudent"
import { ImageContainer } from "./Styled"

type DetailsBodyProps = Partial<IStudent>
const DetailsBody: FC<DetailsBodyProps> = ({ avatar, name, company, jobTitle, signingDate, isFeePaid }) => {
  return (
    <Grid container gap={6}>
      <Grid xs={12}>
        <ImageContainer>
          <img src={avatar} alt={`${name} avatar`} />
        </ImageContainer>
      </Grid>
      <Grid xs={12} display='flex' flexDirection={"column"} gap={5}>
        <InfoBox type='details' label='Name' value={name} />
        <InfoBox type='details' label='Company' value={company} />
        <InfoBox type='details' label='Job Title' value={jobTitle} />
      </Grid>
      <Grid xs={12} display='flex' flexDirection={"column"} gap={5}>
        <InfoBox type='details' label='Signing Date' value={signingDate} />
        <InfoBox type='details' label='Fee Paid' value={isFeePaid ? "YES" : "NO"} />
      </Grid>
    </Grid>
  )
}

export default DetailsBody
