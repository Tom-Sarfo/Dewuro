import { Fragment } from "react/jsx-runtime"

interface Row {
  left: React.ReactNode
  right: React.ReactNode
}

interface TableProps {
  rows: Row[]
  className?: string
}

const TwoColumnTable: React.FC<TableProps> = ({ rows, className }) => {
  return (
    <div className={`grid grid-cols-2 gap-y-4 ${className}`}>
      {rows.map((row, index) => (
        <Fragment key={index}>
          <div className="pl-2">{row.left}</div>
          <div className="pl-2">{row.right}</div>
        </Fragment>
      ))}
    </div>
  )
}

export default TwoColumnTable
