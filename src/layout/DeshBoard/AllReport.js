import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../share/loading/Loading';
import Reoprt from './Reoprt';

const AllReport = () => {
    const {
        isLoading,
        error,
        data: reports = [],
      } = useQuery({
        queryKey: ["report"],
        queryFn: () =>
          fetch("http://localhost:5000/report").then((res) => res.json()),
      });
      console.log(reports)
      if (isLoading) return <Loading></Loading>;
      if (error) return "An error has occurred: " + error.message;

      const handlereportDelete = (id) => {
        fetch(`http://localhost:5000/report/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              alert("delete successfully");
            }
          });
      };
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
      {reports?.map((report) =><Reoprt 
      key={report._id}
      report={report}
      handlereportDelete={handlereportDelete}
      ></Reoprt>)}
    </div>
    );
};

export default AllReport;