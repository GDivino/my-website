import '../../styles/contact.scss'
import { TextField, ThemeProvider, styled, Button } from '@mui/material'
import { default as  createMuiTheme } from '@mui/material/styles/createMuiStrictModeTheme'

const THEME = createMuiTheme({
    typography: {
        'fontFamily': `'Lexend Deca', 'sans-serif'`,
        'fontSize': 13,
        'fontWeight': 400,
        
        button: {
            textTransform: 'none'
        }
    },
})

const CustomizedTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#4120A9'
    },

    '& .MuiInput-underline:after': {
        borderBottomColor: '#4120A9'
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#black'
        },

        '&.Mui-focused fieldset': {
            fontWeight: 300,
            borderColor: '#4120A9',
        },
    }
})

const Contact = () => {
    return (
        <div id='contact'>
            <div className='container'>
                <h2 className='title'>Contact Me</h2>
                <p className='desc'>I do both Frontend and Backend Software Engineering, and I am currently looking for Devops Engineering opportunities. Send me an email by answering the form below!</p>
                <ThemeProvider theme={THEME}>
                    <form action='https://formsubmit.co/giodivino.tech@gmail.com' method='POST' className='form'>
                        <h3>Let's get in touch</h3>
                        <p>Feel free to contact me for job opportunities or coffee chats by answering this form!</p>
                        <CustomizedTextField
                            type='email'
                            name='email'
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined"
                            required
                            margin='normal'
                        />
                        <CustomizedTextField 
                            type='text'
                            name='name'
                            id="outlined-basic" 
                            label="Name" 
                            variant="outlined"
                            required
                            margin='normal'
                        />
                        <CustomizedTextField
                            type='text'
                            name='subject'
                            id="outlined-basic" 
                            label="Subject" 
                            variant="outlined"
                            margin='normal'
                        />
                        <CustomizedTextField 
                            type='text'
                            name='message'
                            id="outlined-basic" 
                            label="Message" 
                            variant="outlined"
                            required
                            margin='normal'
                            multiline
                            minRows={10}
                        />
                        <Button 
                            type='submit'
                            variant='contained'
                            className='button'
                        >
                            Send
                        </Button>
                    </form>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Contact