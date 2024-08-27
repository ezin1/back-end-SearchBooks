import { setupApp } from "./config/app";
import env from "./config/env";
import {logger} from "../shared/utils/logger";

export const app = setupApp();
const port = env.port;

export const server = app.listen(port, () => {
    logger.info(`Server running at: http://localhost:${port}`);
  });
  