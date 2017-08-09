var actransitTrip = function(){
  var fs = require('fs');
  var initialData =[];

  var x = fs.readFileSync(__dirname+'/actransitTrips.txt', 'utf8');
  var stringed = x.toString().split('\n');
  for(var i in stringed){
  initialData.push([stringed[i]]);
  }

  var dataToArray = [];
  initialData.pop();
  initialData.forEach(function(arr){
  var remove = arr.toString();
  remove = remove.replace(/(\r\n|\n|\r)/gm,"");
  return (dataToArray.push(remove.split(',')));
  });
  var dummy = [];
  dataToArray.forEach(function(op, idx){
  dummy.push({'route_id': op[0], 'service_id': op[1], 'trip_id':op[2],
  'trip_headsign': op[3], 'direction_id': op[4], 'block_id': op[5], 'shape_id': op[6]});
  });
  return dummy;
};





console.log(actransitTrip());
