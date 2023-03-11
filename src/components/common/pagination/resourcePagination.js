import React from 'react'
import Pagination from 'react-js-pagination'
import styles from './pagination.module.css'
import { ArrowLeft } from "@/components/svgs/arrowLeft";
import { ArrowRight } from "@/components/svgs/arrowRight";

const resourcePagination = ({ activePage, projectList, handlePageChange, itemPerPage }) => {
    return (
        <div className={styles.pagination}>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={itemPerPage}
                totalItemsCount={projectList.length}
                onChange={handlePageChange}
                prevPageText={'Previous'}
                nextPageText={'Next'}
                firstPageText={<ArrowLeft />}
                lastPageText={<ArrowRight />}
                activeClass={styles.active}
            />
        </div>
    )
}
export default resourcePagination
