import { createNextApiHandler } from '@trpc/server/adapters/next';
import { createTRPCContext } from '../../../server/trpc';
import { appRouter } from '../../../server/root';

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError: ({ path, error }) => {
    console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`);
  },
});
