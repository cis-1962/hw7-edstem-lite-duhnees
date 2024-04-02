export const throw500Error = (_req, res, next) => {
    res.status(500).json({message: 'Database error!'});
    next(new Error('Database error!'));
}
  
export const throw400Error = (message, _req, res, next) => {
    res.status(400).json({message: message});
    next(new Error(message));
}
