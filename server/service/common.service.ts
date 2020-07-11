// import { Response } from 'express';
// import * as httpStatus from  'http-status'
// import * as _ from 'lodash';

// export function successResponse(message: string, DATA: any, res: Response) {
//    return res.status(httpStatus.OK)
//     .({
//         STATUS: 'SUCCESS',
//         MESSAGE: message,
//         DATA
//     });
// }

// export function failureResponse(message: string, DATA: any, res: Response) {
//     res.status(httpStatus.NOT_FOUND)
//     .send({
//         STATUS: 'FAILURE',
//         MESSAGE: message,
//         DATA
//     });
// }

// export function insufficientParameters(res: Response) {
//     res.status(httpStatus.BAD_REQUEST)
//     .send({
//         STATUS: 'FAILURE',
//         MESSAGE: 'Insufficient parameters',
//         DATA: {}
//     });
// }

// export function noRecordFound(res: Response, record: any, collection: string) {
//     if (!record || _.isEmpty(record)) {
//     res.status(httpStatus.BAD_REQUEST)
//     .send({
//         STATUS: 'FAILURE',
//         MESSAGE: 'No Record Found in collecttion' + ' ' + collection,
//         DATA: {}
//     });
//       }
//       return record;
    
// }