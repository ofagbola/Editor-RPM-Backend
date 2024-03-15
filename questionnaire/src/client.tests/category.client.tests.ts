import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protos/gen/services';
import customConfig from '../config/default';
import { 
  GetCategoryConstants,
  GetCategoryConstant,
  CreateCategoryConstant,
  UpdateCategoryConstant,
  DeleteCategoryConstant 
} from '../constants/category.constant';

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const PORT = customConfig.port;
const URL = customConfig.url;
const PROTO_FILE = '../protos/services.proto';
const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE),
  options
);

const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const client = new proto.questionnaire.CategoryService(
  `${URL}:${PORT}`,
  grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err: any) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});

function onClientReady() {
  // CreateCategory();
  GetCategories();
  // GetCategory();
  // UpdateCategory();
  // DeleteCategory();
}

function GetCategories() {
  const data = GetCategoryConstants();
  
  client.getCategories(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(res);
    }
  );
}

function GetCategory() {
  const data = GetCategoryConstant();

  client.getCategory(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function CreateCategory() {
  const data = CreateCategoryConstant();

  client.createCategory(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function UpdateCategory() {
  const data = UpdateCategoryConstant();

  client.updateCategory(data, (err: any, res: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function DeleteCategory() {
  const data = DeleteCategoryConstant();

  client.deleteCategory(data, (err: any, res: any) => {
      if (err) {
        console.error(err);  
        return;
      }
      console.log(res);
    }
  );
}
