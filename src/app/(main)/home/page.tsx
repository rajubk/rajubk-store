import React, { Suspense } from "react";
import HomeWrapper from "./home-wrapper";
import Loading from "../components/loading";
import { ErrorBoundary } from "react-error-boundary";
import Container from "@/app/ui/container";
import { logger } from "@/utils/pino";

const HomePage = () => {
  logger.info("Home Page");
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<Loading />}>
        <Container>
          <HomeWrapper />
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
};

export default HomePage;
