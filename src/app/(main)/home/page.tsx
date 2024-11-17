import React, { Suspense } from "react";
import HomeWrapper from "./home-wrapper";
import Loading from "../components/loading";
import { ErrorBoundary } from "react-error-boundary";
import Container from "@/app/ui/container";

const HomePage = () => {
  console.log("dkjfkjds", process.env.NEXT_PUBLIC_BASE_URL);

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
