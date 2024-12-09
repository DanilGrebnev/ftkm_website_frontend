import React from 'react'

import s from './s.module.scss'

interface IEmployeeItem<S = string> {
    name: S
    description: S
    link: S
}

export const EmployeeItem: React.FC<IEmployeeItem> = ({
    link,
    name,
    description,
}) => {
    return (
        <div className={s.EmployeeItem}>
            <a href={link}>{name}</a>
            <p>{description}</p>
        </div>
    )
}
