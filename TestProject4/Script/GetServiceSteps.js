class GetServiceSteps{
  
   getResponse(serviceUrl){
      var httpObject = aqHttp.CreateGetRequest(serviceUrl);
      return httpObject.Send();
   }
   
}

module.exports = GetServiceSteps;