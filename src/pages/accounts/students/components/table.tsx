import { LoadingTableLottie } from "@/components";
import { DataTable } from "@/components/data-table";
import ErrorBoundaryComponent from "@/components/error/error-boundary";
import { useGetUsersQuery } from "@/store/api/v1/endpoints/admin";
import { StudentType, UserTypes } from "@/types/accounts";
import { PaginationState, TableOptions } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { columns } from "./columns";

export function StudentsTable() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [tableData, setTableData] = useState<StudentType[]>([]);
  const [totalRecord, setTotalRecord] = useState(0);

  const {
    data: queryData,
    isLoading,
    error,
  } = useGetUsersQuery({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    user_types: UserTypes.STUDENT,
  });

  useEffect(() => {
    if (queryData) {
      const { items, meta } = queryData.data;

      const data = (items || []).map(({ common_info, extra_info }) => {
        const student = extra_info?.student;
        return {
          ...common_info,
          ...student,
        };
      });

      setTableData(data as StudentType[]);
      setTotalRecord(meta.total);
    }
  }, [queryData]);

  if (isLoading) {
    return (
      <div className=" flex justify-center pt-10">
        <div className=" w-[250px] ">
          <LoadingTableLottie />
        </div>
      </div>
    );
  } else {
    if (error) {
      return (
        <div className="h-full">
          <ErrorBoundaryComponent />;
        </div>
      );
    }
    return (
      <DataTable
        data={tableData}
        columns={columns}
        state={{ pagination }}
        options={
          {
            onPaginationChange: setPagination,
            manualPagination: true,
            pageCount: Math.ceil(totalRecord / pagination.pageSize),
          } as TableOptions<StudentType>
        }
      />
    );
  }
}
