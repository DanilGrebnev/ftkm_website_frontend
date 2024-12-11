import { NewsCardItem } from '@components/Smart/NewsCardItem'
import { Grid } from '@components/containers/Grid'
import clsx from 'clsx'

import s from './s.module.scss'
import { Pagination } from '@mui/material'
import { globalVariables } from '@globalVariables'
import React, { useState } from 'react'
import { usePaginateNewsQuery } from '@/app/shared/api/news/paginateNewsQuery'

export const NewsContainer = () => {
    const [page, setPage] = useState(1)
    const newsSkip = globalVariables.limit * (page - 1)
    const { data } = usePaginateNewsQuery({ key: page, skip: newsSkip })

    const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }
    return (
        <>
            <Grid className={clsx(s['news-blog'])}>
                {!data ? (
                    <div></div>
                ) : (
                    <>
                        {data?.news.map((news) => (
                            <NewsCardItem
                                key={news?._id}
                                {...news}
                            />
                        ))}
                    </>
                )}
            </Grid>
            <Pagination
                page={page}
                onChange={handlePageChange}
                count={Math.ceil(
                    data?.newsCount
                        ? data?.newsCount / globalVariables.limit
                        : 1
                )}
                shape={'rounded'}
                variant={'outlined'}
            />
        </>
    )
}
