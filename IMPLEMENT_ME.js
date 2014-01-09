/* Class definitions */

/* A Point has a position defined by x, y and a centroid that it can be assigned to.
  When no centroid is assigned, the following is true: this.centroid === undefined
  Points are created when data is loaded. You shouldn't need to call new Point(...).
  */
  function Point(x, y, centroid) {
    this.x = x;
    this.y = y;
    this.centroid = centroid;
  }

/* A Centroid has a position defined by x,y.
  Centroids are created and removed by clicking on the Add Centroid and Remove Centroid buttons.
  You shouldn't need to call new Centroid(...).
  The id field is needed so that the same color is always used when displaying the centroid. Ignore this field.
  */ 
  function Centroid(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
  }

  /* App variables */

//centroids is a list of the current centroids. It starts empty until you click on add centroid.
var centroids = [];

//points is a list of currently displayed points.
var points = [];


/* IMPLEMENT THE FUNCTIONS BELOW
--------------------------------
*/

/* For each point, assign it to the cluster represented by the closest centroid */
function assignCentroids() {
  var i;
  for (i =0; i < points.length; i++ ){

    var minDist = Number.MAX_VALUE;
    var j;
    for (j=0;j<centroids.length; j++){
      var xDist = centroids[j].x - points[i].x;
      var yDist = centroids[j].y - points[i].y;
      var distance = Math.sqrt((xDist * xDist) + (yDist * yDist));
      if (distance < minDist){
        points[i].centroid = centroids[j];
        minDist = distance;
      }

    }
  }
}

/* Update the position of each centroid based on the points assigned to it. 
  The new position should be the mean of the positions of the points assigned to it.
  */
  function updateCentroids() {
    var i;

    for (i = 0; i<centroids.length; i++){
      var sameCentroid = [];
      var j;
      var h;
      var avgX=0;
      var avgY=0;

    //find points with same centroid
    for (j =0; j<points.length; j++){
      if(points[j].centroid.x ==centroids[i].x && points[j].centroid.y ==centroids[i].y){
        sameCentroid.push(points[j]);

      }
    }
      //calculate x and y averages
      for(h=0;h<sameCentroid.length;h++){
        avgX += sameCentroid[h].x;
        avgY += sameCentroid[h].y;
      }


      avgX = avgX / sameCentroid.length;
      avgY = avgY / sameCentroid.length;
      centroids[i].x = avgX;
      centroids[i].y = avgY;


    }

  }

  

