import _ from 'lodash';

import { classNamesArgs } from '#types/classNamesArgs';

export const classNames = (...args: classNamesArgs) => {
  const classes: string[] = [];

  _.map(args, argsItem => {
    if (argsItem) {
      switch (typeof argsItem) {
        case 'string':
          classes.push(argsItem);
          break;
        case 'object':
          _(argsItem)
            .entries()
            .map(prop => {
              if (prop[1]) {
                classes.push(prop[0]);
              }

              return null;
            });
          break;
        default:
          break;
      }
    }

    return null;
  });

  return classes.join(' ');
};
