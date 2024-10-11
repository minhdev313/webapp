import { ColumnDef } from "@tanstack/react-table";
import Menu from "./Menu";
import { TopicType } from "@/types/topic";

export const columns: ColumnDef<TopicType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "teacher",
    header: "Teacher",
    cell: ({ row }) => (
      <div>{(row.getValue("teacher") as { name: string }).name}</div>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (<Menu row={row} />);
    },
  },
];
