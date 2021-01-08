var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [
  {
  	'next .login' : 'Welcome to Turbo Search! Let me guide you through its features.',
  	'nextButton' : {className: "myNext", text: "Avançar"},
  	'skipButton' : {className: "mySkip", text: "Fechar"}
  },
  {
  	'key #mySearchButton' : "Insert your search request and press 'Enter'",
  	'keyCode' : 13
  },
  {
  	'click .btn' : 'This button allows you to switch between the search results'
  },
  {
  	'next .about' : 'Check the list of all the features available',
  	'shape': 'circle'
  },
  {
  	'next .contact' : 'Your feedback will be appreciated',
  	'shape': 'circle',
  	'radius': 70,
  	'showSkip' : false,
  	'nextButton' : {className: "myNext", text: "Got it!"}
	},
	{
  	'next .navbar-brand' : 'Welcome to Turbo Search! Let me guide you through its features.',
  	'nextButton' : {className: "myNext", text: "Avançar"},
  	'skipButton' : {className: "mySkip", text: "Fechar"}
  },

];

enjoyhint_instance.set(enjoyhint_script_steps2);
enjoyhint_instance.run();


var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps2 = [
  {
  	'next .login2' : 'Welcome to Turbo Search! Let me guide you through its features.',
  	'nextButton' : {className: "myNext", text: "Avançar"},
  	'skipButton' : {className: "mySkip", text: "Fechar"}
  },
  {
  	'key #mySearchButton' : "Insert your search request and press 'Enter'",
  	'keyCode' : 13
  },
  {
  	'click .btn' : 'This button allows you to switch between the search results'
  },
  {
  	'next .about' : 'Check the list of all the features available',
  	'shape': 'circle'
  },
  {
  	'next .contact' : 'Your feedback will be appreciated',
  	'shape': 'circle',
  	'radius': 70,
  	'showSkip' : false,
  	'nextButton' : {className: "myNext", text: "Got it!"}
	},
	{
  	'next .navbar-brand' : 'Welcome to Turbo Search! Let me guide you through its features.',
  	'nextButton' : {className: "myNext", text: "Avançar"},
  	'skipButton' : {className: "mySkip", text: "Fechar"}
  },

];

enjoyhint_instance.set(enjoyhint_script_steps2);
enjoyhint_instance.run();