import React from "react";
import Chart from "../../components/ChartSettings/Chart/Chart";
import Wrapper from "../../hoc/Wrapper";
import AdminsUpdates from "../../components/AdminsUpdates/AdminsUpdates";
import Modal from "../../components/UI/Modal/Modal";
import PageTile from "../../components/PageTile/PageTile";
import AdminsUpdatesModalData from "../../components/ModalsData/AdminsUpdatesModalData/AdminsUpdatesModalData";
import ContentWrapper from "../../hoc/ContentWrapper/ContentWrapper";
import { getPageTitleOf } from "../../AuxilaryFunctions/AuxilaryFunctions";

const Dashboard = () => {
  const pageTitle = getPageTitleOf("Dashboard")
  return (
    <Wrapper>
      <PageTile>{pageTitle}</PageTile>
      <ContentWrapper>
        <Chart type="Pie" />
        <Chart type="Area" />
        <AdminsUpdates />
      </ContentWrapper>

      <Modal>
        <AdminsUpdatesModalData />
      </Modal>
    </Wrapper>
  );
};

export default Dashboard;
