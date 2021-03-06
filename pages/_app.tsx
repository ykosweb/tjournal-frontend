import '../styles/globals.scss';
import 'macro-css';
import type {AppProps} from 'next/app';
import {MuiThemeProvider} from "@material-ui/core";
import theme from "../theme";
import Head from "next/head";
import {Provider} from "react-redux";
import store from "../redux/store";


{/*
 Возможный рефакторинг и доработки
 1. Форму регистрации и логина можно зарефакторить и сделать одним компонентом(возможно).
 2. Авторицазию или логинизацию сделать через async Thunk.

 */}


const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                <title>React TJournal</title>

                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"/>
            </Head>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </MuiThemeProvider>
        </>


    )
}

export default MyApp
