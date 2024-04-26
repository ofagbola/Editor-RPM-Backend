export const GRPC_ERROR_CODES: {
  [key: number]: { status_code: number; description: string };
} = {
  2: {
    status_code: 520,
    description: "UNKNOWN ERROR",
  },
  3: {
    status_code: 400,
    description: "BAD REQUEST",
  },
  4: {
    status_code: 408,
    description: "TIMEDOUT",
  },
  5: {
    status_code: 404,
    description: "NOT FOUND",
  },
  6: {
    status_code: 409,
    description: "ALREADY EXIST",
  },
  7: {
    status_code: 401,
    description: "UNAUTHORIZED",
  },
  13: {
    status_code: 500,
    description: "INTERNAL SERVER ERROR",
  },
  14: {
    status_code: 503,
    description: "UNAVAILABLE",
  },
  16: {
    status_code: 403,
    description: "FORBIDDEN",
  },
};
