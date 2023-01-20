import { useSelector, dispatch, useDispatch } from 'react-redux'
import { setDoneLoading } from 'src/approute/slice'

export default (module) => {
    const dispatch = useDispatch()

    dispatch(setDoneLoading())

    return { default: module.default }
}
