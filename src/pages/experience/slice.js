import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    introduction:
        'I started my career as Website Developer in an IT company since October 2018.',
    technologies: {
        frontend: [
            {
                technology: 'HTML',
                rate: 'Experienced',
            },
            {
                technology: 'CSS',
                rate: 'Experienced',
            },
            {
                technology: 'SASS',
                rate: 'Experienced',
            },
            {
                technology: 'Jest',
                rate: 'Experienced',
            },
            {
                technology: 'Vue JS',
                rate: 'Intermidiate',
            },
            {
                technology: 'React JS',
                rate: 'Experienced',
            },
            {
                technology: 'jQuery',
                rate: 'Experienced',
            },
            {
                technology: 'Unit Testing',
                rate: 'Experienced',
            },
            {
                technology: 'Webpack',
                rate: 'Experienced',
            },
            {
                technology: 'Gulp',
                rate: 'Basic',
            },
            {
                technology: 'Javascript',
                rate: 'Experienced',
            },
        ],
        backend: [
            {
                technology: 'PHP',
                rate: 'Intermidiate',
            },
            {
                technology: 'Laravel',
                rate: 'Intermidiate',
            },
            {
                technology: 'MySQL',
                rate: 'Intermidiate',
            },
        ],
    },
}

const experienceSlice = createSlice({
    name: 'experience',
    initialState: initialState,
    reducers: {},
})

const provideData = (state) => state.experience

export default experienceSlice.reducer

export { provideData }
