import { CategoryServiceHandlers } from '../protos/gen/questionnaire/CategoryService';
import {
    GetCategories,
    GetCategory,
    CreateCategory,
    UpdateCategory,
    DeleteCategory
} from '../controllers/category.controller';

export const CategoryRoutes: CategoryServiceHandlers = {
    GetCategories,
    GetCategory,
    CreateCategory,
    UpdateCategory,
    DeleteCategory
} 