import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "../index.css";

export default function MyBreadCrumb() {
  const pathInfo = useLocation();
  const { pathname } = pathInfo;
  let pathArr = pathname.split("/");
  return (
    <>
      <Breadcrumb>
        {pathArr.map((element: string, index: number) => (
          <>
            <Link to={pathArr.slice(0, index + 1).join("/")} key={index}>
              <BreadcrumbItem>{element}</BreadcrumbItem>
            </Link>
          </>
        ))}
      </Breadcrumb>
    </>
  );
}
