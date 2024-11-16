import React, { Suspense } from "react";
import HomeWrapper from "./home-wrapper";
import Loading from "../components/loading";
import { ErrorBoundary } from "react-error-boundary";

const HomePage = () => {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<Loading />}>
        <HomeWrapper />
      </Suspense>
    </ErrorBoundary>
  );
};

export default HomePage;
