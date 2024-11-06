import { RequestHandler } from "express";

export default function wrapAsync(
  wrappedRoute: RequestHandler
): RequestHandler {
  return (req, res, next) => {
    Promise.resolve(wrappedRoute(req, res, next)).catch(next);
  };
}
