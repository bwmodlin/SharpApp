import {Container, Grid, Box, Button, Paper} from '@mui/material';

function Footer (props) {
    const handleClick = (isNext) => {
        const changeTab = () => {
            if (isNext) {
                props.setTab(props.tab + 1)
            } else {
                props.setTab(props.tab - 1)
            }
        }
        return changeTab
    }

    return (
        <footer style={{width: '100%', bottom: 0, position:  "fixed"}}>
            <Box sx={{
                bgcolor: "#cccccc",
                width: 1
            }}>
                <Container maxWidth="lg" >
                <Grid 
                    container 
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    py={1}
                >
                    <Grid item xs={1} alignItems="center">
                        <Button variant={props.tab === 0 ? "disabled" : "outlined"} onClick={handleClick(false)}>
                            Prev
                        </Button>
                    </Grid>
                    <Grid item xs={10} alignItems="center">

                    </Grid>
                    <Grid item xs={1} justify="center">
                        <Button onClick={handleClick(true)} sx={{color:"white", backgroundColor:"#4b6896"}} variant={props.tab === 2 ? "disabled" : "outlined"} >
                            Next
                        </Button>
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer