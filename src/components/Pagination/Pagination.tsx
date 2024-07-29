import ReactPaginate from "react-paginate"; //-----------------------------------
import styles from './pagination.module.scss'


export function Pagination(params: any) {

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => console.log(event)}
            pageRangeDisplayed={1}
            pageCount={4}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )

}