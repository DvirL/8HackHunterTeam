using System.Web.Http;
using WebActivatorEx;
using _8Hack.WebApi;
using Swashbuckle.Application;

[assembly: PreApplicationStartMethod(typeof(SwaggerConfig), "Register")]

namespace _8Hack.WebApi
{
    public class SwaggerConfig
    {
        public static void Register()
        {
            var thisAssembly = typeof(SwaggerConfig).Assembly;

            GlobalConfiguration.Configuration 
                .EnableSwagger(c =>
                    {
                        
                        c.SingleApiVersion("v1", "_8Hack.WebApi");
                        
                    })
                .EnableSwaggerUi(c =>
                    {
                        
                    });
        }
    }
}
