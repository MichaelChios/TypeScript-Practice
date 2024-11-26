import {AnySchema} from 'yup';
import {Request, Response, NextFunction} from 'express';

const validate = (schema: AnySchema) => {

  return (req: Request, res: Response, next: NextFunction) => {

    schema.validate({
        body: req.body,
        query: req.query,
        params: req.params
    })

      .then(() => next())

      .catch((error: any) => res.status(400).json({ error: error.message }));

  };

};



export default validate;
