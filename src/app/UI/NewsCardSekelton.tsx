import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export const NewsCardSkeleton = React.memo((props: { loading?: boolean }) => {
    return (
        <Card>
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

            <CardContent>
                <Typography variant="h5">
                    <Skeleton variant="text" />
                </Typography>
                <Typography variant="subtitle1">
                    <Skeleton sx={{ maxWidth: '150px' }} variant="text" />
                </Typography>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </CardContent>
        </Card>
    )
})
