export const throw500Error = (_req, res, next) => {
    res.status(500);
    next(new Error('Database error!'));
}
  
export const throw400Error = (message, _req, res, next) => {
    res.status(400);
    next(new Error(message));
}