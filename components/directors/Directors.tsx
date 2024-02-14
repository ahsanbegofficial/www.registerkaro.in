import React from "react";
import Link from "next/link";

const Directors = ({ director }: any) => {
  if (!director) return null;

  return (
    <section className="card shadow bg-body p-3 mb-3 border-0 rounded-3 box-shadow">
      <Link href={`/directors/${director._id}`}>
        <h6 className="my-2 text-capitalize fw-semibold text-primary">
          {director.nameOfApplicant}
        </h6>
      </Link>
      <hr />
      <div className="d-flex justify-content-between align-items-center row row-cols-lg-3 row-cols-1 d-grid gap-1">
        <h6 className="fw-semibold">City: {director.paddCity}</h6>
        <h6 className="fw-semibold">State: {director.paddState}</h6>
        <h6 className="fw-semibold">Country: {director.paddCountry}</h6>
        <h6 className="fw-semibold">Nationality: {director.nationality}</h6>
      </div>
    </section>
  );
};

export default Directors;