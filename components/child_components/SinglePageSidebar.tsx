import React, { useEffect, useState } from "react";
import data from "../../assets/data/single-page-sidebar.json";
import Link from "next/link";
import axios from "axios";

interface Category {
  id: number;
  name: string;
  count: number;
}

const SinglePageSidebar: React.FC = () => {
  const NEWGLOBAL_VARIABLE = process.env.NEWGLOBAL_VARIABLE
  const { sidebar } = data;
  const { title2 } = sidebar;
  const [categoryList, setCategoryList] = useState<Category[] | null>(null);

  useEffect(() => {
    axios
      .get<Category[]>(
        `${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/categories?per_page=100`
      )
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => console.log(err));
  }, [NEWGLOBAL_VARIABLE]);

  return (
    <div className="sidebar">
      <div className="sidebar__category-box">
        <h3>{title2}</h3>
        <hr />
        <ul>
          {categoryList &&
            categoryList.map((data) => (
              <li key={data.id} className="list-unstyled">
                <Link href={`/blog/categories/${data.id}`}>
                  {`${data.name} (${data.count})`}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SinglePageSidebar;