import { ImgComponent } from '@components/Ordinary/ImgComponent'
import { v4 } from 'uuid'

import s from './ImgList.module.scss'
import { data } from './data'

const ImgList = () => {
    return (
        <div className={s.imgWrapper}>
            {data.map(data => (
                <ImgComponent
                    key={v4()}
                    {...data}
                />
            ))}
        </div>
    )
}

export default ImgList
ImgList.displayName = 'ImgList'
