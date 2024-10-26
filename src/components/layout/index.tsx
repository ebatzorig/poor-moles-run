import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }: React.PropsWithChildren) => { 
  return (
    <ThemedLayoutV2
      Header={Header} // This adds your custom header with CurrentUser
      Sider={Sidebar}
      Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Refine" />}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
