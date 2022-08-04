import buildServer from "./server";

const server = buildServer();

async function main() {
  try {
    await server.ready();
    await server.listen({ port: server.config.PORT, host: "0.0.0.0" });
    console.log("Server ready at http://localhost:" + server.config.PORT);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
