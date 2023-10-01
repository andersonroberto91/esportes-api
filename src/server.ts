import { app } from "./app";
import { envSchema } from "./env";

app.listen({
  host: '0.0.0.0',
  port: envSchema.PORT
}).then(() => {console.log('Server starded.')})

