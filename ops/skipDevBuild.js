const skipBuildStepForDevUnlessWebhook = async () => {
  if (process.env.ENVIRONMENT === 'production') {
    console.log('✅ Not development environment, proceed');
    process.exit(1);
  } else {
    const vercelApiToken = process.env.VERCEL_API_TOKEN;
    const thisDeployment = await fetch(
      'https://api.vercel.com/v6/deployments?limit=1',
      {
        headers: {
          Authorization: `Bearer ${vercelApiToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res.deployments[0]);

    if (thisDeployment && Boolean(thisDeployment.meta.deployHookName)) {
      console.log('✅ Build triggered by webhook, proceed');
      process.exit(1);
    } else {
      console.log('❌ Build not triggered by webhook, do not proceed');
      process.exit(0);
    }
  }
};

skipBuildStepForDevUnlessWebhook();
