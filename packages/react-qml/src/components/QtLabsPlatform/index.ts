import { createRawQmlComponent } from '../../renderer';
import types from './qmltypes.json';

const generateQml = (type: string) => `import Qt.labs.platform 1.0; ${type} {}`;

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
  ColorDialog,
  FileDialog,
  FolderDialog,
  FontDialog,
  Menu,
  MenuBar,
  MenuItem,
  MenuItemGroup,
  MenuSeparator,
  MessageDialog,
  SystemTrayIcon
} = Module;

export default Module;
