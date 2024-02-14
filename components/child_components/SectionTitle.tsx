import React from "react";

interface SectionTitleProps {
  subtitle?: string;
  title?: string;
  description?: string;
  direction?: "center" | "left";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  direction,
}) => {
  return (
    <>
      {direction === "center" ? (
        <div className="section-title-center">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              {subtitle && <p className="badge-text">{subtitle}</p>}
            </div>
          </div>
        </div>
      ) : (
        <div className={"section-title-left"}>
          {subtitle && <p className="badge-text">{subtitle}</p>}
          {description && <p className="mb-4">{description}</p>}
        </div>
      )}
    </>
  );
};

export default SectionTitle;