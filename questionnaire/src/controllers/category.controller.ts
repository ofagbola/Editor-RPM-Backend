//  import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createCategory,
  findUniqueCategory,
  findCategory,
  updateCategory,
  deleteCategory
} from '../services/category.services';
import { CreateCategory__Output } from '../protos/gen/questionnaire/CreateCategory';
import { CategoryResponse__Output } from '../protos/gen/questionnaire/CategoryResponse';
import { CategoriesResponse__Output } from '../protos/gen/questionnaire/CategoriesResponse';
import { GetAllCategories__Output } from '../protos/gen/questionnaire/GetAllCategories'; 
import { GetOneCategory__Output } from '../protos/gen/questionnaire/GetOneCategory';
import { CategoryMessage__Output } from '../protos/gen/questionnaire/CategoryMessage';
import { UpdateCategory__Output } from '../protos/gen/questionnaire/UpdateCategory';
import { DeleteCategory__Output } from '../protos/gen/questionnaire/DeleteCategory';
import { deserializeUser } from '../middlewares/deserializeUser';
import {
  CreateCategoryRequest,
  GetAllCategoryRequest,
  GetCategoryRequest,
  UpdateCategoryRequest,
  DeleteCategoryRequest
} from '../validators/category.validator';
import { RequestValidator } from '../middlewares/requestValidator';

export const CreateCategory = async (
  req: grpc.ServerUnaryCall<CreateCategory__Output, CategoryMessage__Output>,
  res: grpc.sendUnaryData<CategoryMessage__Output>
) => {
  try {
    const validate = await RequestValidator(CreateCategoryRequest, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    await createCategory({
      name: req.request.name,
      users: [{
        id: user.id,
        action: "created",
        date: new Date()
      }],
      status: req.request.status,
    });

    res(null, {code: grpc.status.OK, message: "Category added successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Category already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const GetCategories = async (
  req: grpc.ServerUnaryCall<GetAllCategories__Output, CategoriesResponse__Output>,
  res: grpc.sendUnaryData<CategoriesResponse__Output>
) => {
  try {
    const validate = await RequestValidator(GetAllCategoryRequest, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const categories = await findCategory({ ...req.request.request_query });
    const formattedCategories: any = categories.map(category => {
      const users: any = category.users;
      const result = [];

      for(let user of users) {
        const dateObject = new Date(user.date);

        if(user) {
          result.push({
            ...user,
            date: {
              seconds: Math.floor(dateObject.getTime() / 1000),
              nanos: dateObject.getMilliseconds() * 1000000
            }
          })
        }
      }

      return ({
        ...category,
        users: result,
        created_at: { 
          seconds: (category.created_at.getTime() / 1000).toString(), 
          nanos: category.created_at.getMilliseconds() * 1000000
        },
        updated_at: { 
          seconds: (category.updated_at.getTime() / 1000).toString(), 
          nanos: category.updated_at.getMilliseconds() * 1000000
        }
      })
    });
    
    res(null, {
      code: grpc.status.OK,
      data: formattedCategories
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const GetCategory = async (
  req: grpc.ServerUnaryCall<GetOneCategory__Output, CategoryResponse__Output>,
  res: grpc.sendUnaryData<CategoryResponse__Output>
) => {
  try {
    const validate = await RequestValidator(GetCategoryRequest, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const category = await findUniqueCategory({ id: req.request.id });

    if (!category) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'Category not found!',
      });
      return;
    }

    const users: any = category.users;
    const result = [];

    for(let user of users) {
      const dateObject = new Date(user.date);

      if(user) {
        result.push({
          ...user,
          date: {
            seconds: Math.floor(dateObject.getTime() / 1000),
            nanos: dateObject.getMilliseconds() * 1000000
          }
        })
      }
    }

    res(null, {
      code: grpc.status.OK,
      data: {
        id: category.id,
        name: category.name,
        users: result,
        status: category.status,
        created_at: { 
          seconds: (category.created_at.getTime() / 1000).toString(),
          nanos: category.created_at.getMilliseconds() * 1000000 
        },
        updated_at: { 
          seconds: (category.updated_at.getTime() / 1000).toString(),
          nanos: category.updated_at.getMilliseconds() * 1000000  
        },
      },
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const UpdateCategory = async (
  req: grpc.ServerUnaryCall<UpdateCategory__Output, CategoryMessage__Output>,
  res: grpc.sendUnaryData<CategoryMessage__Output>
) => {
  try {
    const validate = await RequestValidator(UpdateCategoryRequest, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const category = await findUniqueCategory({ id: req.request.id });

    if(!category) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'Category not found!',
      });
      return;
    }

    const users: any = [...category.users, {
      id: user.id,
      action: "modified",
      date: new Date()
    }];

    await updateCategory({id : req.request.id}, {
      name: req.request.name,
      users: users,
      status: req.request.status,
    });

    res(null, {code: grpc.status.OK, message: "Category updated successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Category already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const DeleteCategory = async (
  req: grpc.ServerUnaryCall<DeleteCategory__Output, CategoryMessage__Output>,
  res: grpc.sendUnaryData<CategoryMessage__Output>
) => {
  try {
    const validate = await RequestValidator(DeleteCategoryRequest, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    await deleteCategory({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      message: "Category deleted successfully"
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};