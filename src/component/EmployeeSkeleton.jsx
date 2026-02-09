import Wrapper from "../layout/Wrapper";

const EmployeeItemSkeleton = () => {
  return (
    <Wrapper>
      <li className="list-group-item bg-dark text-white d-flex align-items-center gap-3 border-secondary px-4 py-3 border-0">
        {/* profile image */}
        <div className="skeleton skeleton-avatar"></div>

        {/* text content */}
        <div className="flex-grow-1 d-flex flex-column gap-2">
          <div className="skeleton skeleton-name"></div>
          <div className="skeleton skeleton-email"></div>
          <div className="skeleton skeleton-bio"></div>
        </div>

        {/* action icons */}
        <div className="d-flex gap-2">
          <div className="skeleton skeleton-icon"></div>
          <div className="skeleton skeleton-icon"></div>
          <div className="skeleton skeleton-icon"></div>
        </div>
      </li>{" "}
    </Wrapper>
  );
};

export default EmployeeItemSkeleton;
