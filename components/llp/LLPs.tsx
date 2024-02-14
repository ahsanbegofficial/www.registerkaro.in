import Link from "next/link";
import { memo } from "react";

interface LLPProps {
  llp: {
    _id: string;
    LLPIN: string;
    LLPName: string;
  };
}

const LLPs: React.FC<LLPProps> = ({ llp }) => {
  return (
    <section className="card shadow bg-body p-3 mb-3 border-0 rounded-3 box-shadow">
      <Link href={`/llp/${llp._id}`}>
        <h6 className="my-2 text-capitalize fw-semibold text-primary">LLPIN: {llp.LLPIN}</h6>
      </Link>
      <hr />
      <h6 className="fw-semibold">Name: {llp.LLPName}</h6>
    </section>
  );
};

export default memo(LLPs);