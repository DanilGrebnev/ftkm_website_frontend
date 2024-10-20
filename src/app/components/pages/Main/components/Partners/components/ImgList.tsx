import { ImgComponent } from '@components/Ordinary/ImgComponent'
import s from './ImgList.module.scss'
import { data } from './data'
import { m } from 'framer-motion'

const ImgList = () => {
    return (
        <div className={s.imgWrapper}>
            {data.map((data, i) => (
                <m.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <ImgComponent
                        key={i}
                        {...data}
                    />
                </m.div>
            ))}
        </div>
    )
}

export default ImgList
ImgList.displayName = 'ImgList'
