import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from 'src/pages/about/slice'
import approuteReducer from 'src/approute/slice'
import homeReducer from 'src/pages/home/slice'
import experienceReducer from 'src/pages/experience/slice'
import projectsReducer from 'src/pages/projects/slice'

let store = configureStore({
    reducer: {
        about: aboutReducer,
        approute: approuteReducer,
        home: homeReducer,
        experience: experienceReducer,
        projects: projectsReducer,
    },
})

export default store
