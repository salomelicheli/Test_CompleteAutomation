﻿function openOrderApp(){
  TestedApps.Orders.Run();
};

function closeOrderApp(){
  TestedApps.Orders.Terminate();
};

module.exports.openOrderApp = openOrderApp;
module.exports.closeOrderApp = closeOrderApp;
