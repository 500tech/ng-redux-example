import './spec.helper';

const context = require.context('.', true, /\.spec\./);

context.keys().forEach(context);
