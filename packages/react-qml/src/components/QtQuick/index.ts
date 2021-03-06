// script: generateModule, version: 0.3
import { createRawQmlComponent } from '../../renderer';
import types from './qmltypes.json';
export * from './types';

type ModuleDenifition = {
  name: string;
  module: string;
  defaultProperty?: string;
}

const generateQml = (type: string) => `import QtQuick 2.10; ${type} {}`;

const Module: { [key: string]: any } = {};

for (let index = 0; index < types.length; index++) {
  const definition = types[index] as ModuleDenifition;
  const { name, module, defaultProperty = 'data' } = definition;
  const tagName = `${module}.${name}`;
  Module[name] = createRawQmlComponent(generateQml(name), tagName, {
    defaultProp: defaultProperty,
  });
}

export const {
  VisualDataModel,
  VisualDataGroup,
  ListElement,
  ListModel,
  VisualItemModel,
  AnchorAnimation,
  AnchorChanges,
  AnimatedImage,
  AnimatedSprite,
  AnimationController,
  Behavior,
  BorderImage,
  BorderImageMesh,
  Canvas,
  ColorAnimation,
  Column,
  DoubleValidator,
  DropArea,
  Flickable,
  Flipable,
  Flow,
  FocusScope,
  FontLoader,
  FontMetrics,
  Gradient,
  GradientStop,
  Grid,
  GridMesh,
  GridView,
  Image,
  IntValidator,
  Item,
  ListView,
  Loader,
  Matrix4x4,
  MouseArea,
  MultiPointTouchArea,
  NumberAnimation,
  OpacityAnimator,
  Package,
  ParallelAnimation,
  ParentAnimation,
  ParentChange,
  Path,
  PathAnimation,
  PathArc,
  PathAttribute,
  PathCurve,
  PathCubic,
  PathInterpolator,
  PathLine,
  PathMove,
  PathPercent,
  PathQuad,
  PathSvg,
  PathView,
  PauseAnimation,
  Pinch,
  PinchArea,
  PropertyAction,
  PropertyAnimation,
  PropertyChanges,
  Rectangle,
  Repeater,
  Rotation,
  RotationAnimation,
  RotationAnimator,
  Row,
  Scale,
  ScaleAnimator,
  ScriptAction,
  SequentialAnimation,
  ShaderEffect,
  ShaderEffectSource,
  Shortcut,
  SmoothedAnimation,
  SpringAnimation,
  Sprite,
  SpriteSequence,
  State,
  StateChangeScript,
  StateGroup,
  SystemPalette,
  Text,
  TextEdit,
  TextInput,
  TextMetrics,
  TouchPoint,
  Transition,
  Translate,
  UniformAnimator,
  Vector3dAnimation,
  ViewSection,
  WorkerScript,
  XAnimator,
  YAnimator,
  RegExpValidator
} = Module;

export default Module;
