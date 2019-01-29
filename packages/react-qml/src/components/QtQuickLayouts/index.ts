import { createRawQmlComponent } from '../../renderer';
import types from './qmltypes.json';

const generateQml = (type: string) => `import QtQuick.Layouts 1.3; ${type} {}`;

const Module: { [key: string]: any } = {};

for (let index = 0; index < types.length; index++) {
  const definition = types[index];
  const { name, module, defaultProperty = 'data' } = definition;
  const tagName = `${module}.${name}`;
  Module[name] = createRawQmlComponent(generateQml(name), tagName, {
    defaultProp: defaultProperty,
  });
}

export const {
  ColumnLayout,
  GridLayout,
  RowLayout,
  StackLayout
} = Module;

export default Module;
