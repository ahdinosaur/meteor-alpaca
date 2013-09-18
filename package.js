Package.describe({
  summary: "easy forms using jQuery and JSON-Schema"
});

Package.on_use(function (api) {
  var both = ['client', 'server'];
  api.use('jquery', 'client');
  api.add_files('alpaca.js', 'client');
  api.add_files('alpaca.css', 'client');
});
