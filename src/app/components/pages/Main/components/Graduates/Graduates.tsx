import { ImgComponent } from '@/app/components/Ordinary/ImgComponent'
import { Grid } from '@/app/components/containers/Grid'

import s from './s.module.scss'

export const Graduates = () => {
    return (
        <Grid className={s.graduates}>
            <h2 className={s['main-title']}>Наши выпускники</h2>
            <Grid className={s['graduates-wrapper']}>
                <div className={s.item}>
                    <ImgComponent
                        alt='Кабанов В.А.'
                        src='/images/Кабанов.webp'
                    />
                    <p>
                        <b>Кабанов В.А.</b> – про&shy;рек&shy;тор по
                        учеб&shy;ной ра&shy;бо&shy;те ВолгГТУ, экс-пер&shy;вый
                        замес&shy;ти&shy;тель гла&shy;вы обла&shy;ст&shy;ной
                        адми&shy;ни&shy;стра&shy;ции и
                        пред&shy;се&shy;да&shy;тель об&shy;ла&shy;ст&shy;ной
                        думы.
                    </p>
                </div>
                <div className={s.item}>
                    <ImgComponent
                        alt='Конин А.Н.'
                        src='/images/Конин.webp'
                    />
                    <p>
                        <b>Конин А.Н.</b> – гене&shy;рал-лей&shy;те&shy;нант,
                        замес&shy;ти&shy;тель на&shy;чаль&shy;ника акаде&shy;мии
                        ФСБ Рос&shy;сии.
                    </p>
                </div>
                <div className={s.item}>
                    <ImgComponent
                        alt='Зюбан Н.А.'
                        src='/images/Зюбан.webp'
                    />
                    <p>
                        <b>Зюбан Н.А.</b> – про&shy;фес&shy;сор, док&shy;тор
                        тех&shy;ни&shy;чес&shy;ких наук,
                        за&shy;ве&shy;дую&shy;щий ка&shy;фед&shy;рой
                        «Тех&shy;но&shy;ло&shy;гия ма&shy;те&shy;риа&shy;лов»,
                        по&shy;чёт&shy;ный ра&shy;бот&shy;ник выс&shy;шего
                        про&shy;фес&shy;сиональ&shy;ного обра&shy;зова&shy;ния
                        РФ.
                    </p>
                </div>
                <div className={s.item}>
                    <ImgComponent
                        alt='Кидалов Н.А.'
                        src='/images/Кидалов.webp'
                    />
                    <p>
                        <b>Кидалов Н.А.</b> – профес&shy;сор, док&shy;тор
                        тех&shy;ни&shy;чес&shy;ких на&shy;ук,
                        заве&shy;дую&shy;щий ка&shy;фед&shy;рой «МиТЛП»,
                        на&shy;чаль&shy;ник управ&shy;ле&shy;ния на&shy;уки и
                        ин&shy;нова&shy;ций. Лау&shy;реат пре&shy;мии
                        Вол&shy;гог&shy;рад&shy;ской об&shy;лас&shy;ти в
                        сфе&shy;ре на&shy;уки и тех&shy;ники.
                    </p>
                </div>
            </Grid>
        </Grid>
    )
}
