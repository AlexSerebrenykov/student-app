import { Unstable_Grid2 as Grid } from "@mui/material"
import { FC } from "react"
import { IStudent } from "../../models/IStudent"
import StudentCard from "../StudentCard"

type StudentsListProps = {
  students: IStudent[]
}

const StudentsList: FC<StudentsListProps> = ({ students }) => (
  <Grid container spacing={5}>
    {students?.map(student => (
      <Grid key={student.id} xs={12} md={6} lg={4}>
        <StudentCard student={student} />
      </Grid>
    ))}
  </Grid>
)

export default StudentsList
