function pickRandom() {
     var obj = {
      'AFC Bournemouth -': 'Dean Court',
      'Arsenal -' : 'Emirates Stadium',
      'Aston Villa -': 	'Villa Park',
      'Chelsea -': 	'Stamford Bridge',
      'Crystal Palace -': 'Selhurst Park',
      'Everton -' : 'Goodison Park',
      'Leicester City -': 'King Power Stadium',
      'Liverpool -': 	'Anfield',
      'Manchester City -': 'Etihad Stadium',
      'Manchester United -': 'Old Trafford',
      'Newcastle United -': 'St James Park',
      'Norwich City -': 'Carrow Road', 
      'Southampton -' : 'St Mary\'s Stadium',
      'Stoke City -': 'Britannia Stadium',
      'Sunderland -': 'Stadium of Light',
      'Swansea City -': 'Liberty Stadium',
      'Tottenham Hotspur -': 'White Hart Lane',
      'Watford -' : 'Vicarage Road',
      'West Bromwich Albion -' : 'The Hawthorns',
      'West Ham United -' : 'Boleyn Ground' 
  };
      var result;
      var count = 0;
      for (var key in obj)
          if (Math.random() < 1/count++)
             result = key + ' ' + obj[key] ;
              $('.quote').html(result);
  }
  $('button').on("click", function(){
    pickRandom();
});



