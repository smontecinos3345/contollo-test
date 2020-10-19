import * as React from "react";
import getDisplayName from "react-display-name";

// TODO: implement real layout
export function AdminLayout({ children }) {
  return (
    children
  );
}

const withAdminLayout = (Component) => {
  function WithAdminLayout({ ...rest }) {
    return (
      <AdminLayout>
        <Component {...rest} />
      </AdminLayout>
    );
  }

  WithAdminLayout.displayName = `withAdminLayout<${getDisplayName(Component)}>`;
  return WithAdminLayout;
};

export default withAdminLayout;

