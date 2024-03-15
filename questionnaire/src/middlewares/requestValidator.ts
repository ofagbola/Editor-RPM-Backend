import { ValidationOptions, Schema, ValidationErrorItem } from 'joi'

export const RequestValidator = async (schema: Schema, req: any, res: any) => {
    const validateOptions: ValidationOptions = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true   
    }

    try {
        await schema.validateAsync(req.request, validateOptions);

        return ({status: true, message: "Successful!"})
    } catch(err: any) {
        const errors: string[] = []
        err.details.forEach((e: ValidationErrorItem)=>{
            errors.push(e.message)
        })
        
        return ({status: false, message: errors})
    }
}