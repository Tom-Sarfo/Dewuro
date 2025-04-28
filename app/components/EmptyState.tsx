import EmptyStateIcon from "~/svg/EmptyStateIcon";

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>No Creators On Board</h1>
      <EmptyStateIcon />
    </div>
  );
}

export default EmptyState;
