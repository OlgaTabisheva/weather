import React, {useEffect, useState} from "react";
import Select from "react-select";
import s from './Header.module.scss'
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";

interface Props {

}

export const Header = (props: Props) => {
    const options = [
        {value: 'city-1', label: 'Санкт-Петербург'},
        {value: 'city-2', label: 'Москва'},
        {value: 'city-3', label: 'Волгоград'}
    ]

    const colourStyles = {
        control: (styles: any) => (
            {
                ...styles,
                backgroundColor: 0 ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
                width: '194px',
                height: '37px',
                border: 'none',
                borderRadius: '10px',
                zIndex: 100,
            }),
        singleValue: (styles: any) => ({
            ...styles,
            color: 0 ? '#fff' : '#000',
        }),
    }

    const[theme,setTheme] = useState('light')

function changeTheme(){
setTheme(
    theme ==='light' ? 'dark' :  'light'
)


}
useEffect(()=>{
    const root=document.querySelector(':root') as HTMLElement
    root.style.setProperty(
        '--body-background-default',
        `var(--body-background-${theme})`
    )
}, [theme])

    return <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <GlobalSvgSelector id={"header-logo"}/>
            </div>
            <div className={s.title}>React weather</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}>
                <GlobalSvgSelector id={"change-theme"}/>
            </div>
            <Select
                defaultValue={options[0]}
                styles={colourStyles}
                options={options}
            />
        </div>
    </header>
}

export default Header;