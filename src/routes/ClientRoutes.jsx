import React from "react";
import { Switch, Route } from "react-router-dom";
import path from "../resources/path";
import AchievementsScreens from "../screens/Achievements/screens/AchievementsScreens";
import ContactScreens from "../screens/ContactScreens/screens/ContactScreens";
import DetailsScreens from "../screens/DetailsProduct/screens/DetailsScreens";
import DetailsShrimpScreens from "../screens/DetailsShrimp/screens/DetailsShrimpScreens";
import HomeScreens from "../screens/HomeScreens/screens/HomeScreens";
import IntroduceScreens from "../screens/IntroduceScreens/screens/IntroduceScreens";
import LibraryScreens from "../screens/Library/screens/LibraryScreens";
import NewsScreens from "../screens/NewsScreens/screens/NewsScreens";
import ProccessScreens from "../screens/ProccessScreens/screens/ProccessScreens";
import ProductScreens from "../screens/ProductScreens/screens/ProductScreens";
import ShrimpScreens from "../screens/ShrimpScreens/screens/ShrimpScreens";

export default function ClientRoutes() {
  return (
    <Switch>
      <Route
        exact
        path={path.HOME}
        render={() => {
          return <HomeScreens />;
        }}
      />

      <Route
        exact
        path={path.INTRODUCE}
        render={() => {
          return <IntroduceScreens />;
        }}
      />

      <Route
        exact
        path={path.NEWS}
        render={() => {
          return <NewsScreens />;
        }}
      />

      <Route
        exact
        path={path.PROCCESS}
        render={() => {
          return <ProccessScreens />;
        }}
      />

      <Route
        exact
        path={path.SHRIMP}
        render={() => {
          return <ShrimpScreens />;
        }}
      />

      <Route
        exact
        path={path.PRODUCT}
        render={() => {
          return <ProductScreens />;
        }}
      />

      <Route
        exact
        path={path.CONTACT}
        render={() => {
          return <ContactScreens />;
        }}
      />

      <Route
        exact
        path={path.LIBRARY}
        render={() => {
          return <LibraryScreens />;
        }}
      />

      <Route
        exact
        path={path.ACHIEVEMENTS}
        render={() => {
          return <AchievementsScreens />;
        }}
      />

      <Route
        exact
        path={path.DETAILS}
        render={(props) => {
          return <DetailsScreens {...props} />;
        }}
      />

      <Route
        exact
        path={path.DETAILSSHRIMP}
        render={(props) => {
          return <DetailsShrimpScreens {...props} />;
        }}
      />
    </Switch>
  );
}
