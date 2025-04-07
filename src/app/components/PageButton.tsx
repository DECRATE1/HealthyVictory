export default function PageButton({
  pageNumber,
  currentPage,
  handleCurrentPage,
}: {
  pageNumber: number;
  currentPage: boolean;
  handleCurrentPage: (pageNumber: number) => void;
}) {
  return (
    <>
      <button
        onClick={() => handleCurrentPage(pageNumber)}
        className="size-[60px] max-[1280px]:size-[48px] border-2 rounded-full font-raleway font-light text-[24px] flex items-center justify-center text-center"
        style={{
          backgroundColor: currentPage ? "#DEFEFF" : "",
          borderWidth: currentPage ? 0 : "",
          fontWeight: currentPage ? 600 : "",
        }}
      >
        {pageNumber}
      </button>
    </>
  );
}
