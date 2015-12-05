 Cylon.robot({
     name: 'Galvanic Skin Response (GSR)',
     connections: {
         arduino: {
             adaptor: 'firmata',
             port: '/dev/ttyACM0'
         }
     },

     devices: {
         sensor: {
             driver: 'analogSensor',
             pin: 0
         }
     },

     work: function(my) {
         var analogValue = 0;
         var tempValue = 0;
         var total = 0;
         var i = 1;

         every((2).second(), function() {
             // Média das amostras

             analogValue = my.sensor.analogRead();
             console.log('Leitura => ', analogValue);
             total += analogValue;
             console.log('Acumulado => ', total);
             console.log('Dividido por  => ', i);
             avg = (Math.round(total / i));
             console.log('Média => ', avg);
             console.log('========================================');
             i++;
             
         });

         Meteor.methods({
             getRtValue: function() {
                 var _rtValue = analogValue/100;
                 return _rtValue;
             },
             getAvg: function() {
                 var _avgGSR = avg/100;
                 return _avgGSR;
             }
            
         });
     }
 }).start();