import { LoadingButton } from '@UI/LoadingButton'
import { ModalComponent } from '@UI/ModalComponent'
import { useFetchLogin } from '@hooks/useFetchLogin'
import React from 'react'
import { createPortal } from 'react-dom'

interface ILoginButton {
    loginRef: React.RefObject<HTMLInputElement>
    passRef: React.RefObject<HTMLInputElement>
}

export const SubmitBtn: React.FC<ILoginButton> = ({ loginRef, passRef }) => {
    const { fetchLogin, isLoading, error } = useFetchLogin()

    const modal = document.getElementById('modal_block') as HTMLDivElement

    return (
        <>
            <LoadingButton
                onClick={() =>
                    fetchLogin({
                        login: loginRef?.current?.value as string,
                        password: passRef?.current?.value as string,
                    })
                }
                loading={isLoading}
                text="войти"
            />
            {modal &&
                createPortal(
                    <ModalComponent
                        text="Ошибка авторизации. Неправильный логин или пароль"
                        siverity="error"
                        isOpen={error}
                    />,
                    modal
                )}
        </>
    )
}
