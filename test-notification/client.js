const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = '../auth/src/protos/auth.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const load = () => {
  try {
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
    const AuthServices =
      grpc.loadPackageDefinition(packageDefinition).AuthServices;

    const client = new AuthServices(
      'dns:///localhost:4000',
      grpc.credentials.createInsecure()
    );

    client.verifyAccount(
      {
        code: 'ok',
        email: 'tester@gmail.com',
      },
      (error, newNews) => {
        if (error) {
          console.log(error, error.message, 'heree');
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

load();
