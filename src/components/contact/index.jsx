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
                <h2 data-aos='fade-right' className='title'>Contact Me</h2>
                <p data-aos='fade-left' className='desc'>I offer DevOps engineering services. Let me know if you want to collaborate on something! 😊<br/><br/>Send me an email through the form below.</p>
                <ThemeProvider theme={THEME}>
                    <form data-aos='fade-right' action='https://formsubmit.co/77dad057a76794f5a701327436e6e08f' method='POST' className='form'>
                        <h3>Let's get in touch</h3>
                        <p>Reach out to me regarding job opportunities, tech work, or even a simple coffee chat if you'd like!</p>
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
