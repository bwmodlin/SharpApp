import {Container, Grid, Box, Button, Paper} from '@mui/material';

function Footer (props) {

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
                        <Button variant="disabled">
                            Prev
                        </Button>
                    </Grid>
                    <Grid item xs={10} alignItems="center">

                    </Grid>
                    <Grid item xs={1} justify="center">
                        <Button sx={{color:"white", backgroundColor:"#4b6896"}} variant="outlined">
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