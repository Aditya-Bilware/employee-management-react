import Wrapper from "../layout/Wrapper";

const EmployeeItemSkeleton = () => {
  return (
    <Wrapper>
      <li className="list-group-item bg-dark text-white border-0 px-4 py-3">
        <div className="d-flex flex-column flex-md-row gap-3 align-items-md-center">
          {/* avatar */}
          <div className="skeleton skeleton-avatar mx-auto mx-md-0"></div>

          {/* text content */}
          <div className="flex-grow-1 d-flex flex-column gap-2 text-center text-md-start">
            <div className="skeleton skeleton-name"></div>
            <div className="skeleton skeleton-email"></div>
            <div className="skeleton skeleton-bio"></div>
          </div>

          {/* action icons */}
          <div className="d-flex justify-content-center justify-content-md-end gap-3 mt-3 mt-md-0">
            <div className="skeleton skeleton-icon"></div>
            <div className="skeleton skeleton-icon"></div>
            <div className="skeleton skeleton-icon"></div>
          </div>
        </div>
      </li>
    </Wrapper>
  );
};

export default EmployeeItemSkeleton;
