import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  onPageChange: (nextPage: number) => void;
}

export default function Pagination({ currentPage, onPageChange }: PaginationProps) {
  const totalPages = 5;

  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
