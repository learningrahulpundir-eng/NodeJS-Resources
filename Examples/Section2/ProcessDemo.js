
const env = process.env.Node_ENV || 'development';

if(env === 'development') {
    console.log('Development Mode');
}
else if(env === 'production') {
    console.log('Production Mode');
}