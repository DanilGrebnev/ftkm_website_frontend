import { Button } from '@mui/material'
import { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import s from './style.module.scss'
import {
    useLoginMutation,
    useAuthStatusQuery,
} from '@/app/shared/api/login/loginApiHooks'
import LoginIcon from '@mui/icons-material/Login'
import LoadingBtn from '@mui/lab/LoadingButton'
import { createPortal } from 'react-dom'
import { ModalComponent } from '@UI/ModalComponent'
import Input from './components/Input'

const Login = () => {
    const navigate = useNavigate()
    useAuthStatusQuery({ onSuccess: () => navigate('/cms') })

    const { mutate: authFn, isError, isPending } = useLoginMutation()
    const modal = document.getElementById('modal_block') as HTMLDivElement

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.target as HTMLFormElement)
        authFn({
            login: form.get('login') as string,
            password: form.get('password') as string,
        })
    }

    return (
        <div className={s.LoginContainer}>
            <form
                className={s.InputContainer}
                onSubmit={handleSubmit}
            >
                <h1>Система администрирования контента</h1>
                <Input
                    label='Логин'
                    name='login'
                    required={true}
                    inputProps={{
                        minLength: 3,
                    }}
                />
                <Input
                    name='password'
                    label='Пароль'
                    type='password'
                    required={true}
                    inputProps={{
                        minLength: 3,
                    }}
                />
                <div className={s.BtnGroup}>
                    <LoadingBtn
                        type={'submit'}
                        loading={isPending}
                        loadingPosition='end'
                        endIcon={<LoginIcon />}
                    >
                        Войти
                    </LoadingBtn>
                    {modal &&
                        createPortal(
                            <ModalComponent
                                text='Ошибка авторизации. Неправильный логин или пароль'
                                siverity='error'
                                isOpen={isError}
                            />,
                            modal
                        )}
                    <Link to='/'>
                        <Button
                            variant='text'
                            className={s.btn}
                        >
                            На главную
                        </Button>
                    </Link>
                </div>
                <div id='modal_block'></div>
            </form>
        </div>
    )
}

export default Login
