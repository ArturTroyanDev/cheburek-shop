"use client"
import React from 'react'
import styles from "./sidebar.module.scss"
import classNames from 'classnames';
import { useIsWindowBigger } from "../utils/hooks/useWindowWitdthResize"
import { Categories } from '../Categories/Categories';

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setCategoryId } from '../../redux/slices/filterSlice'
import { toggleSidebarFlag } from '../../redux/slices/flagSlice'

// console.log(process.browser)


// filterSlice
export function Sidebar(dataReceiver: any) {
    const dispatch = useAppDispatch()
    const sidebarFlag = useAppSelector((state) => state.flag.sidebarFlag)
    const categoryId = useAppSelector((state) => state.filter.categoryId)
    useIsWindowBigger(1215) ? dispatch(toggleSidebarFlag(false)) : null

    React.useEffect(() => {
        sidebarFlag ? window.document.body.style.overflow = 'hidden' : window.document.body.style.overflow = 'unset';
    }, [sidebarFlag]);


    const isSidebarWrapperActive = classNames(styles.wrapper, {
        [styles.active]: sidebarFlag
    });
    const isSidebarActive = classNames(styles.sidebar, {
        [styles.active]: sidebarFlag
    });

    return (
        <div className={isSidebarWrapperActive} onClick={() => dispatch(toggleSidebarFlag(false))}>
            <div className={isSidebarActive} onClick={e => e.stopPropagation()}>
                <Categories id={categoryId} onClickCategory={(id: number) =>  dispatch(setCategoryId(id))} />
            </div>
        </div>
    )
}



