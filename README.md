# gltf-physics-unit-test
Unit tests for multiple glTF Physics implementations

This repository allows you to compare any glTF library using the test models provided by [glTF_Physics](https://github.com/eoineoineoin/glTF_Physics).
Try specifying the glTF library you want to compare in the URL argument.

https://cx20.github.io/gltf-physics-unit-test/?engines=Three.js,Babylon.js,Filament,PlayCanvas,Khronos_glTF_Viewer

## Test Models

The following test model sets from [eoineoineoin/glTF_Physics](https://github.com/eoineoineoin/glTF_Physics/tree/master/tests) are included:

| Folder | Description |
|--------|-------------|
| [RigidBodies_ColliderTypeMatrix](https://github.com/eoineoineoin/glTF_Physics/tree/master/tests/RigidBodies_ColliderTypeMatrix) | Tests combinations of collider shape type pairs (Sphere, Box, Capsule, Cylinder, Convex hull, Triangle mesh) |
| [RigidBodies_CollisionFilter](https://github.com/eoineoineoin/glTF_Physics/tree/master/tests/RigidBodies_CollisionFilter) | Tests physics collision filters (CollideWithSystems / NotCollideWithSystems) |
| [RigidBodies_Joint](https://github.com/eoineoineoin/glTF_Physics/tree/master/tests/RigidBodies_Joint) | Tests joint types (Fixed, Ball-and-socket, Hinge, Prismatic, Stiff spring, drives) |
| [RigidBodies_Materials](https://github.com/eoineoineoin/glTF_Physics/tree/master/tests/RigidBodies_Materials) | Tests physics material properties (restitution, friction, combine mode) |
| [RigidBodies_MotionProperties](https://github.com/eoineoineoin/glTF_Physics/tree/master/tests/RigidBodies_MotionProperties) | Tests motion properties of dynamic bodies (linear/angular velocity, gravity, etc.) |

## Supported Engines

The following glTF viewers/engines can be specified via the `engines` URL parameter:

Three.js, Babylon.js, Filament, PlayCanvas, Cesium, ArcGISJSAPI, AMAPJSAPI, Grimore.js, xeogl, minimal-gltf-loader, Khronos_glTF_Viewer, ClayGL, Hilo3d, X3DOM, CZPG.js, GLBoost, RedCube.js, RedGL, Ashes, Unity, pex, Rhodonite

