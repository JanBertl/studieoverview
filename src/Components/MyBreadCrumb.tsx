import { Breadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import { useLocation } from "react-router";

export default function MyBreadCrumb() {
  const pathInfo = useLocation();
  const { pathname } = pathInfo;

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>{pathname}</BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}
