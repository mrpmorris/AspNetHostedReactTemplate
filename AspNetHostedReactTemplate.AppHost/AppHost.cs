var builder = DistributedApplication.CreateBuilder(args);

var webServer = builder.AddProject<Projects.AspNetHostedReactTemplate_WebServer>("web-server");
var webClient = builder
    .AddNpmApp(
        name: "web-client",
        workingDirectory: "../AspNetHostedReactTemplate.WebClient",
        scriptName: "dev"
    )
    .WithEnvironment("VITE_API_BASE", webServer.GetEndpoint("https"))
    .WithHttpEndpoint(65002, env: "PORT")
    .WithExternalHttpEndpoints()
    .WaitFor(webServer);

builder.Build().Run();
