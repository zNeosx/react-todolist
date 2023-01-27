import { FC } from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage: FC = () => {
  const error: any = useRouteError();

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <h1 className="text-center text-5xl">Oops!</h1>
        <p className="my-6 text-center">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-center text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};
