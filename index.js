'use strict';
import encrypt from './src/utils/encrypt';
import uuid from './src/utils/uuid';
import * as spCore from './src/common';

export { encrypt, uuid };

import './src/extension';

window.sp = Object.assign({}, spCore);
