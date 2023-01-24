import React from 'react'
import { Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Container, Toolbar, Button } from '@material-ui/core'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './styles';
// import {ThemeProvider} from '@maui/styles';
// import { createTheme, useTheme } from '@material-ui/core/styles';
const cards = [0,1,2,3,4,5,6,7,8,9]


function App() {
  const classes = useStyles();
//   const theme = useTheme();
  return (
    <div>
        <CssBaseline/>
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCameraIcon className={classes.icon}/>
                <Typography variant='h6'>Photo Album</Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm">
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant='h5' align='center' color="textSecondary" paragraph>
                        Hello everyone this is a photo album and i'm trying to make this sentence as long as possible 
                    </Typography>
            <div className={classes.buttons}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">See my photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Secondary action</Button>
                </Grid>
            </Grid>
            </div>
            </Container>
            </div>
            <Container maxWidth="md" className={classes.cardGrid}>
                <Grid container 
                direction="row"
                justifyContent="center" 
                 spacing={4}>
                    {cards.map((item) =>(
                    <Grid item key={item} xs={12} sm={6} md={4} >
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" />
                        <CardContent className={classes.cardContent}>
                           <Typography gutterBottom varriant="h5" >
                                Heading
                           </Typography>
                           <Typography>
                            This is a media card section you can use to give any content
                           </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
        <footer className={classes.footer}>
            <Typography variant="h6" align="center">
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                something to give it to appear on the screen
            </Typography>
        </footer>
    </div>
  )
}

export default App