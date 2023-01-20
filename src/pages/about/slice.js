import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    introduction: 'Developing websites using modern technologies',
    moreInformation:
        'I am a Fullstack Web Developer for more than 4 years. I can provide a clean and modern looking websites for great user experience.',
    firstName: 'Elvis john',
    middleName: 'Reyes',
    lastName: 'Cayetano',
    role: 'Fullstack Developer',
    image: '',
    mobileNumber: '09266609682',
    email: 'elvisjohncayetano37@gmail.com',
    interest: [],
    education: 'Bachelor Of Science in Information Technology.',
    currentTechnologies: [
        'react',
        'css3',
        'html5',
        'unitTest',
        'sass',
        'webpack',
        'php',
        'laravel',
        'jest',
    ],
    socialMidiaLinks: [
        {
            link: '//www.facebook.com/elvisjohn.cayetano.7',
            name: 'facebook',
        },
        {
            link: '#',
            name: 'skype',
        },
        {
            link: '#',
            name: 'viber',
        },
        {
            link: '#',
            name: 'github',
        },
    ],
}

const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {},
})

const provideData = (state) => state.about

export default aboutSlice.reducer

export { provideData }
