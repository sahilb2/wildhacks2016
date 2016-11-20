// Require the client

var Clarifai = require('clarifai');

// initialize with your clientId and clientSecret

var app = new Clarifai.App(
  'coMOCwtkv_vgdzzyEpWVdzOdh1IVoZliNF3KIgEp',
  'OP4-qrMTeP7-ZXc89bf_9jFh-EkG8WiSzj8H9EOh'
);

// You can also use the client directly in your browser:

<script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>
<script>
  var app = new Clarifai.App(
    '{clientId}',
    '{clientSecret}'
  );
</script>


//var Clarifai = require('clarifai');
//var app = new Clarifai.App(
//  'coMOCwtkv_vgdzzyEpWVdzOdh1IVoZliNF3KIgEp',
//  'OP4-qrMTeP7-ZXc89bf_9jFh-EkG8WiSzj8H9EOh'
//);
var images = document.getElementsByTagName('img');
var nsfw_img = 'http://i.imgur.com/TKKFPFr.png';
for (var i = 0, l = images.length; i < l; i++) {
  app.models.predict('NSFWBlock',images[i].src).then(
    function(response){
      if(response[0]['name']=='safe'){
        console.log('safe');
      }
      else{
        console.log('not safe');
      }
    },
    function(error){
      console.log(error);
    }
  );
}

// http://i.imgur.com/TKKFPFr.png
