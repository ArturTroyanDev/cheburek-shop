"use client"
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '../Pagination/Pagination';
import styles from './CardList.module.scss'
import { setCurrentPage } from '../utils/redux/slices/filterSlice';
import { RootState } from '../utils/redux/store';



type ContainerProps = {
    children?: React.ReactNode; // React.ReactNode represents a React element, an array of React elements, or a string, number, or boolean.
};

// import { useContextValue } from "@/context/ContextValue";



export function CardList(props: ContainerProps) {
    const dispath = useDispatch()
    const currentPage = useSelector((state: RootState) => state.filter.currentPage)


    const onPageChange = (number: number) => {
        dispath(setCurrentPage(number))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {props.children}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onPageChange} />
        </div>
    )

}