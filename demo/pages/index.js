import { Typography } from "@material-ui/core"
import { generateStyles } from "../components/StandardStyles"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  
}))


const Home = () => {
  const gs = generateStyles()
  return (
    <>
      <Typography component="h1" variant="h1" className={classNames(gs.text_red, gs.mb_5)}>Home page</Typography>
      <Typography component="h2" variant="h2" className={gs.text_small}>Home page 2</Typography>
    </>
  )
}

export default Home