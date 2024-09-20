import ReactPaginate from "react-paginate"; //-----------------------------------
import styles from './pagination.module.scss'

type Props = {
    currentPage: number,
    onChangePage: (number: number) => void,
}

export function Pagination({ currentPage, onChangePage }: Props) {

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={1}
            pageCount={6}
            forcePage={currentPage - 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )

}