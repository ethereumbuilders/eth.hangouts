ServiceConfiguration.configurations.upsert(
  { service: "github" },
  {
    $set: {
      clientId: "clientId",
      loginStyle: "popup",
      secret: "secret client id"
    }
  }
);
ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  {
    $set: {
      clientId: "clientId",
      loginStyle: "popup",
      secret: "secret client id"
    }
  }
);
