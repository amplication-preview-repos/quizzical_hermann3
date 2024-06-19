import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InventoryDataList } from "./inventoryData/InventoryDataList";
import { InventoryDataCreate } from "./inventoryData/InventoryDataCreate";
import { InventoryDataEdit } from "./inventoryData/InventoryDataEdit";
import { InventoryDataShow } from "./inventoryData/InventoryDataShow";
import { PosDataList } from "./posData/PosDataList";
import { PosDataCreate } from "./posData/PosDataCreate";
import { PosDataEdit } from "./posData/PosDataEdit";
import { PosDataShow } from "./posData/PosDataShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { CustomerDataList } from "./customerData/CustomerDataList";
import { CustomerDataCreate } from "./customerData/CustomerDataCreate";
import { CustomerDataEdit } from "./customerData/CustomerDataEdit";
import { CustomerDataShow } from "./customerData/CustomerDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RestaurantManagementTool"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InventoryData"
          list={InventoryDataList}
          edit={InventoryDataEdit}
          create={InventoryDataCreate}
          show={InventoryDataShow}
        />
        <Resource
          name="PosData"
          list={PosDataList}
          edit={PosDataEdit}
          create={PosDataCreate}
          show={PosDataShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="CustomerData"
          list={CustomerDataList}
          edit={CustomerDataEdit}
          create={CustomerDataCreate}
          show={CustomerDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
