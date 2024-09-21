import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

// Define the props interface
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageItems = [];
  const showMiddlePages = currentPage >= 4 && currentPage <= totalPages - 3;

  // Add first three pages
  for (let i = 1; i <= (currentPage >= 6 ? 2 : 6); i++) {
    pageItems.push(
      <PaginationItem key={i}>
        <PaginationLink
          onClick={() => onPageChange(i)}
          href="#"
          className={`${
            currentPage == i
              ? "bg-white text-primary shadow"
              : "bg-primary text-primary-foreground shadow"
          } hover:bg-primary/90 hover:text-primary-foreground`}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  // Add ellipsis after start pages
  if (currentPage > 6) {
    pageItems.push(
      <PaginationItem>
        <PaginationEllipsis
          onClick={() => onPageChange(currentPage - 3)}
          className="bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground rounded-sm"
        />
      </PaginationItem>
    );
  }

  // Add middle pages
  if (currentPage >= 6 && currentPage + 3 < totalPages) {
    for (let i = currentPage; i <= currentPage + 2 && i <= totalPages; i++) {
      pageItems.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => onPageChange(i)}
            href="#"
            className={`${
              currentPage == i
                ? "bg-white text-primary shadow"
                : "bg-primary text-primary-foreground shadow"
            } hover:bg-primary/90 hover:text-primary-foreground`}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }
  // Add ellipsis before end pages
  if (totalPages > 6 && currentPage + 3 < totalPages) {
    pageItems.push(
      <PaginationItem>
        <PaginationEllipsis
          onClick={() => onPageChange(currentPage < 6 ? 7 : currentPage + 3)}
          className="bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground rounded-sm"
        />
      </PaginationItem>
    );
  }

  // Add last three pages
  for (let i = Math.max(4, totalPages - 2); i <= totalPages; i++) {
    pageItems.push(
      <PaginationItem key={i}>
        <PaginationLink
          href="#"
          onClick={() => onPageChange(i)}
          className={`${
            currentPage == i
              ? "bg-white text-primary shadow"
              : "bg-primary text-primary-foreground shadow"
          } hover:bg-primary/90 hover:text-primary-foreground`}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <Pagination className="!my-5">
      {currentPage > 1 && (
        <PaginationItem className="!list-none">
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            href="#"
            className="bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground mx-2"
          />
        </PaginationItem>
      )}
      <PaginationContent>{pageItems}</PaginationContent>
      {currentPage != totalPages && (
        <PaginationItem className="!list-none">
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            href="#"
            className="bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground mx-2"
          />
        </PaginationItem>
      )}
    </Pagination>
  );
};

export default PaginationComponent;
