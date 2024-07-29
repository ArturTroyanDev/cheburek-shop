"use client"
import React from 'react'
import styles from "./sidebar.module.scss"
import Image from "next/image"
import classNames from 'classnames';
import { isWindowBigger } from "../utils/assets/useWindowWitdthResize/useWindowWitdthResize"
import { Categories } from '../Categories/Categories';

import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../utils/redux/store'

import { setCategoryId } from '../utils/redux/slices/filterSlice'
import { setSidebarFlag } from '../utils/redux/slices/flagSlice'

// console.log(process.browser)



export function Sidebar(dataReceiver: any) {
    const dispatch = useDispatch()
    const sidebarFlag = useSelector((state: RootState) => state.flag.sidebarFlag)
    
    const onChangeSidebarFlag = (flag: boolean) => {
        dispatch(setSidebarFlag(flag))
    }



    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    
    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id))
    }





    React.useEffect(() => {
        sidebarFlag ? window.document.body.style.overflow = 'hidden' : window.document.body.style.overflow = 'unset';
    }, [sidebarFlag]);

    isWindowBigger(1215) ? onChangeSidebarFlag(false) : null

    const isSidebarWrapperActive = classNames(styles.wrapper, {
        [styles.active]: sidebarFlag
    });
    const isSidebarActive = classNames(styles.sidebar, {
        [styles.active]: sidebarFlag
    });

    return (
        <div className={isSidebarWrapperActive} onClick={() => onChangeSidebarFlag(false)}>
            <div className={isSidebarActive} onClick={e => e.stopPropagation()}>
                {/* <ProductSearch /> */}
                <Categories id={categoryId} onClickCategory={onChangeCategory} />
            </div>
        </div>
    )
}



