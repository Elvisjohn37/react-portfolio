import { createSlice } from '@reduxjs/toolkit'
import firstProject from 'src/utils/assets/images/338a.png'
import gobetx from 'src/utils/assets/images/gobetx.png'
import gosdsb from 'src/utils/assets/images/gosdsb.png'
import zircon from 'src/utils/assets/images/zircon.png'

const initialState = {
    introduction:
        'The nature of our projects are about online game casino that is exclusive in Indonesia',
    projects: [
        {
            name: '338a',
            url: '//www.338a.com/',
            src: firstProject,
        },
        {
            name: 'GOSDSB',
            url: '//www.gosdsb.com/',
            src: gobetx,
        },
        {
            name: 'GOBETX',
            url: '//www.gobetx.com/',
            src: gosdsb,
        },
        {
            name: 'ZIRCON',
            url: '//games.classicku.com/',
            src: zircon,
        },
    ],
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState: initialState,
    reducers: {},
})

const provideData = (state) => state.projects

export default projectsSlice.reducer

export { provideData }
