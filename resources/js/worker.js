importScripts('/resources/js/splines-kt.js');

const { calcSplines } = self['splines-kt'];

const {
  Pose2d,
  Rotation2d,
  Rotation2d_fromDegrees,
  Rotation2d_fromRadians,
  Translation2d
} = self['splines-kt'].com.team254.lib.geometry;

Rotation2d.fromDegrees = Rotation2d_fromDegrees;
Rotation2d.fromRadians = Rotation2d_fromRadians;

// Type information / object prototypes are lost in postMessage
function deserializePoints(serializedPoints) {
  return serializedPoints.map(p =>
    new Pose2d(
      new Translation2d(p._translation_._x, p._translation_._y),
      new Rotation2d(p._rotation_._cos_angle_, p._rotation_._sin_angle)
    )
  );
}

onmessage = (e) => {
  if (e.data.type === 'CALCULATE') {


    const inputPoints = deserializePoints(e.data.payload);
    const splineData = calcSplines(inputPoints);
    if (splineData === 'no') return;
    let points = JSON.parse(splineData).points;
    let splinePoints = [];
    for (const point of points) {
      splinePoints.push(new Pose2d(new Translation2d(point.x, point.y), Rotation2d_fromRadians(point.rotation)));
    }

    postMessage({
      type: 'SPLINE_RESULT',
      payload: splinePoints
    })
  }
}
